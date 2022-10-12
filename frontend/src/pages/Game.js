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
    let [element, setElement] = useState(<h1>Header 1</h1>)
    let [questionArray, setQuestionArray] = useState('')

    const myFunc = (answereArray, fetchedQuestionIndex, setElement, makeElement,setQuestionArray) => {
       if(questionArray.length<1){
        console.log('avaRT')
       }
       else{
        let count  = 0
       questionArray.splice(fetchedQuestionIndex,1)
       setElement(makeElement(questionArray, answereArray,myFunc))
       setQuestionArray(questionArray)
       }
    }
    
    useEffect(() => {
        fetchCategories().then(data => question.setCategories(data))
        fetchDifficulties().then(data => question.setDifficulties(data))
        fetchQuestions().then(data => question.setQuestions(data))
    },[question])
    const allQuestionArray = toJS(question.questions).rows  // this is that array whitch we get FROM BD
    if(allQuestionArray){
        // console.log(questionArray);
        if(!questionArray){
            questionArray = allQuestionArray
            }

        let fetchedQuestionIndex = getRandomInt(questionArray.length)      //get's random index for question to show
        let fetchedQuestion = (questionArray[fetchedQuestionIndex])         //get's question for game
        let answereArray = [fetchedQuestion.answere,fetchedQuestion.wrongAnswere1,fetchedQuestion.wrongAnswere2,fetchedQuestion.wrongAnswere3]  //stacvox array from baze   
        element = makeElement(questionArray, answereArray,myFunc)
        // questionArray.splice(fetchedQuestionIndex,1)
        console.log(questionArray)

        return (
            <div className='game-page-content'>
                <TestFunctionalComponent key={fetchedQuestion.id} props={element} title={fetchedQuestion.title}/>
                <Button onClick={()=>myFunc(answereArray, fetchedQuestionIndex, setElement, makeElement, setQuestionArray)}>Change Q</Button>
                {/* <Button onClick={()=>showNextQuestion(questionArray,answereArray, getRandomInt(questionArray.length), setElement, makeElement)}>Change Q</Button> */}
            </div>
            )
    }
});
export default Game;