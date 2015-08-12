# get-package-readme [![travis][travis-image]][travis-url] [![npm][npm-image]][npm-url] [![downloads][downloads-image]][downloads-url]

[travis-image]: https://img.shields.io/travis/feross/get-package-readme.svg?style=flat
[travis-url]: https://travis-ci.org/feross/get-package-readme
[npm-image]: https://img.shields.io/npm/v/get-package-readme.svg?style=flat
[npm-url]: https://npmjs.org/package/get-package-readme
[downloads-image]: https://img.shields.io/npm/dm/get-package-readme.svg?style=flat
[downloads-url]: https://npmjs.org/package/get-package-readme

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
branch). If you want the npm readme, you should use `readme-getter`.

## license

MIT. Copyright (c) [Feross Aboukhadijeh](http://feross.org).
