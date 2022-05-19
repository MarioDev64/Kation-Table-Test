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

Then, development server.
Hint: The project use concurrently.
please check `packge.json` `scripts` section.

```bash
npm start
# or
yarn start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
If you want to see json server in the browser, open [http://localhost:3001](http://localhost:3001).

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
