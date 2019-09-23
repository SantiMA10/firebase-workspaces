# Firebase Cloud Functions + Yarn Workspaces

This is a test repo to test Yarn Workspaces, Firebase Cloud Functions and publish the packages to GitHub Package Registry.

## How to setup

### SayMyName

You should change the organization name from "@santima10" to your GitHub username, since GitHub Package Registry only allows scoped packages.

To login into GitHub Package Registry, you can run:

```bash
npm login --registry=https://npm.pkg.github.com/<your-github-username>
```

**⚠️ Note: you need a [Personal Access Token from GitHub](https://github.com/settings/tokens) with: repo, write:packages and read:packages scopes to use it as password when npm ask you ⚠️**

Once you are login you can publish the package by running:

```bash
yarn build // to build the package
yarn publish:registry // to publish the new version to the registry
```

### Firebase Cloud Functions

- Add the new dependency: `@<your-github-username>/say-my-name`
- Add a `.npmrc` with:

```
//npm.pkg.github.com/:_authToken=<github-access-token>
@<your-github-username>:registry=https://npm.pkg.github.com/<your-github-username>
```

- Ready to deploy
