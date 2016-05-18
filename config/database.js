'use strict'

const Path = require('path')
const ProjectRoot = Path.resolve(__dirname, '..')

module.exports = {
  filename: Path.join(ProjectRoot, 'database.sqlite')
}
