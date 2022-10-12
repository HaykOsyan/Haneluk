const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const categoryRouter = require('./categoryRouter')
const difficultyRouter = require('./difficultyRouter')
const questionRouter = require('./questionRouter')

router.use('/user', userRouter)
router.use('/category', categoryRouter)
router.use('/difficulty', difficultyRouter)
router.use('/question', questionRouter)

module.exports = router