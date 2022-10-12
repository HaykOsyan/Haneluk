import React from 'react';
import { Form, FormControl } from 'react-bootstrap';

const MyForm = (title,setTitle,placeHolderTitle,
     answere,setAnswere,placeHolderAnswere,
     wrongAnswere1, setWrongAnswere1,placeHolderWrongAnswere1,
     wrongAnswere2, setWrongAnswere2,placeHolderWrongAnswere2,
     wrongAnswere3, setWrongAnswere3,placeHolderWrongAnswere3) => {

    // const [title, setTitle] = useState('')
    // const [answere, setAnswere] = useState('')
    // const [wrongAnswere1, setWrongAnswere1] = useState('')
    // const [wrongAnswere2, setWrongAnswere2] = useState('')
    // const [wrongAnswere3, setWrongAnswere3] = useState('')

    return (
        <Form.Group>
            <FormControl
            className='m-3 w-75'
            // placeholder='type the question'
            placeholder={placeHolderTitle}
            value = {title}
            onChange = {e => setTitle(e.target.value)}
            />
            <FormControl
                className='m-3 w-75'
                placeholder={placeHolderAnswere}
                // placeholder='type the correct answere'
                value = {answere}
                onChange = {e => setAnswere(e.target.value)}
            />
            <FormControl
                className='m-3 w-75'
                placeholder={placeHolderWrongAnswere1}
                // placeholder='type the w1 answere'
                value = {wrongAnswere1}
                onChange = {e => setWrongAnswere1(e.target.value)}
            />
            <FormControl
                className='m-3 w-75'
                placeholder={placeHolderWrongAnswere2}
                // placeholder='type the w2 answere'
                value = {wrongAnswere2}
                onChange = {e => setWrongAnswere2(e.target.value)}
            />
            <FormControl
                className='m-3 w-75'
                placeholder={placeHolderWrongAnswere3}
                // placeholder='type the w3 answere'
                value = {wrongAnswere3}
                onChange = {e => setWrongAnswere3(e.target.value)}
            />
        </Form.Group>
    );
};

export default MyForm;