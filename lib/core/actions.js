const program = require('commander')
const { promisify } = require('util')
const download = promisify(require('download-git-repo'))
const { vueGitRepo } = require('../config/repo-config')

// callback -> promisify -> Promise -> async await
const createProjectAction = async (project) => {
    // clone project
    await download(vueGitRepo, project, { clone: true })
    // execute `npm install`

    // execute `npm run serve`
    // open browser
}

module.exports = createProjectAction