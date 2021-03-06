const { Router } = require('express')
const controller = require('./controller')

const router = Router()

router.get('/', controller.getBlogs)
router.get('/:id', controller.getBlogsById)
router.post('/', controller.addBlog)
router.put('/:id', controller.updateBlog)
router.delete('/:id', controller.deleteBlog)

module.exports = router 