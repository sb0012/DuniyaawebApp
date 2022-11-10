// import React, { Component } from 'react';
import React, { useState } from 'react'
//import Carousel from 'react-elastic-carousel';
import img1 from "../../assets/images/img1.png";
import map from "../../assets/images/map.png";
import hands1 from "../../assets/images/hands1.png";
import posts from "../../assets/images/posts.png";
import {MdLocationPin} from 'react-icons/md'
import "./allplaces.css";
import { Container, Row, Col, Button, Form, InputGroup, FormControl, Tab, Nav, Tabs } from "react-bootstrap";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import HelpingHandPost from "../../components/HelpingHandPost.jsx";
import Post from "../../components/Post.jsx";
import Location from '../../components/Location';

import Newplaces from "../../components/Newplaces";
// import AddPeopleWhoNeedHelp from '../HelpingHands/AddPeopleWhoNewwdHelp';
import Modal from 'react-bootstrap/Modal';


export default function AllPlaces() {

    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [location, setLocation] = useState(false)

    const locationShow = () => {
        setLocation(true)
    }

    return (
        <div>

            <div>
                <Header />
                <section>
                    <Container>
                        <div className='cetegory_top'>
                            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                <Row>
                                    <Col md="3 mt-3 ">
                                        <div className='cetegory_left'>
                                            {/*sidemenu place*/}
                                            <Nav variant="pills" className="flex-column">
                                                <Nav.Item>
                                                    <Nav.Link eventKey="first"><i className='fa fa-map-marker'></i> Places For You</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="second"><i className='fa fa-tags'></i> Posts</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Link eventKey="third"><i className='fa fa-map-marker'></i> Helping Hands</Nav.Link>

                                            </Nav>

                                        </div>

                                    </Col>
                                    <Col md="9">

                                        <Tab.Content>
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    <div className='search_place mt-0'>
                                                        <Row>
                                                            <Col md="8">

                                                                <Row>
                                                                    <Form>
                                                                        {/*Search bar*/}
                                                                        <InputGroup className="mb-3 mt-3">
                                                                            <InputGroup.Text id="basic-addon1"><i className='fa fa-search'></i></InputGroup.Text>
                                                                            <FormControl
                                                                                className='searchbar'
                                                                                placeholder="Serach"
                                                                                aria-label="Username"
                                                                                aria-describedby="basic-addon1"
                                                                            />
                                                                        </InputGroup>
                                                                    </Form>
                                                                </Row>
                                                            </Col>
                                                            <Col md="4 mt-3">
                                                                {/*Add places*/}
                                                                <a href="/AddNewPlace" className="add_place_div1"><i className="fa fa-plus"></i> Add Place</a>
                                                            </Col>
                                                        </Row>

                                                    </div>

                                                </Row>
                                                <Tabs
                                                    defaultActiveKey="home"
                                                    transition={false}
                                                    id="noanim-tab-example"
                                                    className="mb-3 category_title">

                                                    {/*first show places*/}

                                                    <Tab eventKey="home" title="Places">

                                                        <div className='all_place'>
                                                            {/*link newplaces*/}
                                                            <h6>NEWLY ADDED PLACES</h6>
                                                            <Newplaces />
                                                        </div>
                                                        {/*link newplaces*/}
                                                        <div className='all_place'>
                                                            <h6>MOST POPULAR IN CITY</h6>
                                                            <Newplaces />
                                                        </div>
                                                        {/*link newplaces*/}
                                                        <div className='all_place'>
                                                            <h6>RECOMMANDED PLACES</h6>
                                                            <Newplaces />
                                                        </div>

                                                    </Tab>
                                                    {/*offers*/}
                                                    <Tab eventKey="profile" title="Offers">
                                                        a
                                                    </Tab>
                                                    {/*categories*/}
                                                    <Tab eventKey="contact" title="Categories">
                                                        b
                                                    </Tab>
                                                </Tabs>

                                            </Tab.Pane>


                                            <Tab.Pane eventKey="second">
                                                <Row>
                                                    <div className='search_place mt-0'>
                                                        <Row>
                                                            <Col md="8">

                                                                <Row>
                                                                    <Form>
                                                                        {/*post search bar*/}

                                                                        <InputGroup className="mb-3 mt-3 ">
                                                                            <InputGroup.Text id="basic-addon1"><i className='fa fa-search'></i></InputGroup.Text>
                                                                            <FormControl
                                                                                className='searchbar'
                                                                                placeholder="Serach"
                                                                                aria-label="Username"
                                                                                aria-describedby="basic-addon1"
                                                                            />
                                                                        </InputGroup>
                                                                    </Form>
                                                                </Row>
                                                            </Col>
                                                            <Col md="4 mt-3">
                                                                {/*Add post*/}
                                                                <Button className="add_place_div1"><i className="fa fa-plus"></i> Add Post</Button>
                                                            </Col>
                                                        </Row>

                                                    </div>

                                                </Row>
                                                <Post />

                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                <Row>
                                                    <div className='search_place mt-0'>
                                                        <Row>
                                                            <Col md="8">

                                                                <Row>
                                                                    <Form>
                                                                        {/*Helping Hand post search bar*/}
                                                                        <InputGroup className="mb-3 mt-3">
                                                                            <InputGroup.Text id="basic-addon1"><i className='fa fa-search'></i></InputGroup.Text>
                                                                            <FormControl
                                                                                className='searchbar'
                                                                                placeholder="Serach"
                                                                                aria-label="Username"
                                                                                aria-describedby="basic-addon1"
                                                                            />
                                                                        </InputGroup>
                                                                    </Form>
                                                                </Row>
                                                            </Col>
                                                            <Col md="4 mt-3">
                                                                {/*Add post*/}
                                                                <Button className="add_place_div3" onClick={handleShow}><i className="fa fa-plus"></i> Add Post</Button>

                                                            </Col>
                                                        </Row>

                                                        {/*Add People Who Need Help */}
                                                        <Row>
                                                            <Col sm={3}></Col>
                                                            <Col sm={6} className="modal">
                                                                {show ? (
                                                                    <Modal show={show} onHide={handleClose}>
                                                                        <Container className="HelpingHandDivid">
                                                                            <Modal.Header closeButton>

                                                                                <Modal.Title className="textCenter">Add people who need help</Modal.Title>
                                                                            </Modal.Header>
                                                                            <Modal.Body>
                                                                                <Container>

                                                                                    <Form >
                                                                                        <Row>
                                                                                            <Col sm={6} className="radiobuttonborder">

                                                                                                {/* Category */}
                                                                                                <Form.Group>
                                                                                                    <div className="center-align">
                                                                                                        <div className="row mb-4">
                                                                                                            <div className="col-md-12 ">
                                                                                                                <label htmlFor="" >Category</label>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        <div className="row">

                                                                                                            <div className="col-md-12 mb-4">
                                                                                                                <input type="radio" name="category" id="category1" />
                                                                                                                <label htmlFor="category1" className='helpinghands  '>Food</label>

                                                                                                                <input type="radio" name="category" id="category2" />
                                                                                                                <label htmlFor="category2" className='helpinghands ms-3'>Medical Help</label>


                                                                                                                <input type="radio" name="category" id="category3" />
                                                                                                                <label htmlFor="category3" className='helpinghands mt-3'>Wearing Cloths</label>

                                                                                                            </div>
                                                                                                        </div>


                                                                                                    </div>
                                                                                                </Form.Group>

                                                                                                {/* Number of people */}
                                                                                                <Form.Group>
                                                                                                    <div className="center-align">
                                                                                                        <div className="row">
                                                                                                            <div className="col-md-12 my-2">
                                                                                                                <label htmlFor="">Number of people</label>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        <div className="row">

                                                                                                            <div className="col-md-12 mb-4">
                                                                                                                <input type="radio" name="people1" id="people1" />
                                                                                                                <label htmlFor="people1" className='helpinghands '>1</label>

                                                                                                                <input type="radio" name="people1" id="people2" />
                                                                                                                <label htmlFor="people2" className='helpinghands ms-3'>2-5</label>


                                                                                                                <input type="radio" name="people1" id="people3" />
                                                                                                                <label htmlFor="people3" className='helpinghands ms-3'>6-10</label>

                                                                                                            </div>
                                                                                                        </div>


                                                                                                    </div>
                                                                                                </Form.Group>

                                                                                                {/* Priority */}
                                                                                                <Form.Group>
                                                                                                    <div className="center-align">
                                                                                                        <div className="row">
                                                                                                            <div className="col-md-12 my-2">
                                                                                                                <label htmlFor="">Priority</label>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        <div className="row">

                                                                                                            <div className="col-md-12 mb-4">
                                                                                                                <input type="radio" name="priority1" id="priority1" />
                                                                                                                <label htmlFor="priority1" className='helpinghands  '>Immediate</label>

                                                                                                                <input type="radio" name="priority1" id="priority2" />
                                                                                                                <label htmlFor="priority2" className='helpinghands ms-3'>Urgent</label>

                                                                                                                <input type="radio" name="priority1" id="priority3" />
                                                                                                                <label htmlFor="priority3" className='helpinghands ms-3'>Normal</label>

                                                                                                            </div>
                                                                                                        </div>


                                                                                                    </div>
                                                                                                </Form.Group>

                                                                                                {/* Post expiry */}
                                                                                                <Form.Group>
                                                                                                    <div className="center-align">
                                                                                                        <div className="row">
                                                                                                            <div className="col-md-12 my-2">
                                                                                                                <label htmlFor="">Post expiry</label>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        <div className="row">

                                                                                                            <div className="col-md-12">
                                                                                                                <input type="radio" name="expiry1" id="expiry1" />
                                                                                                                <label htmlFor="expiry1" className='helpinghands  '>1d</label>

                                                                                                                <input type="radio" name="expiry1" id="expiry2" />
                                                                                                                <label htmlFor="expiry2" className='helpinghands ms-3'>6hrs</label>


                                                                                                                <input type="radio" name="expiry1" id="expiry3" />
                                                                                                                <label htmlFor="expiry3" className='helpinghands ms-3'>1w</label>

                                                                                                                <input type="radio" name="expiry1" id="expiry4" />
                                                                                                                <label htmlFor="expiry4" className='helpinghands ms-3'>3hrs</label>

                                                                                                            </div>
                                                                                                        </div>

                                                                                                    </div>
                                                                                                </Form.Group>
                                                                                            </Col>

                                                                                            <Col sm={6}>

                                                                                                <Form.Group className="mt-3" controlId="exampleForm.ControlInput1">

                                                                                                    <Form.Label onClick={locationShow} style={{ cursor: "pointer", color: "#7f0c86" }} className="fontWeight" ><MdLocationPin style={{fontSize:"35px"}}/> Fetch Location </Form.Label>

                                                                                                    {location ? (<div className="card ">
                                                                                                        <Location />
                                                                                                    </div>) : (<div className="card " style={{ padding: "40px" }}>

                                                                                                    </div>)}
                                                                                                </Form.Group>

                                                                                                <Form.Text id="passwordHelpBlock" muted>
                                                                                                    Make sure entered address is complete,correct and it is your Shop/Office
                                                                                                </Form.Text>

                                                                                                <Form.Group className="mt-2" controlId="exampleForm.ControlInput1">
                                                                                                    <Form.Label>Landmark</Form.Label>
                                                                                                    <Form.Control type="text" placeholder="Landmark" />
                                                                                                </Form.Group>

                                                                                                <Form.Group className="mt-2" controlId="exampleForm.ControlInput1">
                                                                                                    <Form.Label>Add Image</Form.Label>
                                                                                                    <Form.Control type="file" placeholder="Landmark" />
                                                                                                </Form.Group>

                                                                                                <Form.Group className="mt-2" controlId="exampleForm.ControlInput1">
                                                                                                    <Form.Label>Add Message</Form.Label>
                                                                                                    <Form.Control as="textarea" placeholder="Leave a comment here" style={{ height: '80px' }}
                                                                                                    />
                                                                                                </Form.Group>
                                                                                            </Col>
                                                                                        </Row>
                                                                                        <Row className="mt-2 text-center">
                                                                                            <Col sm={3}></Col>
                                                                                            <Col sm={2}>
                                                                                                <button type="submit" class="addbtn">ADD</button>
                                                                                            </Col>

                                                                                            <Col sm={2}>
                                                                                                <button type="reset" class="addbtn">Reset</button>
                                                                                            </Col>

                                                                                            <Col sm={2}>
                                                                                                <button type="button" class="addbtn">Cancel</button>
                                                                                            </Col>
                                                                                            <Col sm={3}></Col>
                                                                                        </Row>



                                                                                    </Form>


                                                                                </Container>
                                                                            </Modal.Body>
                                                                        </Container>

                                                                    </Modal>
                                                                ) : ""}
                                                            </Col>
                                                        </Row>


                                                    </div>
                                                </Row>
                                                <HelpingHandPost />
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Col>
                                </Row>
                            </Tab.Container>
                        </div>
                    </Container>
                </section>

            </div>
        </div>
    )
}

