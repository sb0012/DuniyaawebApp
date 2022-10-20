import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import AddNewPlace from './AddNewPlace';
import "./addnewplace.css";
// import Header from '../../components/Header';

function Popup2() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);


  const navigate=useNavigate();
  const handleChange=()=>{
    navigate("/AddNewPlace")
  }
  const handleHome=()=>{
    navigate("/")
  }

  return (
    <>
  {/* <Header/> */}
  <AddNewPlace/>

      <Modal show={show} onHide={handleClose} style={{marginTop:"150px"}}>
        <Modal.Header onClick={handleHome} closeButton>
        </Modal.Header>
          <Modal.Title className="ms-3">Are you at your Shop/Office/Business Location,right now?</Modal.Title>
             <Modal.Footer className="justify-content-between">
          <Button variant="secondary" onClick={handleChange} className="btncolorchange">
            Yes,I am here
          </Button>
          <Button variant="primary" onClick={handleHome} className="btncolor">
           No,I'm not
          </Button>
        </Modal.Footer>
        <Modal.Body>
        <p>Why we are asking this question ?</p>
        <p className='mt-2 text'>well,it will be more easy to detect your accurate Shop/Office/Business address, if you add a place by staying at your Business Location.So that the users who want to visit your place can be easily find your address.</p>
      

      
        </Modal.Body>
   
      </Modal>
    </>
  );
}

export default Popup2;