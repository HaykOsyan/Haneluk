import React, { useState } from 'react';
import { Form, FormControl, Modal, Button } from 'react-bootstrap'; 
import { createCategory } from '../../http/questionAPI';

const CreateCategory = ({show,onHide}) => {

  const [name, setName] = useState('')
  
  const saveCategory = async () => {
    try {
        let data = await createCategory(name)
        setName('')
        onHide()
        
    } catch (error) {
        alert(error.response.data.message)
    }
  
  }

  return (
    <Modal
    show={show}
    onHide={onHide}
    >
      <Modal.Header>
        <Modal.Title>Add new Category</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <FormControl
           type="text"
           className='my-3'
           value = {name}
           onChange = {e => setName(e.target.value)}
           placeholder='type category name'
          />
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="outline-secondary" onClick={onHide}>Close</Button>
        <Button variant="outline-primary" onClick={saveCategory}>Save</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateCategory;