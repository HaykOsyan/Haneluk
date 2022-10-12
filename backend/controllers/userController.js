const ApiError = require('../error/ApiError')
const bcript = require('bcrypt')
const {User, Game} = require('../models/models')
const jwt = require('jsonwebtoken')

const generateJwt = (id, email, role, level) => {
    return jwt.sign(
        {id, email, role, level},
        process.env.SECRET_KEY,
        {expiresIn:'24h'}
        )
}

class UserController {

    async registration (req, res, next) {
        const {email, password, role, level} = req.body
        if(!email || !password){
            return next(ApiError.badRequest('pass or email wrong'))
        }
        const candidate = await User.findOne({where:{email}})
        if(candidate){
            return next(ApiError.badRequest('email Used'))
        }
        const hashPassword = await bcript.hash(password,5)
        const user = await User.create({email, role, level, password:hashPassword})
        const game = await Game.create({userId: user.id})
        const token = generateJwt(user.id, user.email, user.role, user.level)
            return res.json(token)
    }
    
    async login (req, res, next) {
        const {email, password} = req.body
        const user = await User.findOne({where:{email}})
        if(!user){
            next(ApiError.internal('no user with such email hey You'))
        }
        let comparePassword = bcript.compareSync(password, user.password)
        if(!comparePassword){
            next(ApiError.internal('wrong e pass'))
        }
        const token = generateJwt(user.id, user.email, user.role, user.level)
        return res.json(token)
    }

    async check (req, res) {
        const token = generateJwt(req.user.id, req.user.email, req.user.role, req.user.level)
        return res.json(token)
    }
}

module.exports = new UserController()