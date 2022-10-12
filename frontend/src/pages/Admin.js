import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import React, { useState, useContext, useEffect } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Context } from '..';
import CreateCategory from '../components/modals/CreateCategory';
import CreateDifficulty from '../components/modals/CreateDifficulty';
import CreateQuestion from '../components/modals/CreateQuestion';
import QuestionTable from '../components/my_components/QuestionTable';
import { fetchQuestions, fetchCategories, fetchDifficulties } from '../http/questionAPI';


const Admin = observer ( () => {


    const {question} = useContext(Context)
    
    const [tableHeaders, setTableHeaders] = useState([
        'ID',
        'Question',
        'Answere',
        'Wrong Answere 1',
        'Wrong Answere 2',
        'Wrong Answere 3',
        'Difficulty',
        'Category'
        
 ])

        const [categoryVisible, setCategoryVisible] = useState(false)
        const [difficultyVisible, setDifficultyVisible] = useState(false)
        const [questionVisible, setQuestionVisible] = useState(false)

    useEffect(() => {
        fetchQuestions().then(data => question.setQuestions(data.rows))
        fetchCategories().then(data => question.setCategories(data))
        fetchDifficulties().then(data => question.setDifficulties(data.difficulties))
    },[question])


    if(toJS(question.questions).length > 0){
        // setQuestions([toJS(question.questions)[0]])
    
             return (
                 <Container>
                     <Button 
                         variant={'outline-dark'}
                         className={'m-3 '}
                         onClick={() => setCategoryVisible(true)}
                     >
                         Add Category
                     </Button>
                     <Button 
                         variant={'outline-dark'}
                         className={'m-3 '}
                         onClick={() => setDifficultyVisible(true)}
                     >
                         Add Difficulty
                     </Button>
                     <Button 
                         variant={'outline-dark'}
                         className={'m-3 '}
                         onClick={() => setQuestionVisible(true)}
                     >
                         Add Question
                     </Button>
                     <QuestionTable tableHeaders={tableHeaders}/>
                     <CreateCategory show={categoryVisible} onHide={() => setCategoryVisible(false)}/>
                     <CreateDifficulty show={difficultyVisible} onHide={() => setDifficultyVisible(false)}/>
                     <CreateQuestion show={questionVisible} onHide={() => setQuestionVisible(false)}/>
                     {/* <EditQuestion show={editQuestionVisible} onHide={() => setEditQuestionVisible(false)}/> */}
                 </Container>
             );
       
    }



});

export default Admin;