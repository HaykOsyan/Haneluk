import React, { useContext, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { Context } from '../..';
import { updateQuestion } from '../../http/questionAPI';

const EditQuestion = ({show,onHide,oneQuestion}) => {
  
  const {question} = useContext(Context)
  
      // const [title, setTitle] = useState('')
      // const [answere, setAnswere] = useState('')
      // const [wrongAnswere1, setWrongAnswere1] = useState('')
      // const [wrongAnswere2, setWrongAnswere2] = useState('')
      // const [wrongAnswere3, setWrongAnswere3] = useState('')
      // const [categoryId,setCategoryId] = useState('')
      // const [difficultyId,setDifficultyId] = useState('')

      const [title, setTitle] = useState(oneQuestion.title)
      const [answere, setAnswere] = useState(oneQuestion.answere)
      const [wrongAnswere1, setWrongAnswere1] = useState(oneQuestion.wrongAnswere1)
      const [wrongAnswere2, setWrongAnswere2] = useState(oneQuestion.wrongAnswere2)
      const [wrongAnswere3, setWrongAnswere3] = useState(oneQuestion.wrongAnswere3)
      const [categoryId,setCategoryId] = useState(oneQuestion.categoryId)
      const [difficultyId,setDifficultyId] = useState(oneQuestion.difficultyId)
      

      const updatedQuestion={
        id:oneQuestion.id,
        title:title,
        answere:answere,
        wrongAnswere1:wrongAnswere1,
        wrongAnswere2:wrongAnswere2,
        wrongAnswere3:wrongAnswere3,
        categoryId:categoryId,
        difficultyId:difficultyId
      }
      
      return (
        <Modal 
          show={show}
          onHide={onHide}
          size='xl'
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className='d-flex'>
              <Form.Control
                  className='m-3'
                  placeholder={oneQuestion.id}
                  value = {oneQuestion.id}
                  disabled
              />
              <Form.Control
                  className='m-3'
                  placeholder={oneQuestion.title}
                  value = {title}
                  onChange = {e => setTitle(e.target.value)}
              />
              <Form.Control
                  className='m-3'
                  placeholder={oneQuestion.answere}
                  value = {answere}
                  onChange = {e => setAnswere(e.target.value)}
              />
              <Form.Control
                  className='m-3'
                  placeholder={oneQuestion.wrongAnswere1}
                  value = {wrongAnswere1}
                  onChange = {e => setWrongAnswere1(e.target.value)}
              />
              <Form.Control
                  className='m-3'
                  placeholder={oneQuestion.wrongAnswere2}
                  value = {wrongAnswere2}
                  onChange = {e => setWrongAnswere2(e.target.value)}
              />
              <Form.Control
                  className='m-3'
                  placeholder={oneQuestion.wrongAnswere3}
                  value = {wrongAnswere3}
                  onChange = {e => setWrongAnswere3(e.target.value)}
              />
               <Form.Select value={categoryId} className='my-form-select' onChange = {e => setCategoryId(e.target.value)}>
                        {question.categories.map(category =>
                            <option value={category.id} key={category.id} >{category.name}</option>
                            )}
                </Form.Select>
                <Form.Select value={difficultyId} className='my-form-select' onChange = {e => setDifficultyId(e.target.value)}>
                        {question.difficulties.map(difficulty =>
                            <option value={difficulty.id} key={difficulty.id}>{difficulty.name}</option>
                            )}
                </Form.Select>
            </Form.Group>
                
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={onHide}>
              Close
            </Button>
            <Button variant="primary" onClick={e => updateQuestion(updatedQuestion)}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
    );


};

export default EditQuestion;