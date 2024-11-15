# Company website(funcoding.jp)

##### Staging:
https://staging.funcoding.jp/

Environment Requirements

This project is developed with the following versions:

```
Node: v20.10.0
Yarn: v1.22.22
```

## Version Management

This project recommends using `Volta` for managing Node.js and Yarn versions.

## 🚀 How to setup

Install packages with yarn

```sh
yarn
```

### How to run

Run the script

```sh
yarn dev
```

It shows the prompt like below

```
yarn run v1.22.22
$ next dev
  ▲ Next.js 14.2.15
  - Local:        http://localhost:3000

 ✓ Starting...
 ✓ Ready in 2.7s
```

## Testing

You can run tests with the command below

```
yarn test
```

## Lint

You can run Lint with the command below

```
yarn lint
```

Also you can use auto fix feature with `--fix` option
Some easy problems can be solved automatically with this command

```
yarn lint --fix
```

## Directory Structure

### Atomic Design

We use [Atomic Design](https://atomicdesign.bradfrost.com/chapter-2/) for organizing files in this project

- Atoms

  - Atoms are fundamental components, such as Button, Input, Text, etc
  - You shouldn't name it as a specific name, need to think it's reused in many places
  - Atoms shouldn't import any other components
- Molecules

  - Still should be abstruct but less than atoms, such as SearchButton, EmailInput, PasswordText, etc
  - Molecules can import only atoms and molecules
- Organisms

  - In this level, the UI can have features with combined molecues and atoms
  - It's less abstract than molecues but still need to think about being reused
    - e.g. AuthForm (Not LoginForm and SignUpForm)
  - Organisms can import only atoms, molecules and organisms
- Templates

  - Templates are quite different from Atoms, Molecules and Organism, it just defines the layout
  - **It shouldn't import any copmonents, it should receive copmonents as props**
- Pages

  - Pages are only concrete components, it doesn't need to be abstruct
  - Put Organisms (can be Molecules and Atoms) to Templates to build actual pages

Here is the example of the actual structure

```
├── components
│   ├── pages
│   │   ├── **/*.tsx
│   │   ├── __tests__
│   ├── templates
│   │   ├── __tests__
│   ├── organisms
│   │   ├── __tests__
│   ├── molecules
│   │   ├── __tests__
│   ├── atoms
│   │   ├── Button.tsx
│   │   ├── __tests__
│   │   │   ├── Button.test.tsx
├── constants
│   ├── color.ts
│   ├── size.ts
├── features
│   │   ├── authSlice.ts
│   │   ├── __tests__
│   │   │   ├── authSlice.ts
├── hooks
│   │   ├── useAuth.ts
│   │   ├── __tests__
│   │   │   ├── useAuth.test.ts
└── App.tsx
```


## Frequently used Make commands

|                command                | explanation                                                                                                                                                                                                                                                                                                             |
| :------------------------------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `make switch-to-pull PULL_NUMBER=10` | Fetch code from other members' pull request and run it.<br />`PULL_NUMBER=10` 10 is number of pull request, for example: The pull request has its URL: https://github.com/funcoding-inc/jewelry-website/pull/17<br />=>  **17** is the `PULL_NUMBER` value.<br />Require: Your upstream name is `origin` |
|       `make switch-to-develop`       | Switch the code base to the `develop` branch and run it                                                                                                                                                                                                                                                               |
|              `make up`              | Run app with the current code                                                                                                                                                                                                                                                                                           |
|             `make down`             | Stop app                                                                                                                                                                                                                                                                                                                |
