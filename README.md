# eslint-config-frbosquet-tsnext

Opinionated eslint config. Meant to be used with:

- Next app router
- Tailwind
- Typescript
- Tanstack query

## Installation

```
npm i -D eslint-config-frbosquet-tsnext
```

```
pnpm i -D eslint-config-frbosquet-tsnext
```

```
yarn add -D eslint-config-frbosquet-tsnext
```

### Usage

In your eslint.config.mjs file:

```
  import frbosquet from 'eslint-config-frbosquet-tsnext'

  export default [
    ...frbosquet,
    {
      // your custom rules
    }
  ]
```
