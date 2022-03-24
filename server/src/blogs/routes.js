const { Router } = require('express')
const controller = require('./controller')

const router = Router()

router.get('/', controller.getBlogs)
router.get('/:id', controller.getBlogsById)

module.exports = router 