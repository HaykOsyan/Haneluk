import React, { useContext, useEffect, useState } from 'react';
import { Context } from '..';
import { fetchCategories, fetchDifficulties, fetchQuestions } from '../http/questionAPI';
import {observer} from 'mobx-react-lite';
import { toJS } from 'mobx';
import { getRandomInt, shuffle } from '../utils/random';
import { compareRightAnswere } from '../utils/gameLogics/compareRightAnswere';
import { makeElement } from '../utils/gameLogics/makeCardElement';
import TestFunctionalComponent from '../components/TestFunctionalComponent';
import { Button } from 'react-bootstrap';
import { showNextQuestion } from '../utils/gameLogics/showNextQuestion';
import "../public/styles/SCSS/index.scss"
const Game = observer ( () => {

    const {question} = useContext(Context)
    let [element, setElement] = useState('')
    let [questionArray, setQuestionArray] = useState('')

    const myFunc = (array, setQuestionArray,makeElement) => {
        let fetchedQuestionIndex = getRandomInt(array.length) 
        setQuestionArray(array)

        array.splice(fetchedQuestionIndex,1)
        // console.log(array)
        if(array.length<1){
            console.log('tadada')
        }
    }
    // let fetchedQuestionIndex = getRandomInt(questionArray.length)      //get's random index for question to show
    // let fetchedQuestion = (questionArray[fetchedQuestionIndex])         //get's question for game
    // let answereArray = [fetchedQuestion.answere,fetchedQuestion.wrongAnswere1,fetchedQuestion.wrongAnswere2,fetchedQuestion.wrongAnswere3]  //stacvox array from baze   
    useEffect(() => {
        fetchCategories().then(data => question.setCategories(data))
        fetchDifficulties().then(data => question.setDifficulties(data))
        fetchQuestions().then(data => question.setQuestions(data))
    // element = makeElement(questionArray, answereArray)
        
    },[question,element])
    const allQuestionArray = toJS(question.questions).rows  // this is that array whitch we get FROM BD
    if(allQuestionArray){
        console.log(questionArray);
        if(!questionArray){
            questionArray = allQuestionArray
            }
        // else{
        //     questionArray = questionArray
        // }

        let fetchedQuestionIndex = getRandomInt(questionArray.length)      //get's random index for question to show
        let fetchedQuestion = (questionArray[fetchedQuestionIndex])         //get's question for game
        let answereArray = [fetchedQuestion.answere,fetchedQuestion.wrongAnswere1,fetchedQuestion.wrongAnswere2,fetchedQuestion.wrongAnswere3]  //stacvox array from baze   
        element = makeElement(questionArray, answereArray)
        // questionArray.splice(fetchedQuestionIndex,1)
        console.log(questionArray)

        return (
            <div>
                <TestFunctionalComponent key={fetchedQuestion.id} props={element} title={fetchedQuestion.title}/>
                <Button onClick={()=>myFunc(questionArray,setQuestionArray, makeElement)}>Change Q</Button>
                {/* <Button onClick={()=>showNextQuestion(questionArray,answereArray, getRandomInt(questionArray.length), setElement, makeElement)}>Change Q</Button> */}
            </div>
            )
    }
});
export default Game;