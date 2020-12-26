react-domain-verify
===

<!--dividing-->
[![Build & Deploy](https://github.com/uiwjs/react-domain-verify/workflows/Build%20&%20Deploy/badge.svg)](https://github.com/uiwjs/react-domain-verify/actions)
[![issues](https://img.shields.io/github/issues/uiwjs/react-domain-verify.svg)](https://github.com/uiwjs/react-domain-verify/issues)
[![issues](https://img.shields.io/github/issues/uiwjs/react-domain-verify.svg)](https://github.com/uiwjs/react-domain-verify/issues)
[![Forks](https://img.shields.io/github/forks/uiwjs/react-domain-verify.svg)](https://github.com/uiwjs/react-domain-verify/network)
[![Stars](https://img.shields.io/github/stars/uiwjs/react-domain-verify.svg)](https://github.com/uiwjs/react-domain-verify/stargazers)
[![Release](https://img.shields.io/github/v/release/uiwjs/react-domain-verify)](https://github.com/uiwjs/react-domain-verify/releases)
[![npm version](https://img.shields.io/npm/v/@uiw/react-domain-verify.svg)](https://www.npmjs.com/package/@uiw/react-domain-verify)

Verify that the access domain name displays content.

## Quick Start

```bash
npm i @uiw/react-domain-verify
```

```jsx
import DomainVerify from '@uiw/react-domain-verify';

function Demo() {
  return (
    <div>
      <DomainVerify href="https://uiwjs.github.io">
        访问 https://uiwjs.github.io 域名显示子组件
      </DomainVerify>
      <DomainVerify href="https://uiw.gitee.io">
        访问 https://uiw.gitee.io 域名显示子组件
      </DomainVerify>
      <DomainVerify href="uiw.gitee.io">
        访问 https://uiw.gitee.io 和 http://uiw.gitee.io 域名显示子组件
      </DomainVerify>
    </div>
  );
}

```

## Development

Runs the project in development mode.  

```bash
# Step 1, run first, listen to the component compile and output the .js file
# listen for compilation output type .d.ts file
npm run watch
# Step 2, development mode, listen to compile preview website instance
npm run start
```

## Production

Builds the app for production to the build folder.

```bash
npm run build
```

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!
