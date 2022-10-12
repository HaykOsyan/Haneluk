const {Difficulty} = require('../models/models')
const ApiError = require('../error/ApiError')

class DifficultyController {

    async create (req,res) {
        const {name} = req.body
        const difficulty = await Difficulty.create({name})
        return res.json({difficulty})
    }

    async getAll (req,res) {
        const difficulties = await Difficulty.findAll()
        return res.json({difficulties})
    }

    async getOne (req,res) {
        const {id} = req.params
        const difficulty = await Difficulty.findOne({where:{id}})
        return res.json(difficulty)
    }

    async update (req,res) {
        
    }
// Stugel?!!!!!
    async delete (req,res) {
        const {id} =req.params
        let data = await Difficulty.destroy({where:{id}})
        return res.json(res)
    }
}

module.exports = new DifficultyController()