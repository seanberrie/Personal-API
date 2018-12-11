const Project = require('../models/projects')

module.exports = {
  index: (req, res) => {
    Project.find({}, (err, projects) => {
      if (err) res.json({ success: false, err })
      res.json({ success: true, projects })
    })
  },
  create: (req, res) => {
    Project.create(req.body, (err, newProject) => {
      if (err) res.json({ success: false, err })
      res.json({ success: true, newProject })
    })
  },
  show: (req, res) => {
    Project.findById(req.params.id, (err, project) => {
      if (err) res.json({ success: false, err })
      res.json({ success: true, project })
    })
  },
  update: (req, res) => {
    let { body, params } = req
    Project.findByIdAndUpdate(params.id, body, { new: true }, (err, updateProject) => {
      if (err) res.json({ success: false, err })
      res.json({ success: true, updateProject })
    })
  },
  destroy: (req, res) => {
    Project.findByIdAndDelete(req.params.id, (err, deleteProject) => {
      if (err) res.json({ success: false, err })
      res.json({ success: true, deleteProject })
    })
  }
}
