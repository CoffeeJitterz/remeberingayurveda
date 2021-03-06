const { Router } = require('express')
const controller = require ('./controller')

const router = Router()

router.get('/', controller.getEvents)
router.get('/:id', controller.getEventById)
router.post('/', controller.addEvent)
router.put('/:id', controller.updateEvent)
router.delete('/:id', controller.deleteEvent)

module.exports = router 