/*! get-package-readme. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
module.exports = getPackageReadme

var get = require('simple-get')
var gh = require('github-url-to-object')

var NPM_REGISTRY = 'https://registry.npmjs.org/%s'
var GITHUB_README = 'https://raw.githubusercontent.com/%s'

function getPackageReadme (pkgName, cb) {
  var npmUrl = NPM_REGISTRY.replace('%s', pkgName)
  get.concat(npmUrl, function (err, res, data) {
    if (err) return cb(err)
    try {
      data = JSON.parse(data.toString())
    } catch (err) {
      return cb(new Error(pkgName + ': cannot parse registry data: ' + err.message))
    }

    var checkFallback = function (err) {
      if (data.readme) {
        return cb(null, data.readme)
      }
      return cb(err)
    }

    var readmeFilename = data.readmeFilename
    if (!readmeFilename) return checkFallback(new Error(pkgName + ': package.json has no readmeFilename'))

    var repoUrl = data.repository && data.repository.url
    if (!repoUrl) return checkFallback(new Error(pkgName + ': package.json has no repository'))

    var repoObj = gh(repoUrl)
    var user = repoObj && repoObj.user
    var repo = repoObj && repoObj.repo
    if (!user || !repo) return checkFallback(new Error(pkgName + ': cannot parse repository url'))

    var readmePath = user + '/' + repo + '/master/' + readmeFilename
    var githubUrl = GITHUB_README.replace('%s', readmePath)

    get.concat(githubUrl, function (err, res, data) {
      if (err) return checkFallback(err)
      cb(null, data.toString())
    })
  })
}
