# cra-template-ab-typescript-demo

This is the TypeScript template for [Create React App](https://github.com/facebook/create-react-app).

To use this template, add `--template ab-typescript-demo` when creating a new app.

For example:

```sh
npx create-react-app my-app --template ab-typescript-demo

# or

yarn create react-app my-app --template ab-typescript-demo
```

For more information, please refer to:

- [Getting Started](https://create-react-app.dev/docs/getting-started) – How to create a new app.
- [User Guide](https://create-react-app.dev) – How to develop apps bootstrapped with Create React App.

# How to use

We use two libraries for graphql (read how to install them):

- [graphql-codegen](https://graphql-code-generator.com/docs/getting-started/installation)
- [graphql-faker](https://github.com/APIs-guru/graphql-faker)

### Scripts

Download schema from your endpoint and save it in src/graphql/schema.json

```sh
yarn gql:schema:download
```

To generate apollo hooks:

```sh
yarn gql:codegen
```

If you want to run fake API then:

```sh
yarn gql:faker
```
