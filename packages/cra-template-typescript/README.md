# cra-template-ab-typescript

This is the TypeScript template for [Create React App](https://github.com/facebook/create-react-app).

To use this template, add `--template ab-typescript` when creating a new app.

For example:

```sh
npx create-react-app my-app --template ab-typescript

# or

yarn create react-app my-app --template ab-typescript
```

For more information, please refer to:

- [Getting Started](https://create-react-app.dev/docs/getting-started) – How to create a new app.
- [User Guide](https://create-react-app.dev) – How to develop apps bootstrapped with Create React App.

# How to use

We use three libraries for graphql (read how to install them):

- [graphqurl](https://github.com/hasura/graphqurl)
- [graphql-codegen](https://graphql-code-generator.com/docs/getting-started/installation)
- [graphql-faker](https://github.com/APIs-guru/graphql-faker)

## Scripts

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

### Issues

Sometimes if you run the app you can see issues with babel. Try remove _node_modules_ and _yarn.lock_ and install it again
