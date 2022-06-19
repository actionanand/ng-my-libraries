# NxMonorepoPractice

This project was generated using [Nx](https://nx.dev) - [Angular 14.0.2](https://blog.angular.io/angular-v14-is-now-available-391a6db736af)

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

🔎 **Smart, Fast and Extensible Build System**

## How I created this repo

installing NX globally

```bash
npm install -g nx
```

creating nx workspace with angular

```bash
npx create-nx-workspace --preset=angular
```

running angular app in development

```bash
nx serve app-name
```

to see the files to be changed or created while creating component, use the flag `--dry-run`

```bash
nx g c home-page --project=project-name --dry-run
```

- [Getting started with NX and Angular](https://nx.dev/#getting-started)

## Quick Start & Documentation

[Nx Documentation](https://nx.dev/angular)

[10-minute video showing all Nx features](https://nx.dev/getting-started/intro)

[Interactive Tutorial](https://nx.dev/tutorial/01-create-application)

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are our core plugins:

- [Angular](https://angular.io)
  - `ng add @nrwl/angular`
- [React](https://reactjs.org)
  - `ng add @nrwl/react`
- Web (no framework frontends)
  - `ng add @nrwl/web`
- [Nest](https://nestjs.com)
  - `ng add @nrwl/nest`
- [Express](https://expressjs.com)
  - `ng add @nrwl/express`
- [Node](https://nodejs.org)
  - `ng add @nrwl/node`

There are also many [community plugins](https://nx.dev/community) you could add.

## Generate an application

Run `ng g @nrwl/angular:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `ng g @nrwl/angular:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@nx-monorepo-practice/mylib`.

## Generating publishable library in nx and publishing

```bash
ng g @nrwl/angular:lib lib1 --publishable --importPath="@<organization_name>/lib1"
```

```bash
ng g @nrwl/angular:lib lib1 --publishable --importPath="@<organization_name>/lib1" --tags="scope:public,type:util,target:all"
```

```bash
ng g @nrwl/angular:lib lib2 --publishable --importPath="lib2"
```

- Building

    ```bash
    $ nx build lib1
    $ nx build lib2
    ```

- You will find built and ready to publish versions in `dist/libs/lib1` and `dist/libs/lib2`. Now we ready to publish it to npm. You need to go to dist directory of your project

    ```bash
    cd /dist/libs/lib1
    ```

- Publishing

    ```bash
    npm publish --access public
    ```

## Development server

Run `ng serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng g component my-component --project=my-app` to generate a new component.

## Build

Run `ng build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx graph` to see a diagram of the dependencies of your projects.

## Resources

- [What’s New in Angular 14?](https://www.bacancytechnology.com/blog/whats-new-in-angular-14)
- [Publishable libraries with Nx Monorepo - part 1](https://dev.to/agroupp/publishable-libraries-with-nx-monorepo-part-1-1ae)
- [HOW TO DEPLOY NPM MODULES IN AN NX MONOREPO AND GITHUB ACTIONS?](https://yonatankra.com/how-to-deploy-npm-modules-in-an-nx-monorepo-and-github-actions/)

## Further help

Visit the [Nx Documentation](https://nx.dev/angular) to learn more.

## ☁ Nx Cloud

### Distributed Computation Caching & Distributed Task Execution

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-cloud-card.png"></p>

Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times. Even teams that are new to Nx can connect to Nx Cloud and start saving time instantly.

Teams using Nx gain the advantage of building full-stack applications with their preferred framework alongside Nx’s advanced code generation and project dependency graph, plus a unified experience for both frontend and backend developers.

Visit [Nx Cloud](https://nx.app/) to learn more.