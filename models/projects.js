const mongoose = require('mongoose')
const Schema = mongoose.Schema

const projectSchema = new Schema({
  name: String,
  description: String,
  githubRepoUrl: String,
  deployedUrl: String,
  screenshot: String
})

const project = mongoose.model('project', projectSchema)
module.exports = project
