This repo is an experiment in getting all of the following to work together in a monorepo:

- Yarn workspaces
- Babel 7
- Jest
- Rollup
- React and React Native

There are 2 packages in the `packages` dir: `react-router` and `react-router-native`. `react-router-native` [depends on](https://github.com/mjackson/react-monorepo-stub/blob/f26d045b5ea18d3d296f3036ecff35fa6aeb4d63/packages/react-router-native/package.json#L11) `react-router`.

### Running Builds

```
$ yarn build
```

### Running Tests

```
$ yarn test
$ yarn test react-router
$ yarn test react-router-native
```

### Goals

There are a few goals:

- Keep Babel config in .babelrc files next to code that needs it
- From the repo root:
	- Build all packages together
	- Test all packages together
	- Test an individual package

### Verifying the Builds

You'll know the builds are working correctly when you can run the build and then copy the production (or development) JS file into the `fixtures/hello-world` directory in a given project. Then run that project and everything should work fine.
