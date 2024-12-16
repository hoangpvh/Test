git checkout . && \
git checkout develop && \
git pull origin develop && \
yarn install && \
yarn build && \
pm2 restart $1