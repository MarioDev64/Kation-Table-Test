## Contents

- [Getting started](#getting-started)
- [Conventional Commit](#conventional-commit)
  - [Benefits using commitlint](#benefits-using-commitlint)
- [How use Linter](#for-linter)

---

## Getting Started

First, install all necessary dependencies:

```bash
npm install
# or
yarn install
```

Then, Initiate Json Server to serve the data.

```bash
npm run start:server
# or
yarn start:server
```

Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

To finish, you be able to run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Conventional Commit

You're able to use conventional commit in this project.

```bash
git add .

# then

npm run commit
# or
yarn commit
```

### Benefits using commitlint

- [Why Use Conventional Commits?](https://www.conventionalcommits.org/en/v1.0.0-beta.2/#why-use-conventional-commits)
- ["The perks of committing with conventions" (Talk slides)](https://slides.com/marionebl/the-perks-of-committing-with-conventions#/)

## For Linter

This project have default eslint configured, you can execute it in this way:

```bash
npm run eslint .
# or
yarn eslint .
```
