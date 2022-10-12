const Router = require('express')
const router = new Router()
const DifficultyController = require('../controllers/difficultyController')
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')

router.post('/',checkRoleMiddleware('ADMIN'), DifficultyController.create)
router.get('/', DifficultyController.getAll)
router.get('/:id', DifficultyController.getOne)
router.delete('/:id', DifficultyController.delete)

module.exports = router