const express = require('express')
const Projects = require('../controllers/projects')
const router = express.Router()

router.get('/', Projects.index)
// router.get('/:id', Projects.show)
router.post('/', Projects.create)
// router.patch('/:id', Projects.update)
// router.delete('/:id', Projects.destroy)
module.exports = router
