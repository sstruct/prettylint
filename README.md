# Ptlint

Combine prettier and eslint.

## Install

    $ npm install --save-dev ptlint

## Lint a project

    $ prettylint ./path-to-lint

Add to npm scripts:

```json
"scripts": {
    "lint": "prettylint --scope react --ignore-path .gitignore ./src/**/*.js && echo 'Lint complete.'"
}
```

    $ npm run lint

More options:

    npx prettylint --help

## TODO

- [ ] Support lint typescript
- [ ] Refactor with typescript
- [ ] Unit Tests
- [ ] CI/CD

## Similar repos

- https://github.com/ikatyang/prettylint
