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

const Game = observer ( () => {

    const {question} = useContext(Context)
    // const [inGameQuestion, setInGameQuestion] = useState('')
    // const [fetchedQuestion, setFetchedQuestion] = useState(questionArray[getRandomInt(questionArray.length)])
    // const [fetchedQuestion, setFetchedQuestion] = useState('')
    let [element, setElement] = useState('')
    
    useEffect(() => {
        fetchCategories().then(data => question.setCategories(data))
        fetchDifficulties().then(data => question.setDifficulties(data))
        fetchQuestions().then(data => question.setQuestions(data))        
    },[question])    
    
    const allQuestionArray = toJS(question.questions).rows  // this is that array whitch we get FROM BD

    let questionArray =allQuestionArray

    if(questionArray){
        let fetchedQuestionIndex = getRandomInt(questionArray.length)       //get's random index for question to show
        let fetchedQuestion = (questionArray[fetchedQuestionIndex])         //get's question for game
        // questionArray.splice(fetchedQuestionIndex,1)
        // let arr = [fetchedQuestion.title,fetchedQuestion.answere,fetchedQuestion.wrongAnswere1,fetchedQuestion.wrongAnswere2,fetchedQuestion.wrongAnswere3]  //stacvox array from baze   
        // let answereArray = arr.slice(1)
        let answereArray = [fetchedQuestion.answere,fetchedQuestion.wrongAnswere1,fetchedQuestion.wrongAnswere2,fetchedQuestion.wrongAnswere3]  //stacvox array from baze   

         element = makeElement(questionArray, answereArray,fetchedQuestionIndex)        

        const newArrayToShow = (questionArray,answereArray, fetchedQuestionIndex) => {
            if(questionArray.length>0){
                // setElement(makeElement(questionArray,answereArray,fetchedQuestionIndex))
                questionArray.splice(fetchedQuestionIndex,1)
                console.log(questionArray)
            }
            else{console.log('game over')}
        }


        return (
            <div>
                <TestFunctionalComponent props={element} title={fetchedQuestion.title}/>
                <Button onClick={()=>newArrayToShow(questionArray, getRandomInt(questionArray.length))}>Change Q</Button>
            </div>
            )
        }
});

export default Game;