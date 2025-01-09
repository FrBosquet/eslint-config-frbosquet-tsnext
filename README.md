# eslint-config-frbosquet-tsnext

Opinionated eslint config. Meant to be used with:

- Next app router
- Tailwind
- Typescript
- Tanstack query

And with the flat config format of eslint

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

#### Usage with shadcn/ui

If you want to avoid shadcn components from being parsed by the linter:

```
  import frbosquet from 'eslint-config-frbosquet-tsnext'

  export default [
    ...frbosquet,
    {
      // your custom rules
    },
    {
        ignores: ['components/ui/**/*'],
    }
  ]
```