const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "Guest"},
    level: {type: DataTypes.STRING, defaultValue: 0},
    // add name
})

const UserStatistics = sequelize.define('user_statistics', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    games: {type: DataTypes.INTEGER},
    wins: {type: DataTypes.INTEGER},
    progress: {type: DataTypes.INTEGER},
    rank: {type: DataTypes.STRING, defaultValue: "Rookie"},
    // save questions count?
})

const Question = sequelize.define('question', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, unique: true},
    answere: {type: DataTypes.STRING},
    wrongAnswere1: {type: DataTypes.STRING},
    wrongAnswere2: {type: DataTypes.STRING},
    wrongAnswere3: {type: DataTypes.STRING},
})

const Category = sequelize.define('category', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true},
})

const Difficulty = sequelize.define('difficulty', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true},
})

const Game = sequelize.define('game', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const GameQuestion = sequelize.define('game_question', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const CategoryDifficulty = sequelize.define('category_difficulty', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

User.hasOne(UserStatistics)

User.hasOne(Game)
Game.belongsTo(User)

Game.hasMany(GameQuestion)
GameQuestion.belongsTo(Game)

Category.hasMany(Question)
Question.belongsTo(Category)

Difficulty.hasMany(Question)
Question.belongsTo(Difficulty)

Question.hasMany(GameQuestion)
GameQuestion.belongsTo(Question)

Category.belongsToMany(Difficulty, {through: CategoryDifficulty})
Difficulty.belongsToMany(Category, {through: CategoryDifficulty})

module.exports = {
    User,
    UserStatistics,
    Question,
    Game,
    GameQuestion,
    Category,
    Difficulty,
    CategoryDifficulty
}
