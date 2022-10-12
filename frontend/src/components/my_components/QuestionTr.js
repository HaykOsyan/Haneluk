import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { deleteQuestion, fetchOneQuestion } from '../../http/questionAPI';
import EditQuestion from '../modals/EditQuestion';

const QuestionTr = (props) => {

    const [editQuestionVisible, setEditQuestionVisible] = useState(false)
    const [question, setQuestion] = useState('')
    
    const editQuestion = async (id) => {
        fetchOneQuestion(id).then(data => setQuestion(data))
        setEditQuestionVisible(true)
    }
    return (
        <tr id={props.mekHarc.id}>
            <td>{props.mekHarc.id}</td>
            <td>{props.mekHarc.title}</td>
            <td>{props.mekHarc.answere}</td>
            <td>{props.mekHarc.wrongAnswere1}</td>
            <td>{props.mekHarc.wrongAnswere2}</td>
            <td>{props.mekHarc.wrongAnswere3}</td>
            <td>{props.mekHarc.difficulty.name}</td>
            <td>{props.mekHarc.category.name}</td>
            <td>
                <Button variant="warning" className='ml-2' onClick={e=> editQuestion(e.target.parentElement.parentElement.id)}>Edit</Button>
                <Button variant="danger" className='ml-2' onClick={e => deleteQuestion(e.target.parentElement.parentElement.id)}>Delete</Button>
            </td>
            <EditQuestion oneQuestion={question} show={editQuestionVisible} onHide={() => setEditQuestionVisible(false)}/>
        </tr>      

);
};

export default QuestionTr;