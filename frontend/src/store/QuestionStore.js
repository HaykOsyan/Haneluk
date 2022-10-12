import {makeAutoObservable} from "mobx"

export default class QuestionStore {
    constructor() {
        this._categories = []
        this._difficulties = ['dsfdsfsf','sdfdsfdf']
        this._questions = []
        makeAutoObservable(this)
    }

    setCategories(categories){
        this._categories = categories
    }

    setDifficulties(difficulties){
        this._difficulties = difficulties
    }

    setQuestions(questions){
        this._questions = questions
    }

    get categories(){
        return this._categories
    }

    get difficulties(){
        return this._difficulties
    }

    get questions(){
        return this._questions
    }
}