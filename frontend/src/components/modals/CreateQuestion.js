import React, { useContext, useState } from 'react';
import { Form, FormControl, Modal, Button } from 'react-bootstrap';
import { Context } from '../..';
import { createQuestion } from '../../http/questionAPI';

const CreateQuestion = ({show,onHide}) => {

    const {question} = useContext(Context)

    const [title, setTitle] = useState('')
    const [answere, setAnswere] = useState('')
    const [wrongAnswere1, setWrongAnswere1] = useState('')
    const [wrongAnswere2, setWrongAnswere2] = useState('')
    const [wrongAnswere3, setWrongAnswere3] = useState('')
    const [categoryId,setCategoryId] = useState('')
    const [difficultyId,setDifficultyId] = useState('')

    const saveQuestion = async () => {
        try {
            await createQuestion(title, answere, wrongAnswere1, wrongAnswere2, wrongAnswere3,categoryId,difficultyId)
            onHide()
        } catch (error) {
            alert(error)
        }
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
        >
            <Modal.Header>
                <Modal.Title>Add new Question</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <Form.Select className='my-form-select' onChange = {e => setCategoryId(e.target.value)}>
                            {question.categories.map(category =>
                                <option value={category.id} key={category.id} >{category.name}</option>
                                )}
                    </Form.Select>
                    <Form.Select className='my-form-select' onChange = {e => setDifficultyId(e.target.value)}>
                            {question.difficulties.map(difficulty =>
                                <option value={difficulty.id} key={difficulty.id}>{difficulty.name}</option>
                                )}
                    </Form.Select>
                    <FormControl
                        className='m-3 w-75'
                        placeholder='type the question'
                        value = {title}
                        onChange = {e => setTitle(e.target.value)}
                    />
                    <FormControl
                        className='m-3 w-75'
                        placeholder='type the correct answere'
                        value = {answere}
                        onChange = {e => setAnswere(e.target.value)}
                    />
                    <FormControl
                        className='m-3 w-75'
                        placeholder='type the w1 answere'
                        value = {wrongAnswere1}
                        onChange = {e => setWrongAnswere1(e.target.value)}
                    />
                    <FormControl
                        className='m-3 w-75'
                        placeholder='type the w2 answere'
                        value = {wrongAnswere2}
                        onChange = {e => setWrongAnswere2(e.target.value)}
                    />
                    <FormControl
                        className='m-3 w-75'
                        placeholder='type the w3 answere'
                        value = {wrongAnswere3}
                        onChange = {e => setWrongAnswere3(e.target.value)}
                    />
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="outline-secondary" onClick={onHide}>Close</Button>
                <Button variant="outline-primary" onClick={saveQuestion}>Save</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateQuestion;