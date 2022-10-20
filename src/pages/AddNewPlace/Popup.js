import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import AddNewPlace from './AddNewPlace';
// import Header from '../../components/Header';

function Popup() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);


  const navigate=useNavigate();
  const handleChange=()=>{
    navigate("/AddNewPlace")
  }
  const handleNext=()=>{
    navigate("/popups")
  }
  const handleHome=()=>{
    navigate("/")
  }

  return (
    <>
    {/* <Header/> */}
    <AddNewPlace/>
   

      <Modal show={show} onHide={handleClose} style={{marginTop:"150px"}}>
        <Modal.Header  onClick={handleHome} closeButton>
          <Modal.Title>Which place you are wiling to add?</Modal.Title>
        </Modal.Header>
        <Modal.Footer className="justify-content-between">
          <Button variant="secondary" onClick={handleNext}>
            My Place
          </Button>
          <Button variant="primary" onClick={handleChange}>
            Public Place
          </Button>
        </Modal.Footer>
        <Modal.Body>
        <p>What to choose?</p>
        <p className='mt-2'>If you want to add a place which you do not own and it is public,then choose Public Place</p>
      
        <p className='mt-3'>If you want add your own place then choose My Place</p>
      
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Popup;