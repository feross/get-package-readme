module.exports = getPackageReadme

var get = require('simple-get')
var gh = require('github-url-to-object')

var NPM_REGISTRY = 'https://registry.npmjs.org/%s/latest'
var GITHUB_README = 'https://raw.githubusercontent.com/%s/master/README.md'

function getPackageReadme (pkgName, cb) {
  var npmUrl = NPM_REGISTRY.replace('%s', pkgName)
  get.concat(npmUrl, function (err, data) {
    if (err) return cb(err)
    try {
      data = JSON.parse(data.toString())
    } catch (err) {
      return cb(new Error(pkgName + ': cannot parse registry data: ' + err.message))
    }
    var repoUrl = data.repository && data.repository.url
    if (!repoUrl) return cb(new Error(pkgName + ': package.json has no repository'))

    var repoObj = gh(repoUrl)
    var user = repoObj && repoObj.user
    var repo = repoObj && repoObj.repo
    if (!user || !repo) return cb(new Error(pkgName + ': cannot parse repository url'))

    var githubUrl = GITHUB_README.replace('%s', user + '/' + repo)

    get.concat(githubUrl, function (err, data) {
      if (err) return cb(err)
      cb(null, data.toString())
    })
  })
}
