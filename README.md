# get-package-readme [![travis][travis-image]][travis-url] [![npm][npm-image]][npm-url] [![downloads][downloads-image]][downloads-url] [![javascript style guide][standard-image]][standard-url]

[![Greenkeeper badge](https://badges.greenkeeper.io/feross/get-package-readme.svg)](https://greenkeeper.io/)

[travis-image]: https://img.shields.io/travis/feross/get-package-readme/master.svg
[travis-url]: https://travis-ci.org/feross/get-package-readme
[npm-image]: https://img.shields.io/npm/v/get-package-readme.svg
[npm-url]: https://npmjs.org/package/get-package-readme
[downloads-image]: https://img.shields.io/npm/dm/get-package-readme.svg
[downloads-url]: https://npmjs.org/package/get-package-readme
[standard-image]: https://img.shields.io/badge/code_style-standard-brightgreen.svg
[standard-url]: https://standardjs.com

### Get the GitHub readme for an npm package

## install

```
npm install get-package-readme
```

## usage

```js
var getPackageReadme = require('get-package-readme')

getPackageReadme('webtorrent', function (err, readme) {
  if (err) throw err
  console.log(readme)
})
```

## why this instead of [`readme-getter`](https://www.npmjs.com/package/readme-getter)?

`get-package-readme` (this package) gets an npm packages' GitHub readme (from the `master`
branch) and falls back to the npm readme if it exists. If you want just the npm readme, you should use `readme-getter`.

## license

MIT. Copyright (c) [Feross Aboukhadijeh](http://feross.org).
