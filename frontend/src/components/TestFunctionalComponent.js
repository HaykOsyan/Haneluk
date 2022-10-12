import React from 'react';
import { Container } from 'react-bootstrap';

const TestFunctionalComponent = ({props, title}) => {
    console.log('mtav')
    return (
            <Container>
                <h1 className='question-title'>{title}</h1>
                {props}
            </Container>
    );
};

export default TestFunctionalComponent;