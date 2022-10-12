import React, { useContext, useEffect, useState } from 'react';
import QuestionTr from './QuestionTr';
import { Table } from 'react-bootstrap';
import { Context } from '../..';
import { toJS } from 'mobx';
import { fetchOneCategory, fetchOneDifficulty } from '../../http/questionAPI';



const QuestionTable = ({tableHeaders}) => {
    const { question } = useContext(Context)

    const [allQuestionsCategory, setallQuestionsCategory] = useState('')
    const [allQuestionsDifficulty, setallQuestionsDifficulty] = useState('')

    const allQuestions = [...toJS(question.questions)]


    console.log(allQuestions[0].difficultyId)// berel fetch cat diff poxel catid difid


    // console.log(allQuestions[0].difficultyId)// berel fetch cat diff poxel catid difid
    
    useEffect(() => {

        allQuestions.map((oneQuestion) =>
                // oneQuestion.category = 'allQuestionsCategory'
                // fetchOneCategory(oneQuestion.categoryId).then(data => setallQuestionsCategory(data.name)).then(console.log(oneQuestion))
                fetchOneCategory(oneQuestion.categoryId).then(data => setallQuestionsCategory(data.name)).then(oneQuestion.category = allQuestionsCategory).then(console.log(oneQuestion))
                
            )

        // for (let i = 0; i < allQuestions.length; i++) {
        //     fetchOneCategory(allQuestions[i].categoryId).then(data => setallQuestionsCategory(data.name))
        //     fetchOneDifficulty(allQuestions[i].difficultyId).then(data => setallQuestionsDifficulty(data.name))// mshakel ete id chka catch error
        //  allQuestions[i].category = allQuestionsCategory
        //  allQuestions[i].difficulty = allQuestionsDifficulty
    // }
    },[])
    // console.log(allQuestions)


    // allQuestions[1].category = allQuestionsCategory
    

    // allQuestions[0].category = 'allQuestionsCategory'
    // allQuestions[0].difficulty = allQuestionsDifficulty

    return (
        <Table striped bordered hover>
        <thead>
            <tr>
                {tableHeaders.map(header => 
                    <th key={tableHeaders.id}>{header}</th>
                    )}           
            </tr>
        </thead>
        <tbody>
            {allQuestions.map( question => 
                <QuestionTr mekHarc ={question} key={question.id}/>
                )}
        </tbody>
    </Table>
    );
};

export default QuestionTable;