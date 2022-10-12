const Router = require('express')
const router = new Router()
const QuestionController = require('../controllers/questionController')
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')

router.post('/',checkRoleMiddleware('ADMIN'), QuestionController.create)
router.get('/', QuestionController.getAll)
router.get('/:id', QuestionController.getOne)
router.delete('/:id', QuestionController.delete)
router.put('/:id', QuestionController.update)

module.exports = router