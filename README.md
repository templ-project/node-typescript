# Templ Node.js

<img alt="JavaScript Logo" src="https://github.com/templ-project/node-typescript/blob/main/typescript.svg?raw=true" width="20%" align="right" />

<!-- Project Description Starts Here -->

> _Any fool can write code that a computer can understand. Good programmers write code that humans can understand._ – Martin Fowler

> **node-typescript** is a template project, designed by [Templ Project](http://templ-project.github.io) for writing [Node.js](https://nodejs.org/en/) or [Deno](https://deno.com/) modules using [TypeScript](https://www.typescriptlang.org/).
>
> **node-typescript** implements:
>
> - [jscpd](https://github.com/kucherenko/jscpd), [dependency-cruiser](https://github.com/sverweij/dependency-cruiser), [sonarqube](https://www.sonarqube.org/) for code analisys
> - [prettier](https://prettier.io/) for code formatting
> - [eslint](https://eslint.org/), [oxlint](https://oxc-project.github.io/) for linting
> - [ava](https://github.com/avajs), [jasmine](https://jasmine.github.io/), [jest](https://jestjs.io/), [mocha](https://mochajs.org/), [vitest](https://vitest.dev/) for unit testing
> - [tsc](https://www.typescriptlang.org/docs/handbook/compiler-options.html), [esbuild](https://esbuild.github.io/), [rollup](https://rollupjs.org/), [swc](https://swc.rs/) for building
>
> By default, this implementation uses [npm](https://www.npmjs.com/), but you can easily change it to [yarn](https://yarnpkg.com/) or [pnpm](https://pnpm.js.org/) or any other package manager.

<!-- Project Description Ends Here -->

<!--
Insert Table of Contents Here
This can be done using [AlanWalk.markdown-toc](https://marketplace.visualstudio.com/items?itemName=AlanWalk.markdown-toc) plugin,
which is also included in
[itmcdev.generic-extension-pack](https://marketplace.visualstudio.com/items?itemName=itmcdev.generic-extension-pack) extension pack.
-->
<!-- TOC -->

- [Templ Node.js](#templ-nodejs)
  - [Getting Started](#getting-started)
    - [Prerequisites / Dependencies](#prerequisites--dependencies)
      - [For Windows](#for-windows)
      - [For Linux/Unix/OSX](#for-linuxunixosx)
      - [Known Issues / Troubleshooting](#known-issues--troubleshooting)
    - [Installation](#installation)
    - [Development](#development)
      - [Requirements](#requirements)
    - [Testing](#testing)
      - [Single Tests](#single-tests)
    - [Deployment](#deployment)
  - [Authors](#authors)
  - [License](#license)

<!-- /TOC -->

## Getting Started

### Prerequisites / Dependencies

<!-- What things you need to install the software and how to install them (based on each OS type). -->

##### For Windows

- Please install [git-scm](https://git-scm.com/download/win) tool

##### For Linux/Unix/OSX

- Please install `git`

```bash
# i.e debian
sudo apt-get install git -y
# i.e mac OS
brew install git
```

#### Known Issues / Troubleshooting

- unable to configure **mocha** properly for testing
- latest **eslint** does not support latest **typescript**
- due to eslint plugin incompatibilities, `npm install` requires `--legacy-peer-deps` flag

### Installation

<!--
A step by step series of examples that tell you how to get a development env running
Use sub-headers if necesary
-->

```bash
git clone https://github.com/templ-project/node-typescript your_project
cd your_project
rm -rf .git
git init
git add remote origin https://url/to/your/project/repository
git add .
git commit -am "init"
git push origin master
npm install
# yarn install
# pnpm instal
```

### Development

<!-- Explain any development process for the project, if necesary -->

#### Requirements

- Please install [NodeJs](https://nodejs.org/en/). We support version 10.x and above.
- Please instal a JavaScript/TypeScript IDE
  - [Visual Studio Code](https://code.visualstudio.com/) with [ITMCDev Babel Extension Pack](https://marketplace.visualstudio.com/items?itemName=itmcdev.node-babel-extension-pack) or [ITMCDev TypeScript Extension Pack](https://marketplace.visualstudio.com/items?itemName=itmcdev.node-typescript-extension-pack)
  - [Jetbrains WebStorm](https://www.jetbrains.com/webstorm/)
  - [Vim](https://www.vim.org/) with [neoclide/coc.nvim](https://github.com/neoclide/coc.nvim) and [HerringtonDarkholme/yats.vim](https://github.com/HerringtonDarkholme/yats.vim) extensions.
  - Any other IDE you trust.

### Testing

<!-- Explain how to run the automated tests for this system -->

Run unit tests using `npm run test`.

Testing is currently set to use unittest.

#### Single Tests

Run single unit tests file, by calling `npm run test:single -- test/path/to/file.test.js`

```bash
npm run test:single -- test/path/to/index.test.js
```

### Deployment

<!-- Add additional notes about how to deploy this on a live system -->

Please check [release-it](https://www.npmjs.com/package/release-it) for making releases to [npmjs.com](https://www.npmjs.com/) or any other repository tool, then run:

```bash
npm run release
```

## Authors

- [Dragos Cirjan](mailto:dragos.cirjan@gmail.com) - Initial work

<!-- ## Issues / Support

Add a set of links to the [issues](/templ-project/node-typescript/issues) page/website, so people can know where to add issues/bugs or ask for support. -->

## License

<!-- Add licence fit for the project -->

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

<!-- ## Changelog

Small changelog history. The rest should be added to [CHANGELOG.md](CHANGELOG.md).

See here a template for changelogs: https://keepachangelog.com/en/1.0.0/

Also see this tool for automatically generating them: https://www.npmjs.com/package/changelog -->
