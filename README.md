# schdesign-web

[![Build status](https://img.shields.io/travis/simonyiszk/schdesign-web/master.svg)](https://travis-ci.org/simonyiszk/schdesign-web)
[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

Website of Schönherz Design Stúdió.

## 🚀 Getting started

- Clone this project and install all the required dependencies using [`yarn`][yarn]
- Start a development server with `yarn develop`
  - _Other scripts like `build`, [`format`](#automatic-code-formatting), [`type-check`](#static-type-checking) and [`lint`](#linting) are also available_

[yarn]: https://yarnpkg.com/

### Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/simonyiszk/schdesign-web)

## ✨ Developer experience

### Automatic code formatting

[Prettier][] is an opinionated code formatter aiming to provide codebase consistency when multiple developers work on the same project. The main reason behind adopting it is to [stop all the on-going debates over coding styles][].

[prettier]: https://prettier.io/
[stop all the on-going debates over coding styles]: https://prettier.io/docs/en/why-prettier.html

### Static type checking

[TypeScript][] adds optional types to JavaScript, preventing several programming mistakes. For a quick guide about using React with it, please refer to the [React TypeScript Cheatsheet].

[typescript]: https://www.typescriptlang.org/
[react typescript cheatsheet]: https://github.com/sw-yx/react-typescript-cheatsheet

### Linting

Linters are tools that analyze source code to flag programming errors, bugs, stylistic errors, and suspicious constructs. Source code is linted by [ESLint][], enforcing the [Airbnb JavaScript Style Guide][] through an overridable set of rules provided by [eslint-config-airbnb][].

[eslint]: https://eslint.org/
[airbnb javascript style guide]: https://github.com/airbnb/javascript
[eslint-config-airbnb]: https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb
