# cno-test
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![Semantic Versioning 2.0.0](https://img.shields.io/badge/semver-2.0.0-brightgreen?style=flat-square)](https://semver.org/spec/v2.0.0.html)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg?style=flat-square)](https://conventionalcommits.org)
[![License](https://img.shields.io/github/license/Anadian/cno-test)](https://github.com/Anadian/cno-test/blob/main/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/cno-test)](https://www.npmjs.com/package/cno-test)
[![Coverage Status](https://coveralls.io/repos/github/Anadian/cno-test/badge.svg?branch=main)](https://coveralls.io/github/Anadian/cno-test?branch=main)
[![ci](https://github.com/Anadian/cno-test/actions/workflows/ci.yml/badge.svg)](https://github.com/Anadian/cno-test/actions/workflows/ci.yml)

> Micropackage: a simple, ultra-minimal test framework built around Node's builtin test runner.
# Table of Contents
- [Background](#Background)
- [Install](#Install)
- [Usage](#Usage)
- [API](#API)
- [Contributing](#Contributing)
- [License](#License)
# Background
# Install
Available on the [npm registry](https://www.npmjs.com/package/cno-test) as `cno-test`.
Adding it to project using [pnpm](https://pnpm.io/cli/add):
```sh
pnpm add --save cno-test
```
It can, of course, also be installed by [npm](https://docs.npmjs.com/cli/v8/commands/npm-install) or [yarn](https://yarnpkg.com/getting-started/usage) using the normal methods.
# Usage
```js
import TestNS from 'cno-test'; // Default export is a full "namespace".
import { errorExpected } from 'cno-test'; // Just the `errorExpected` function.
```
# API
# Contributing
Changes are tracked in [CHANGELOG.md](CHANGELOG.md).
# License
MIT ©2024 Anadian

SEE LICENSE IN [LICENSE](LICENSE)

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/)This project's documentation is licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/).
