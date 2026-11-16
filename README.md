# Lecture 24, the starting project

Not run from here. `../setup.sh` copies these files into `~/ci-demo`, makes it
a git repository and pushes it to GitHub. The full steps are in `../demo.pdf`.

| File | Job |
|---|---|
| `package.json` | `"type": "module"`, and `npm test` runs `node --test` |
| `package-lock.json` | must be committed: `npm ci` and `cache: npm` both refuse to run without it |
| `sum.js`, `sum.test.js` | one function, one test. Demo 2 breaks the test on purpose |

The files the demos add live in `../snippets/`:

| File | Demo | Copy to |
|---|---|---|
| `ci.yml` | 1 | `.github/workflows/ci.yml` |
| `ci-with-db.yml` | 4 | `.github/workflows/ci.yml`, replacing the demo 1 file |
| `db.test.js` | 4 | the repo root, after `npm i pg` |

`db.test.js` is skipped when `DATABASE_URL` is unset, so `npm test` still
passes on a laptop.
