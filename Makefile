# Jewelry build environment
# local, develop, staging, production
NODE_ENV ?= local

APP_URL = http://localhost:3001/
APP_NAME = STAGING.FUNCODING.JP

build:
	docker compose build

up:
	docker compose up -d

switch-to-pull:
	@make detect-changes
	git fetch origin pull/$(PULL_NUMBER)/head:$(PULL_NUMBER) && git checkout $(PULL_NUMBER)
	@make build
	@make up
	@make open-url

switch-to-develop:
	@make detect-changes
	git pull origin develop && git checkout develop
	@make build
	@make up

release-develop:
	git checkout . && git checkout develop && git pull origin develop
	@make build
	@make up


start-pm2:
	pm2 start bash --name "$(APP_NAME)" -- -c "yarn start -p 3001"

release-develop-with-pm2:
	@echo "Running the release process from bash script..."
	./scripts/release-develop.sh $(APP_NAME)

down:
	docker compose down

reset-changes:
	@echo "Resetting all changes..."
	git reset --hard

detect-changes:
	@echo "Checking for file changes..."
	@if git diff --quiet; then \
		echo "No changes detected."; \
	else \
		echo "Changes detected."; \
		git status --short; \
		read -p "Do you want to reset all file changes? (y/n): " choice; \
		if [ "$$choice" = "y" ]; then \
			$(MAKE) reset-changes; \
		else \
			echo "Changes not reset."; \
		fi; \
	fi

open-url:
	open $(APP_URL) || xdg-open $(APP_URL)
