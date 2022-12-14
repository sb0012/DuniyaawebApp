import React, { Component, useState, useEffect } from 'react';
//import Carousel from 'react-elastic-carousel';
// import img1 from "../../assets/images/img1.png";
import "./addnewplace.css";
import { Tabs, Tab, Container, Row, Col, Button, Form, Modal, Badge } from "react-bootstrap";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Location from '../../components/Location';
import ReverseGeoLocation from '../../components/ReverseGeoLocation';
// import Popup from './Popup';
import { useNavigate } from 'react-router-dom';
import { FormGroup, Input, Label } from 'reactstrap';
import Time from './Time';

import Date from './Date';
import ClosingTime from './ClosingTime';
import StartTime from './StartTime';
import EndTime from './EndTime';

// import Modal from 'react-bootstrap/Modal';

function AddNewPlace() {

  const initialValues = { email: "", name: "", date: "", address: "", landmark: "", about: "", mobile: "", email: "", business: "", formHorizontalRadios: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const businessValue = { about: "", mobile: "", email: "", business: "", formHorizontalRadios: "" };
  const [formValue, setFormValue] = useState(businessValue);
  const [formError, setFormError] = useState({});
  const [isSubmited, setIsSubmited] = useState(false);
  const [inputText, setInputText] = useState("")
  const [characterLimit] = useState(500)

  const Value = { formHorizontalRadios: "", select: "", working: "", check: "", image: "" };
  const [formV, setFormV] = useState(Value);
  const [error, setError] = useState({});
  const [submit, setSubmit] = useState(false);

  const changeTextarea = event => {
    setInputText(event.target.value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleChanged = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const hanChange = (e) => {
    const { name, value } = e.target;
    setFormV({ ...formV, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const handleSubmited = (e) => {
    e.preventDefault();
    setFormError(validate(formValue));
    setIsSubmited(true);
  };

  const hanSubmit = (e) => {
    e.preventDefault();
    setError(validate(formV));
    setSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  useEffect(() => {
    console.log(formError);
    if (Object.keys(formError).length === 0 && isSubmited) {
      console.log(formValue);
    }
  }, [formError]);

  useEffect(() => {
    console.log(error);
    if (Object.keys(error).length === 0 && submit) {
      console.log(formV);
    }
  }, [error]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "Name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.date) {
      errors.date = "Date is required!";
    }
    if (!values.address) {
      errors.address = "Address is required!";
    }
    if (!values.landmark) {
      errors.landmark = "Landmark is required";
    }
    if (!values.about) {
      errors.about = "About is required";
    }
    if (!values.mobile) {
      errors.mobile = "Landmark is required";
    } else if (values.mobile.length > 10) {
      errors.mobile = "Mobile exceed more than 10 characters";
    }
    if (!values.business) {
      errors.business = "Busineess web name plz required";
    }
    if (!values.formHorizontalRadios) {
      errors.formHorizontalRadios = "plz select any one";
    }
    if (!values.select) {
      errors.select = "plz select timing";
    }
    if (!values.check) {
      errors.check = "plz select checkbox";
    }
    if (!values.working) {
      errors.working = "plz select working time";
    }
    if (!values.image) {
      errors.image = "plz upload the image";
    }
    //  else if (values.password.length < 4) {
    //   errors.password = "Password must be more than 4 characters";
    // } else if (values.password.length > 10) {
    //   errors.password = "Password cannot exceed more than 10 characters";
    // }
    return errors;
  };

  const [key, setKey] = useState("placedetails")

  const navigate = useNavigate();
  const handleNext = () => {
    navigate("/selectpopup")
  }

  // const Next = () => {
  //   setKey('business')
  // }

  const Back = () => {
    setKey('placedetails')
  }

  // const Nexted = () => {
  //   setKey("placeavailaibility")
  // }

  const Backed = () => {
    setKey('business')
  }

  // const NextImageupload = () => {
  //   setKey("uploadimage")
  // }
  const BackAvailaibility = () => {
    setKey("placeavailaibility")
  }
  const [show, setShow] = useState(false)
  const [shows, setShows] = useState(true)
  const [lunchShow, setLunchShow] = useState(true)
  const [exchange, setExchange] = useState(true)
  const [exchangeAny, setExchangeAny] = useState(true)
  const [service, setServices] = useState(false)
  const [showLocation, setShowLocation] = useState(true)
  const [factory, setFactory] = useState(false)
  const [self, setSelf] = useState(false)


  const charactorChange = (event) => {
    setInputText(event.target.value);
  }

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleServiceShow = () => setServices(true);
  const handleServiceClose = () => setServices(false);

  const handleFactoryShow = () => setFactory(true);
  const handleFactoryClose = () => setFactory(false);

  const handleSelfShow = () => setSelf(true);
  const handleSelfClose = () => setSelf(false);
  return (
    <div>
      <Header />

      <section className=''>
        <div className='add_bg'>
          <Container>
            <div className='add_title'>
              <Row>
                <Col md="8">
                  <h1>Add Place</h1>
                </Col>
                <Col md="4">
                  <h6><span>Add Place</span> / Upload Place Images</h6>
                </Col>
              </Row>

            </div>
          </Container>
        </div>

        <Container>
          <div className='add_place_tab'>
            <Tabs activeKey={key} onSelect={(k) => setKey(k)}
              id="uncontrolled-tab-example" className="mb-3 tab_class">
              <Tab eventKey="placedetails" title={<span><i className='fa fa-map-marker'></i> <br /> Place Details  </span>}>
                <Row>
                  <Col md="3"></Col>
                  <Col md="6">
                    <Form className="placeinfo" onSubmit={handleSubmit}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Shop / Office / Business / Place Name</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email" value={formValues.email}
                          onChange={handleChange} />

                        <p className="text-danger mt-3">{formErrors.email}</p>
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Place Owner Name</Form.Label>
                        <Form.Control type="text" placeholder="Place Owner Name" name="name" value={formValues.name}
                          onChange={handleChange} />
                        <p className="text-danger mt-3">{formErrors.name}</p>

                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Place Reg Date</Form.Label>
                        {/* <Form.Control  type="date" placeholder="Place Reg Date" name="date" value={formValues.date}
              onChange={handleChange} />
              <p className="text-danger mt-3">{formErrors.date}</p> */}
                        <Date />

                      </Form.Group>

                      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Shop / Office / Business / Place Address</Form.Label>
                        <Form.Control as="textarea" rows={3} name="address" value={formValues.address}
                          onChange={handleChange} disabled />
                        <Form.Text className="text-muted">
                          Make sure entered address is complete, correct and it is yoyr Shop/ Office / business location address.
                        </Form.Text>
                        <p className="text-danger mt-3">{formErrors.address}</p>

                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Landmark</Form.Label>
                        <Form.Control type="text" placeholder="Place Reg Date" name="landmark" value={formValues.landmark}
                          onChange={handleChange} />
                        <p className="text-danger mt-3">{formErrors.landmark}</p>

                      </Form.Group>
                      {/* <div className=''><a href="#."><i className="fa fa-map-marker"></i> Fetch current location  </a></div> */}
                      <div className=''> <Form.Label className="location" onClick={() => setShowLocation(!showLocation)}><i className="fa fa-map-marker"></i> Fetch current location</Form.Label>
                        <div className="card">
                          {showLocation ? (<div className="card-header">
                            <ReverseGeoLocation />
                          </div>) : (<div className="card-header">
                            <ReverseGeoLocation />
                          </div>)}
                        </div>
                      </div>
                      <Row className="place_btn">
                        <Col md="6">
                          <Button variant="primary" className="opacity_class"  disabled >
                            <i className='fa fa-angle-left' /> Prevoius
                          </Button>
                        </Col>
                        <Col md="6">
                          <Button type="submit" variant="primary" className="pull-right"  >
                            Next <i className='fa fa-angle-right' />
                          </Button>

                        </Col>
                      </Row>


                    </Form>
                  </Col>
                  <Col md="3"></Col>
                </Row>

              </Tab>
              <Tab eventKey="business" title={<span><i className='fa fa-briefcase'></i> <br /> Nature of Business  </span>}>
                <Form className="placeinfo" onSubmit={handleSubmited} >
                  <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Row>
                      <Col md="3"></Col>
                      <Col md="8">
                        <Form.Label>Choose type of business / Place and Category</Form.Label>
                        <ul className='place_cat'>
                          {/* <li><Button onClick={() => this.setState({ shown: !this.state.shown })}>Shop</Button></li> */}
                          <li>  <Button  onClick={handleShow}> Shop</Button></li>
                          <li><Button onClick={handleServiceShow}>Services</Button></li>
                          <li><Button>Factory & Manufacturing</Button></li>
                          <li><Button>Self Employment</Button></li>
                        </ul>
                      </Col>
                      <Col md="2"></Col>
                    </Row>
                  </Form.Group>


                  <Row>
                    <Col md="3"></Col>
                    <Col md="6">
                      <Form.Group controlId="formBasicPassword">
                        <Form.Label>More Details about place :</Form.Label>
                      </Form.Group>
                      {/* Shop  */}
                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        {show ? (
                          <Modal show={show} onHide={handleClose} style={{ marginTop: "200px" }}>
                            <Modal.Header closeButton>
                            </Modal.Header>
                            <Modal.Body>
                              <Form.Select aria-label="Default select example">
                                <option>Open this select menu</option>
                                <option value="1">Accessories and Repairies Shop</option>
                                <option value="2">Aquarium Shop</option>
                                <option value="3">Automobile Spareparts Shop</option>
                                <option value="4">Bags Shop</option>
                                <option value="5">Bakery Shop</option>
                                <option value="6">Bangles and Novelty Shop</option>
                                <option value="7">Banner and Graphics Shop</option>
                                <option value="8">Beer Shop</option>
                                <option value="9">Belt Shop</option>
                                <option value="10">Bhaji Shop</option>
                                <option value="11">Book Depo</option>
                                <option value="12">Bicycle Shop</option>
                              </Form.Select>
                            </Modal.Body>
                          </Modal>
                        ) : ""}
                      </Form.Group>

                      {/* Service */}
                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        {service ? (
                          <Modal show={service} onHide={handleServiceClose} style={{ marginTop: "200px" }}>
                            <Modal.Header closeButton>
                            </Modal.Header>
                            <Modal.Body>
                              <Form.Select aria-label="Default select example">
                                <option>Open this select menu</option>
                                <option value="1">Accessories and Repairies Shop</option>
                                <option value="2">Aquarium Shop</option>
                                <option value="3">Automobile Spareparts Shop</option>
                                <option value="4">Bags Shop</option>
                                <option value="5">Bakery Shop</option>
                                <option value="6">Bangles and Novelty Shop</option>
                                <option value="7">Banner and Graphics Shop</option>
                                <option value="8">Beer Shop</option>
                                <option value="9">Belt Shop</option>
                                <option value="10">Bhaji Shop</option>
                                <option value="11">Book Depo</option>
                                <option value="12">Bicycle Shop</option>
                              </Form.Select>
                            </Modal.Body>
                          </Modal>
                        ) : ""}
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        {service ? (
                          <Modal show={service} onHide={handleServiceClose} style={{ marginTop: "200px" }}>
                            <Modal.Header closeButton>
                            </Modal.Header>
                            <Modal.Body>
                              <Form.Select aria-label="Default select example">
                                <option>Open this select menu</option>
                                <option value="1">Accessories and Repairies Shop</option>
                                <option value="2">Aquarium Shop</option>
                                <option value="3">Automobile Spareparts Shop</option>
                                <option value="4">Bags Shop</option>
                                <option value="5">Bakery Shop</option>
                                <option value="6">Bangles and Novelty Shop</option>
                                <option value="7">Banner and Graphics Shop</option>
                                <option value="8">Beer Shop</option>
                                <option value="9">Belt Shop</option>
                                <option value="10">Bhaji Shop</option>
                                <option value="11">Book Depo</option>
                                <option value="12">Bicycle Shop</option>
                              </Form.Select>
                            </Modal.Body>
                          </Modal>
                        ) : ""}
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        {service ? (
                          <Modal show={service} onHide={handleServiceClose} style={{ marginTop: "200px" }}>
                            <Modal.Header closeButton>
                            </Modal.Header>
                            <Modal.Body>
                              <Form.Select aria-label="Default select example">
                                <option>Open this select menu</option>
                                <option value="1">Accessories and Repairies Shop</option>
                                <option value="2">Aquarium Shop</option>
                                <option value="3">Automobile Spareparts Shop</option>
                                <option value="4">Bags Shop</option>
                                <option value="5">Bakery Shop</option>
                                <option value="6">Bangles and Novelty Shop</option>
                                <option value="7">Banner and Graphics Shop</option>
                                <option value="8">Beer Shop</option>
                                <option value="9">Belt Shop</option>
                                <option value="10">Bhaji Shop</option>
                                <option value="11">Book Depo</option>
                                <option value="12">Bicycle Shop</option>
                              </Form.Select>
                            </Modal.Body>
                          </Modal>
                        ) : ""}
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Describe your place / business in few words</Form.Label>
                        <Form.Control style={{ paddingBottom: "80px" }} as="textarea" rows={3} name="about" aria-label="With textarea" value={inputText}
                          onChange={changeTextarea} isInvalid={(inputText.length > characterLimit)} />
                        <Badge className="mt-2 Textarea " style={{ marginLeft: "480px" }} bg={`${inputText.length > characterLimit ? "danger" : "primary"}`}>{inputText.length}/{characterLimit}</Badge>
                        <p className="text-danger">{formError.about}</p>

                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Mobile No.</Form.Label>
                        <Form.Control type="text" placeholder="Mobile No." name="mobile" value={formValue.mobile}
                          onChange={handleChanged} />
                        <p className="text-danger">{formError.mobile}</p>

                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Email ID</Form.Label>
                        <Form.Control type="email" placeholder="Email ID" name="email" value={formValue.email}
                          onChange={handleChanged} />
                        <p className="text-danger">{formError.email}</p>

                      </Form.Group>



                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Business Website (If Any)</Form.Label>
                        <Form.Control type="text" placeholder="Business Website (If Any)" name="business" value={formValue.business}
                          onChange={handleChanged} />
                        <p className="text-danger">{formError.business}</p>

                      </Form.Group>
                      <FormGroup as={Row} className="mb-3">
                        <label as="legend" column sm={5} className="line">
                          Do you have door services :
                        </label>
                        {/* <Col sm={2}>
                          
                        <label htmlFor="formHorizontalRadios1" className='d1'>Yes</label>
                          <input
                            type="radio"
                            className='inpu'
                            name="formHorizontalRadios"
                            id="formHorizontalRadios1"
                            value={formValue.formHorizontalRadios}
              onChange={handleChanged}
                          />
                                      
                        </Col>
                        <Col sm={2}>
                          <label htmlFor="formHorizontalRadios2" className='d1'>No</label>
                          <input
                            type="radio"
                           className='inpu'
                            name="formHorizontalRadios"
                            id="formHorizontalRadios2"
                            value={formValue.formHorizontalRadios}
              onChange={handleChanged}
                          />
                        </Col>
                        <p className="text-danger">{formError.formHorizontalRadios}</p>
                      */}



                        <div className="center-align">
                          <input type="radio" name="size" id="size_1" />
                          <label htmlFor="size_1" className='d1 ms-2 '>Yes</label>

                          <input type="radio" name="size" id="size_2" />
                          <label htmlFor="size_2" className='d1 ms-3'>No</label>
                        </div>

                      </FormGroup>
                      <Row className="place_btn">
                        <Col md="6">
                          <Button variant="primary" onClick={Back}>
                            <i className='fa fa-angle-left' /> Prevoius
                          </Button>
                        </Col>
                        <Col md="6">
                          <Button type='submit' variant="primary" className="pull-right" >
                            Next <i className='fa fa-angle-right' />
                          </Button>
                        </Col>
                      </Row>
                    </Col>
                    <Col md="3"></Col>
                  </Row>

                </Form>
              </Tab>
              <Tab eventKey="placeavailaibility" title={<span><i className='fa fa-location-arrow'></i> <br /> Place Availaibility  </span>}>
                <Row>
                  <Col md="3"></Col>
                  <Col md="6">
                    <Form className='placeinfo' onSubmit={hanSubmit} >
                      <Form.Group as={Row} className="mb-2 ">
                        <Form.Label as="legend" column sm={4}>
                          Do you provide 24 * 7 Service :
                        </Form.Label>
                      
                        <Col sm={2} >
                          <input type="radio" name="provideservice" id="size_4" value="provideservice" />
                          <label htmlFor="size_4" className='d1' onClick={() => setShows(false)}>Yes</label>
                          {/* <Form.Check
                            type="radio"
                            label="Yes"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios1"
                            value={formV.formHorizontalRadios}
              onChange={hanChange}

                          /> */}
                        </Col>
                        <Col sm={2} style={{ marginLeft: "-20px" }}>
                          <input type="radio" name="provideservice" id="size_3" value="provideservice" />
                          <label htmlFor="size_3" className="d1" onClick={() => { setShows(true) }} >No</label>
                          {/* <Form.Check
                            type="radio"
                            label="No"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios2"
                            value={formV.formHorizontalRadios}
              onChange={hanChange}
                          /> */}
                          <p className="text-danger mt-3">{error.formHorizontalRadios}</p>

                        </Col>
                        <div >



                        </div>
                      </Form.Group>
                      {shows ? (
                        <Form.Group as={Row} className="mb-2">

                          <Form.Label as="legend" column sm={4}>
                            Working Days :
                          </Form.Label>
                      
                          <Col sm={7}>
                            <div className='days-btn'>
                              {/** <Button>S</Button>
                        <Button>M</Button>
                        <Button>T</Button>
                        <Button>W</Button>
                        <Button>T</Button>
                        <Button>F</Button>
                        <Button>S</Button>**/}
                              <div className="cats action">
                                <label>
                                  <input type="checkbox" value="1" name="select" /><span style={{ paddingLeft: "10px" }} >S</span>
                                </label>
                              </div>

                              <div className="colors comedy ">
                                <label>
                                  <input type="checkbox" value="1" name="select" /><span style={{ paddingLeft: "7px" }} >M</span>
                                </label>
                              </div>

                              <div className="colors crime">
                                <label>
                                  <input type="checkbox" value="1" name="select" /><span style={{ paddingLeft: "10px" }}>T</span>
                                </label>
                              </div>

                              <div className="colors history">
                                <label>
                                  <input type="checkbox" value="1" name="select" /><span style={{ paddingLeft: "6px" }}>W</span>
                                </label>
                              </div>

                              <div className="colors reality">
                                <label>
                                  <input type="checkbox" value="1" name="select" /><span style={{ paddingLeft: "10px" }}>T</span>
                                </label>
                              </div>

                              <div className="colors news">
                                <label>
                                  <input type="checkbox" value="1" name="select" /><span style={{ paddingLeft: "10px" }}>F</span>
                                </label>
                              </div>

                              <div className="colors scifi">
                                <label>
                                  <input type="checkbox" value="1" name="select" /><span style={{ paddingLeft: "9px" }}>S</span>
                                </label>
                              </div>

                            </div>
                          </Col>
                        </Form.Group>) : ""}
                      {shows ? (
                        <Form.Group as={Row} className="mb-2">
                          <Form.Label as="legend" column sm={4} className="mt-4">
                            Working hour timing :
                          </Form.Label>
                        
                          <Col sm={3} className="mt-3">
                            {/* <Form.Select aria-label="Default select example" className="hours" name="working" value={formV.working}
              onChange={hanChange}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                          </Form.Select> */}
                            <Time />
                          </Col>
                          <Col sm={1} style={{ marginTop: "28px" }}><p>to</p></Col>
                          <Col sm={3} className="mt-3">
                            {/* <Form.Select aria-label="Default select example" className="hours" name="working" value={formV.working}
              onChange={hanChange}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                          </Form.Select>
                          <p className="text-danger mt-3">{error.working}</p> */}
                            <ClosingTime/>

                          </Col>
                        </Form.Group>) : ""}
                      {/* {shows ?(
                      <Form.Group as={Row} className="mb-2">
                        <Form.Label as="legend" column sm={5}>
                          Lunch hour timing
                        </Form.Label>
                        :
                        <Col sm={4}>
                          <Form.Check type="checkbox" label="No Lunch Hours" name="check" value={formV.check}
              onChange={hanChange} onClick={()=> setLunchShow(!lunchShow)}/>
              <p className="text-danger mt-3">{error.check}</p>

                        </Col>

                      </Form.Group> ):""} */}
                      {shows ? (
                        <Form.Group as={Row} className="mb-2">
                          {lunchShow ? (
                            <Form.Label as="legend" column sm={4} className="mt-4">
                              Lunch hour timing {":"}
                            </Form.Label>
                          ) : ""}
                          <Col sm={3} className="mt-3">
                            {lunchShow ? (
                              //            <Form.Select aria-label="Default select example" className="hours" name="select" value={formV.select}
                              // onChange={hanChange}>
                              //               <option value="1">1</option>
                              //               <option value="2">2</option>
                              //               <option value="3">3</option>
                              //             </Form.Select>
                              <StartTime/>
                            ) : ""}

                          </Col>
                          {lunchShow ? (
                            <Col sm={1} style={{ marginTop: "28px" }}><p>to</p></Col>) : ""}
                          {lunchShow ? (<Col sm={3} className="mt-3">
                            {/* <Form.Select aria-label="Default select example" className="hours" name="select" value={formV.select}
              onChange={hanChange}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                          </Form.Select>
                          <p className="text-danger mt-3">{error.select}</p> */}
                            <EndTime/>

                          </Col>) : ""}

                        </Form.Group>) : ""}
                      {shows ? (
                        <Form.Group as={Row} className="mb-2">
                          {lunchShow ? (<Form.Label as="legend" column sm={4} style={{ color: "white" }}>

                          </Form.Label>) : (<Form.Label as="legend" column sm={4}>
                            Lunch hour timing :
                          </Form.Label>)}

                          <Col sm={6}  >
                            <Form.Check type="checkbox" name='check' value={formV.check}
                              onChange={hanChange} onClick={() => setLunchShow(!lunchShow)} className="singleline" />
                            <Form.Label className="singleline" >No Lunch Hours</Form.Label>
                            <p className="text-danger mt-3">{error.check}</p>
                          </Col>
                        </Form.Group>) : ""}
                      <Form.Group as={Row} className="mb-2">
                        <Form.Label as="legend" column sm={4}>
                          Do you provide exchange facility {":"}
                        </Form.Label>

                        <Col sm={2} >
                          <input type="radio" name="exchange" id="btn" value="exchange" />
                          <label htmlFor="btn" className='d1 ' onClick={() => setExchange(true)}  >Yes</label>
                          {/* <Form.Check
                            type="radio"
                            label="Yes"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios1"
                            value={formV.formHorizontalRadios}
              onChange={hanChange}
                          /> */}
                        </Col>
                        <Col sm={2} style={{ marginLeft: "-20px" }}>
                          <input type="radio" name="exchange" id="btn1" value="exchange" />
                          <label htmlFor="btn1" className='d1' onClick={() => setExchange(false)}>No</label>
                          {/* <Form.Check
                            type="radio"
                            label="No"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios2"
                            value={formV.formHorizontalRadios}
              onChange={hanChange}
                          /> */}

                          <p className="text-danger mt-3">{error.formHorizontalRadios}</p>
                        </Col>
                      </Form.Group>
                      {exchange ? (
                        <Form.Group as={Row} className="mb-2">
                          {exchangeAny ? (<Form.Label as="legend" column sm={4} className="mt-2">
                            Exchange hour timing  {":"}
                          </Form.Label>) : ""}


                          {exchangeAny ? (<Col sm={3}>
                            {/* <Form.Select aria-label="Default select example" className="hours" name="select" value={formV.select}
              onChange={hanChange}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                          </Form.Select> */}
                            <StartTime />

                          </Col>) : ""}
                          {exchangeAny ? (<Col sm={1} style={{ marginTop: "10px" }}><p>to</p></Col>) : ""}
                          {exchangeAny ? (<Col sm={3}>
                            {/* <Form.Select aria-label="Default select example" className="hours" name="select" value={formV.select}
              onChange={hanChange}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                          </Form.Select> */}
                            {/* <p className="text-danger mt-3">{error.select}</p> */}
                            <EndTime />
                          </Col>) : ""}
                        </Form.Group>) : ""}
                      <Form.Group as={Row} className="mb-2">
                        <Form.Label as="legend" column sm={4}>

                        </Form.Label>



                        {exchange ? (
                          <Form.Group as={Row} className="mb-2">
                            {exchangeAny ? (<Form.Label as="legend" column sm={4} style={{ color: "white" }}>

                            </Form.Label>) : (<Form.Label as="legend" column sm={4}>
                              Exchange hour timing :
                            </Form.Label>)}

                            <Col sm={6}  >
                              <Form.Check type="checkbox" name='check' value={formV.check}
                                onChange={hanChange} onClick={() => setExchangeAny(!exchangeAny)} className="singleline" />
                              <Form.Label className="singleline" >Any time during working hours</Form.Label>
                              <p className="text-danger mt-3">{error.check}</p>
                            </Col>
                          </Form.Group>) : ""}

                        {/* <Form.Check type="checkbox"  name='check' value={formV.check}
              onChange={hanChange} onClick={()=>setExchangeAny(!exchangeAny)} className="single"/>
           <Form.Label className="single">Any time during working hours</Form.Label>
              <p className="text-danger mt-3">{error.check}</p> */}



                      </Form.Group>
                      <Row className="place_btn">
                        <Col md="6">
                          <Button variant="primary" onClick={Backed}>
                            <i className='fa fa-angle-left' /> Prevoius
                          </Button>
                        </Col>
                        <Col md="6">
                          <Button type='submit' variant="primary" className="pull-right"  >
                            Next <i className='fa fa-angle-right' />
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                  </Col>
                  <Col md="3"></Col>
                </Row>
              </Tab>
              <Tab eventKey="uploadimage" title={<span><i className='fa fa-file-image-o'></i> <br /> Upload Place Images  </span>}>
                <Row>
                  <Col md="3"></Col>
                  <Col md="6">
                    <Form className="placeinfo" onSubmit={hanSubmit}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Upload Images</Form.Label>
                        <Form.Control type="file" placeholder="Enter email" className='uploadimg' name="image" value={formV.image} onChange={hanChange} />
                        <p className="text-danger mt-3">{error.image}</p>

                      </Form.Group>


                      <div className=''><p>You have added 0adsfadsf images</p></div>
                      <Row className="place_btn">
                        <Col md="6">
                          <Button variant="primary" onClick={BackAvailaibility}>
                            <i className='fa fa-angle-left' /> Prevoius
                          </Button>
                        </Col>
                        <Col md="6">
                          <Button type="submit" variant="primary" className="pull-right" >
                            Submit <i className='fa fa-angle-right' />
                          </Button>
                        </Col>
                      </Row>

                    </Form>
                  </Col>
                  <Col md="3"></Col>
                </Row>
              </Tab>
            </Tabs>
          </div>
        </Container>
      </section>
      <Footer />
    </div>
  )
}

export default AddNewPlace;





