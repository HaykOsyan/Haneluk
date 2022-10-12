import React, { useState } from 'react';
import { Form, FormControl, Modal, Button } from 'react-bootstrap';
import { createDifficulty } from '../../http/questionAPI';



const CreateDifficulty = ({show,onHide}) => {

  const [name, setName] = useState('')
  
  const saveDifficulty = async () => {
    try {
        let data = await createDifficulty(name)
        setName('')
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
        <Modal.Title>Add new Difficulty</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <FormControl
            type="text"
            className='my-3'
            value = {name}
            onChange = {e => setName(e.target.value)}
            placeholder='type diff name'
          />
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="outline-secondary" onClick={onHide}>Close</Button>
        <Button variant="outline-primary" onClick={saveDifficulty}>Save</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateDifficulty;