const {Question, Category, Difficulty} = require('../models/models')
const ApiError = require('../error/ApiError')

class QuestionController {

    async create (req,res, next) {
        try {
            const {title, answere, wrongAnswere1, wrongAnswere2, wrongAnswere3, categoryId, difficultyId} = req.body
            const question = await Question.create({title, answere, wrongAnswere1, wrongAnswere2, wrongAnswere3, categoryId, difficultyId})
            return res.json({question})
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }

    async getAll (req,res) {

        let {categoryId,difficultyId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = limit * page - limit
        let questions;
        if(!categoryId && !difficultyId){
            questions = await Question.findAndCountAll({
                include:[{
                    model:Category,
                    attributes:['name'],
                },                
                {
                    model:Difficulty,
                    attributes:['name']
                }],limit,offset,

            })
        }
        if(categoryId && !difficultyId){
            questions = await Question.findAndCountAll({where:{categoryId}, limit,offset})
        }
        if(!categoryId && difficultyId){
            questions = await Question.findAndCountAll({where:{difficultyId}, limit,offset})
        }
        if(categoryId && difficultyId){
            questions = await Question.findAndCountAll({where:{difficultyId,categoryId}, limit,offset})
        }

        return res.json(questions)
    }

    async getOne (req,res) {
        const {id} = req.params
        const question = await Question.findOne({where:{id}})
        return res.json(question)
    }


    async update (req,res,next) {
        const {id} = req.params
        try {
            const {title, answere, wrongAnswere1, wrongAnswere2, wrongAnswere3, categoryId, difficultyId} = req.body
            const question = await Question.update(
                {title, answere, wrongAnswere1, wrongAnswere2, wrongAnswere3, categoryId, difficultyId},
                {where:{id}}
                 )
            return res.json({question})
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
        // const {id} = req.params
        // let question = await Question.update
    }

    async delete (req,res) {
        const {id} =req.params
        let data = await Question.destroy({where:{id}})
        return ('Question successfully deleted')
    }
}

module.exports = new QuestionController()