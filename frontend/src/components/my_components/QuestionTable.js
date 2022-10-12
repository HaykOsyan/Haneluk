import React, { useContext } from 'react';
import QuestionTr from './QuestionTr';
import { Table } from 'react-bootstrap';
import { Context } from '../..';
import { toJS } from 'mobx';

const QuestionTable = ({tableHeaders}) => {
    const { question } = useContext(Context)

    const allQuestions = [...toJS(question.questions)]

    return (
        <Table striped bordered hover>
        <thead>
            <tr>
                {tableHeaders.map(header => 
                    <th key={header}>{header}</th>
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