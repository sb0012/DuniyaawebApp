import React, { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import './ModelDemo.css'

function AddPeopleWhoNeedHelp() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
               
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title >Add people who need help</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>

                        <Form >
                            {/* Category */}
                            <Form.Group>
                                <div className="center-align">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <label htmlFor="">Category</label>
                                        </div>
                                    </div>
                                    <div className="row">

                                        <div className="col-md-12">
                                            <input type="radio" name="category" id="category1" />
                                            <label htmlFor="category1" className='d1 ms-2 '>Food</label>

                                            <input type="radio" name="category" id="category2" />
                                            <label htmlFor="category2" className='d1 ms-3'>Medical Help</label>


                                            <input type="radio" name="category" id="category3" />
                                            <label htmlFor="category3" className='d1 ms-3'>Wearing Cloths</label>

                                        </div>
                                    </div>


                                </div>
                            </Form.Group>

                            {/* Number of people */}
                            <Form.Group>
                                <div className="center-align">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <label htmlFor="">Number of people</label>
                                        </div>
                                    </div>
                                    <div className="row">

                                        <div className="col-md-12">
                                            <input type="radio" name="size" id="people1" />
                                            <label htmlFor="people1" className='d1 ms-2 '>1</label>

                                            <input type="radio" name="size" id="people2" />
                                            <label htmlFor="people2" className='d1 ms-3'>2-5</label>


                                            <input type="radio" name="size" id="people3" />
                                            <label htmlFor="people3" className='d1 ms-3'>6-10</label>

                                        </div>
                                    </div>


                                </div>
                            </Form.Group>

                            {/* Priority */}
                            <Form.Group>
                                <div className="center-align">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <label htmlFor="">Priority</label>
                                        </div>
                                    </div>
                                    <div className="row">

                                        <div className="col-md-12">
                                            <input type="radio" name="size" id="priority1" />
                                            <label htmlFor="priority1" className='d1 ms-2 '>Immediate</label>

                                            <input type="radio" name="size" id="priority2" />
                                            <label htmlFor="priority2" className='d1 ms-3'>Urgent</label>

                                            <input type="radio" name="size" id="priority3" />
                                            <label htmlFor="priority3" className='d1 ms-3'>Normal</label>

                                        </div>
                                    </div>


                                </div>
                            </Form.Group>

                            {/* Post expiry */}
                            <Form.Group>
                                <div className="center-align">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <label htmlFor="">Post expiry</label>
                                        </div>
                                    </div>
                                    <div className="row">

                                        <div className="col-md-12">
                                            <input type="radio" name="size" id="expiry1" />
                                            <label htmlFor="expiry1" className='d1 ms-2 '>1d</label>

                                            <input type="radio" name="size" id="expiry2" />
                                            <label htmlFor="expiry2" className='d1 ms-3'>6hrs</label>


                                            <input type="radio" name="size" id="expiry3" />
                                            <label htmlFor="expiry3" className='d1 ms-3'>1w</label>

                                            <input type="radio" name="size" id="expiry4" />
                                            <label htmlFor="expiry4" className='d1 ms-3'>3hrs</label>

                                        </div>
                                    </div>

                                </div>
                            </Form.Group>

                            <Form.Group className="mt-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="email" placeholder="Address" />
                            </Form.Group>

                            <Form.Text id="passwordHelpBlock" muted>
                               Make sure entered address is complete,correct and it is your Shop/Office
                            </Form.Text>

                            <Form.Group className="mt-2" controlId="exampleForm.ControlInput1">
                                <Form.Label>Landmark</Form.Label>
                                <Form.Control type="email" placeholder="Landmark" />
                            </Form.Group>



                        </Form>


                    </Container>
                </Modal.Body>
               
            </Modal>
        </>
    );
}

export default AddPeopleWhoNeedHelp;