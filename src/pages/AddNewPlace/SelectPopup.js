import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Form} from 'react-bootstrap'

function SelectPopup() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
     

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
    
        </Modal.Header>
        <Modal.Body>
        <Form.Select aria-label="Default select example">
      <option>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
      <option value="4">One</option>
      <option value="5">Two</option>
      <option value="6">Three</option>
      <option value="7">One</option>
      <option value="8">Two</option>
      <option value="9">Three</option>
      <option value="10">One</option>
      <option value="11">Two</option>
      <option value="12">Three</option>
      
    </Form.Select>
        </Modal.Body>
       
      </Modal>
    </>
  );
}

export default SelectPopup;