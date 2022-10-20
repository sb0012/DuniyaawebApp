import React, { Component } from 'react';
//import Carousel from 'react-elastic-carousel';

import "./EditPlace.css";
import vim from "../../assets/images/vim.png";
import { Container, Row, Col, Button, Tab, Tabs, Form, InputGroup, FormControl, Modal, Carousel } from "react-bootstrap";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import EditPlaceProcedure from '../Procedure/EditPlaceProcedure';
import img1 from "../../assets/images/img1.png";
import slider3 from "../../assets/images/slider3.png";

export default class EditPlace extends Component {
  constructor() {
    super();
    this.state = {
      show: false,

    }
  }
  handleModal() {
    this.setState({ show: !this.state.show })
  }
  state = {
    showHidediv: false,
    addmorediv: false,
  };

  render() {

    return (
      <div>
        <Header />
        <section>
          {/*<div className='add_bg'>
              <Container>
              <div className='add_title'>
                 <Row> 
                   <Col md="8">
                     <h1>Edit Place</h1>
                   </Col>
                   <Col md="4">
                     <h6><span>Edit Place</span> / Upload Place Images</h6>
                   </Col>
                 </Row>
                    
                 </div>
               
              </Container>
              </div> */}

        </section>
        {/*Product Price Visibility  header tuch page code*/}
        <section>
          <Container>
            <div className='product_price mt-3'>
              <Row>
                <Col md="6">
                  <div className='prdct_price'>
                    <ul>
                      <li><h5>Product Price Visibility <span>:</span> </h5></li>
                      <li>
                        <div class="cat history">
                          <label className='public'>
                            <input type="checkbox" value="1" /><span>Public</span>
                          </label>
                        </div>
                        <div class="cat history">
                          <label className='public'>
                            <input type="checkbox" value="1" /><span>Only Few</span>
                          </label>
                        </div>
                        <div class="cat history">
                          <label className='public'>
                            <input type="checkbox" value="1" /><span>Hide</span>
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className='prdct_price'>
                    <ul>
                      <li><h5>Your Current Status <span>:</span> </h5></li>
                      <li>
                        <div class="cat history">
                          <label className='public'>
                            <input type="checkbox" value="1" /><span>Online</span>
                          </label>
                        </div>
                        <div class="cat history">
                          <label className='public'>
                            <input type="checkbox" value="1" /><span>Offline</span>
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col md="6" className="pull-right total_views">
                  <p>Total Views : <i className='fa fa-eye'></i></p>
                  <p><span>100</span></p>
                </Col>
              </Row>
            </div>

            {/*Place Details page code*/}
            <div className='edit_prdct mt-2'>
              <Tabs defaultActiveKey="products" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="home" title="Place Details">
                  <Row>
                    <Col md="3"></Col>
                    <Col md="6">
                      <Form className="placeinfo">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label> Shop / Office / Business / Place Name </Form.Label>
                          <Form.Control type="email" placeholder="shripharmamedical@gmail.com" />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                          <Form.Label>Place Owner Name</Form.Label>
                          <Form.Control type="text" placeholder="Vijay Dhupiya" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                          <Form.Label>Place Reg Date</Form.Label>
                          <Form.Control type="date" placeholder="21-03-2017" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                          <Form.Label>Shop / Office / Business / Place Address</Form.Label>
                          <Form.Control as="textarea" rows={3} placeholder="136, Raviwar Peth, Solapur" />
                          <Form.Text className="text-muted">
                            Make sure entered address is complete, correct and it is yoyr Shop/ Office / business location address.
                          </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                          <Form.Label>Landmark</Form.Label>
                          <Form.Control type="text" placeholder="Near Maruti Mandir" />
                        </Form.Group>
                        <div className=''><a href="#."><i className="fa fa-map-marker"></i> Fetch current location</a></div>
                        { /** 
            <Row className="place_btn">
            //     <Col md="6">
            //     <Button variant="primary" type="submit" className="opacity_class">
            //     <i className='fa fa-angle-left' /> Prevoius
            //   </Button>
            //     </Col>
            //     <Col md="6">
            //     <Button variant="primary" type="submit" className="pull-right">
            //     Next <i className='fa fa-angle-right' />
            //   </Button>
            //     </Col>
            //  </Row>
          **/}

                      </Form>
                    </Col>
                    <Col md="3"></Col>
                  </Row>
                </Tab>

                {/*Nature of Business page code*/}
                <Tab eventKey="profile" title="Nature of Business">
                  <Form className="placeinfo">
                    <Form.Group className="mb-3" controlId="formBasicEmail">

                      <Row>
                        <Col md="2"></Col>
                        <Col md="8">
                          <Form.Label>Choose type of business / Place and Category</Form.Label>
                          <ul className='place_cat'>
                            <li><Button onClick={() => this.setState({ shown: !this.state.shown })}>Shop</Button></li>
                            <li><Button>Services</Button></li>
                            <li><Button>Shop</Button></li>
                            <li><Button>Services</Button></li>
                            <li><Button>Shop</Button></li>
                            <li><Button>Services</Button></li>
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
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                          {this.state.shown ? (
                            <div>
                              <Form.Label>Search For Categories</Form.Label>
                              <Form.Select aria-label="Default select example">
                                <option>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </Form.Select>
                            </div>
                          ) : ""}

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                          <Form.Label>Describe your place / business in few words</Form.Label>
                          <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                          <Row>
                            <Col md="4">
                              <Form.Label>Mobile No.</Form.Label>
                              <Form.Control type="number" placeholder="Mobile No." />
                            </Col>
                            <Col md="8">
                              <Form.Label>Email ID</Form.Label>
                              <Form.Control type="email" placeholder="Email ID" />
                            </Col>
                          </Row>

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                          <Form.Label>Business Website (If Any)</Form.Label>
                          <Form.Control type="text" placeholder="Business Website (If Any)" />
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                          <Form.Label as="legend" column sm={5}>
                            Do you have door services :
                          </Form.Label>
                          <Col sm={2}>
                            <Form.Check
                              type="radio"
                              label="Yes"
                              name="formHorizontalRadios"
                              id="formHorizontalRadios1"
                            />
                          </Col>
                          <Col sm={2}>
                            <Form.Check
                              type="radio"
                              label="No"
                              name="formHorizontalRadios"
                              id="formHorizontalRadios2"
                            />

                          </Col>
                        </Form.Group>
                        {/* <Row className="place_btn">
                  <Col md="6">
                  <Button variant="primary" type="submit">
                  <i className='fa fa-angle-left' /> Prevoius
                </Button>
                  </Col>
                  <Col md="6">
                  <Button variant="primary" type="submit" className="pull-right">
                  Next <i className='fa fa-angle-right' />
                </Button>
                  </Col>
               </Row>*/}
                      </Col>
                      <Col md="3"></Col>
                    </Row>

                  </Form>
                </Tab>

                {/**Place availaibility page code **/}
                <Tab eventKey="contact" title="Place availaibility">
                  <Row>
                    <Col md="3"></Col>
                    <Col md="6">
                      <Form className='placeinfo'>
                        <Form.Group as={Row} className="mb-2">
                          <Form.Label as="legend" column sm={5}>
                            Do you provide 24 * 7 Service :
                          </Form.Label>
                          :
                          <Col sm={2}>
                            <Form.Check
                              type="radio"
                              label="Yes"
                              name="formHorizontalRadios"
                              id="formHorizontalRadios1"
                            />
                          </Col>
                          <Col sm={2}>
                            <Form.Check
                              type="radio"
                              label="No"
                              name="formHorizontalRadios"
                              id="formHorizontalRadios2"
                            />

                          </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-2">
                          <Form.Label as="legend" column sm={5}>
                            Working Days :
                          </Form.Label>
                          :
                          <Col sm={6}>
                            <div className='days-btn'>
                              {/** <Button>S</Button>
                    <Button>M</Button>
                    <Button>T</Button>
                    <Button>W</Button>
                    <Button>T</Button>
                    <Button>F</Button>
                    <Button>S</Button>**/}
                              <div class="cat action">
                                <label>
                                  <input type="checkbox" value="1" /><span>S</span>
                                </label>
                              </div>

                              <div class="cat comedy">
                                <label>
                                  <input type="checkbox" value="1" /><span>M</span>
                                </label>
                              </div>

                              <div class="cat crime">
                                <label>
                                  <input type="checkbox" value="1" /><span>T</span>
                                </label>
                              </div>

                              <div class="cat history">
                                <label>
                                  <input type="checkbox" value="1" /><span>W</span>
                                </label>
                              </div>

                              <div class="cat reality">
                                <label>
                                  <input type="checkbox" value="1" /><span>T</span>
                                </label>
                              </div>

                              <div class="cat news">
                                <label>
                                  <input type="checkbox" value="1" /><span>F</span>
                                </label>
                              </div>

                              <div class="cat scifi">
                                <label>
                                  <input type="checkbox" value="1" /><span>S</span>
                                </label>
                              </div>

                            </div>
                          </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-2">
                          <Form.Label as="legend" column sm={5}>
                            Working hour timing
                          </Form.Label>
                          :
                          <Col sm={2}>
                            <Form.Select aria-label="Default select example" className="hours">
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                            </Form.Select>
                          </Col>
                          <Col sm={1}><p>to</p></Col>
                          <Col sm={2}>
                            <Form.Select aria-label="Default select example" className="hours">
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                            </Form.Select>

                          </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-2">
                          <Form.Label as="legend" column sm={5}>
                            Lunch hour timing
                          </Form.Label>
                          :
                          <Col sm={4}>
                            <Form.Check type="checkbox" label="No Lunch Hours" />

                          </Col>

                        </Form.Group>
                        <Form.Group as={Row} className="mb-2">
                          <Form.Label as="legend" column sm={5}>

                          </Form.Label>
                          :
                          <Col sm={2}>
                            <Form.Select aria-label="Default select example" className="hours">
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                            </Form.Select>

                          </Col>
                          <Col sm={1}><p>to</p></Col>
                          <Col sm={2}>
                            <Form.Select aria-label="Default select example" className="hours">
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                            </Form.Select>

                          </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-2">
                          <Form.Label as="legend" column sm={5}>
                            Do you provide exchange facility
                          </Form.Label>
                          :
                          <Col sm={2}>

                            <Form.Check
                              type="radio"
                              label="Yes"
                              name="formHorizontalRadios"
                              id="formHorizontalRadios1"
                            />
                          </Col>
                          <Col sm={2}>
                            <Form.Check
                              type="radio"
                              label="No"
                              name="formHorizontalRadios"
                              id="formHorizontalRadios2"
                            />

                          </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-2">
                          <Form.Label as="legend" column sm={5}>
                            Exchange hour timing
                          </Form.Label>
                          :
                          <Col sm={2}>
                            <Form.Select aria-label="Default select example" className="hours">
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                            </Form.Select>

                          </Col>
                          <Col sm={1}><p>to</p></Col>
                          <Col sm={2}>
                            <Form.Select aria-label="Default select example" className="hours">
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                            </Form.Select>

                          </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-2">
                          <Form.Label as="legend" column sm={5}>

                          </Form.Label>
                          :
                          <Col sm={6}>

                            <Form.Check type="checkbox" label="Any time during working hours" />

                          </Col>

                        </Form.Group>
                        {/*  <Row className="place_btn">
                  <Col md="6">
                  <Button variant="primary" type="submit">
                  <i className='fa fa-angle-left' /> Prevoius
                </Button>
                  </Col>
                  <Col md="6">
                  <Button variant="primary" type="submit" className="pull-right">
                  Next <i className='fa fa-angle-right' />
                </Button>
                  </Col>
               </Row>*/}
                      </Form>
                    </Col>
                    <Col md="3"></Col>
                  </Row>
                </Tab>


                {/*product page code*/}

                <Tab eventKey="products" title="Products">
                  <div className=''>
                    <Row>
                      <Col md="4">
                        <div className='search_prdct'>
                          <div className='search_place mt-0'>
                            <Form>
                              {/*   <Form.Control
                                   type="text"
                                   id="Search Place"
                                   className='searchbar fa fa-user'
                                   aria-describedby="searchplaceBlock"
                                   placeholder="Search Place"
                                   />*/}
                              <InputGroup className="mb-3  ">
                                {/* search symbol code line*/}
                                <InputGroup.Text id="basic-addon1"><i className='fa fa-search'></i></InputGroup.Text>
                                <FormControl
                                  className='searchbar'
                                  placeholder="Serach"
                                  aria-label="Username"
                                  aria-describedby="basic-addon1"
                                />
                              </InputGroup>
                            </Form>
                          </div>
                        </div>

                      </Col>


                      <Col md="4">
                        <div className='switch_price'>
                          <p>Price Visible to Everyone : </p>
                          &nbsp;

                          {/* toggle button ON OFF */}
                          <div class="toggle-button-cover">
                            <div class="">
                              <div class="button r" id="button-3">
                                <input type="checkbox" className="checkbox" />
                                <div class="knobs"></div>
                                <div class="layer"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Col>
                      {/*product name price image hide*/}
                      <Col md="4">
                        <div className='add_prdct'>
                          <a href="#." onClick={() => this.setState({ showHidediv: !this.state.showHidediv })}>Add Product</a>
                          <p>Total Products : 200</p>
                        </div>
                      </Col>
                      {this.state.showHidediv ? (
                        <Form>
                          <div className='add_product'>
                            <Row>
                              <Col md="6">
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                  <Form.Label>Product Name</Form.Label>
                                  <Form.Control type="text" placeholder="Enter Product Name" />
                                </Form.Group>
                              </Col>
                              <Col md="2">
                                <Form.Group className="" controlId="formBasicEmail">
                                  <Form.Label>Unit</Form.Label>
                                  <Form.Control type="text" placeholder="Enter Unit" />
                                  <a href="#.">Change Qty</a>
                                </Form.Group>
                              </Col>
                              <Col md="2">
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                  <Form.Label>Price</Form.Label>
                                  <Form.Control type="text" placeholder="Enter Price" />
                                </Form.Group>
                              </Col>
                              <Col md="2">
                                <Form.Group className="mt-5" controlId="formBasicEmail">
                                  <a style={{ fontSize: "12px" }} className='add_prdct' href="#." onClick={() => this.setState({ addmorediv: !this.state.addmorediv })}>
                                    Add More
                                  </a>
                                </Form.Group>
                              </Col>
                              {this.state.addmorediv ? (
                                <div>
                                  <Row>
                                    <Col md="2">
                                      <Form.Group className="mb-3" controlId="formBasicbrandname">
                                        <Form.Label>Brand Name</Form.Label>
                                        <Form.Control type="text" placeholder="Brand Name" />
                                      </Form.Group>
                                    </Col>
                                    <Col md="4">
                                      <Form.Group className="mb-3" controlId="formBasicfile">
                                        <Form.Label>Upload Product Image</Form.Label>
                                        <Form.Control type="file" />
                                      </Form.Group>
                                    </Col>
                                    <Col md="2">
                                      <Form.Group className="mb-3" controlId="formBasicstock">
                                        <Form.Label>Stock</Form.Label>
                                        <Form.Control type="text" placeholder="Stock" />
                                      </Form.Group>
                                    </Col>
                                  </Row>
                                </div>
                              ) : ""}
                              <Col md="2">
                                <div className="place_btn mt-0">
                                  <Button variant="primary" type="submit">
                                    Submit
                                  </Button>
                                </div>
                              </Col>
                            </Row>
                          </div>
                        </Form>

                      ) : ""}
                    </Row>
                  </div>
                  <div className='product_list'>
                    <Row>
                      <Col md="2">
                        <div className='list1'>
                          <Row>
                            {/*heart symbol*/}
                            <Col md="6" className="heart">
                              <a href='#.'><i className='fa fa-heart-o'></i></a>
                            </Col>
                            {/*dotted*/}
                            <Col md="6" className='dot'>
                              <a href="#.">...</a>
                            </Col>
                          </Row>
                          {/*product image*/}
                          <a href='#.' onClick={() => this.handleModal()}><img src={vim} alt="product"></img></a>
                        </div>
                        <div onClick={() => this.handleModal()} className='list_info'>
                          <h6>Vim</h6>
                          <Row className="price">
                            <Col md="6">
                              {/*rupees symbol*/}
                              <p><i className='fa fa-inr'></i> 20</p>
                            </Col>
                            <Col md="6">
                              <p>20pcs</p>

                            </Col>
                          </Row>
                        </div>

                      </Col>
                      <Col md="2">
                        <div className='list1'>
                          <Row>
                            <Col md="6" className="heart">
                              <a href='#.'><i className='fa fa-heart-o'></i></a>
                            </Col>
                            <Col md="6" className='dot'>
                              <a href="#.">...</a>
                            </Col>
                          </Row>
                          <img src={vim} alt="product"></img>
                        </div>
                        <div className='list_info'>
                          <h6>Vim</h6>
                          <Row className="price">
                            <Col md="6">
                              <p><i className='fa fa-inr'></i> 20</p>
                            </Col>
                            <Col md="6">
                              <p>20pcs</p>
                            </Col>
                          </Row>
                        </div>
                      </Col>
                      <Col md="2">
                        <div className='list1'>
                          <Row>
                            <Col md="6" className="heart">
                              <a href='#.'><i className='fa fa-heart-o'></i></a>
                            </Col>
                            <Col md="6" className='dot'>
                              <a href="#.">...</a>
                            </Col>
                          </Row>
                          <img src={vim} alt="product"></img>
                        </div>
                        <div className='list_info'>
                          <h6>Vim</h6>
                          <Row className="price">
                            <Col md="6">
                              <p><i className='fa fa-inr'></i> 20</p>
                            </Col>
                            <Col md="6">
                              <p>20pcs</p>
                            </Col>
                          </Row>
                        </div>
                      </Col>
                      <Col md="2">
                        <div className='list1'>
                          <Row>
                            <Col md="6" className="heart">
                              <a href='#.'><i className='fa fa-heart-o'></i></a>
                            </Col>
                            <Col md="6" className='dot'>
                              <a href="#.">...</a>
                            </Col>
                          </Row>
                          <img src={vim} alt="product"></img>
                        </div>
                        <div className='list_info'>
                          <h6>Vim</h6>
                          <Row className="price">
                            <Col md="6">
                              <p><i className='fa fa-inr'></i> 20</p>
                            </Col>
                            <Col md="6">
                              <p>20pcs</p>
                            </Col>
                          </Row>
                        </div>
                      </Col>
                      <Col md="2">
                        <div className='list1'>
                          <Row>
                            <Col md="6" className="heart">
                              <a href='#.'><i className='fa fa-heart-o'></i></a>
                            </Col>
                            <Col md="6" className='dot'>
                              <a href="#.">...</a>
                            </Col>
                          </Row>
                          <img src={vim} alt="product"></img>
                        </div>
                        <div className='list_info'>
                          <h6>Vim</h6>
                          <Row className="price">
                            <Col md="6">
                              <p><i className='fa fa-inr'></i> 20</p>
                            </Col>
                            <Col md="6">
                              <p>20pcs</p>
                            </Col>
                          </Row>
                        </div>
                      </Col>
                      <Col md="2">
                        <div className='list1'>
                          <Row>
                            <Col md="6" className="heart">
                              <a href='#.'><i className='fa fa-heart-o'></i></a>
                            </Col>
                            <Col md="6" className='dot'>
                              <a href="#.">...</a>
                            </Col>
                          </Row>
                          <img src={vim} alt="product"></img>
                        </div>
                        <div className='list_info'>
                          <h6>Vim</h6>
                          <Row className="price">
                            <Col md="6">
                              <p><i className='fa fa-inr'></i> 20</p>
                            </Col>
                            <Col md="6">
                              <p>20pcs</p>
                            </Col>
                          </Row>
                        </div>
                      </Col><Col md="2">
                        <div className='list1'>
                          <Row>
                            <Col md="6" className="heart">
                              <a href='#.'><i className='fa fa-heart-o'></i></a>
                            </Col>
                            <Col md="6" className='dot'>
                              <a href="#.">...</a>
                            </Col>
                          </Row>
                          <img src={vim} alt="product"></img>
                        </div>
                        <div className='list_info'>
                          <h6>Vim</h6>
                          <Row className="price">
                            <Col md="6">
                              <p><i className='fa fa-inr'></i> 20</p>
                            </Col>
                            <Col md="6">
                              <p>20pcs</p>
                            </Col>
                          </Row>
                        </div>
                      </Col>
                      <Col md="2">
                        <div className='list1'>
                          <Row>
                            <Col md="6" className="heart">
                              <a href='#.'><i className='fa fa-heart-o'></i></a>
                            </Col>
                            <Col md="6" className='dot'>
                              <a href="#.">...</a>
                            </Col>
                          </Row>
                          <img src={vim} alt="product"></img>
                        </div>
                        <div className='list_info'>
                          <h6>Vim</h6>
                          <Row className="price">
                            <Col md="6">
                              <p><i className='fa fa-inr'></i> 20</p>
                            </Col>
                            <Col md="6">
                              <p>20pcs</p>
                            </Col>
                          </Row>
                        </div>
                      </Col><Col md="2">
                        <div className='list1'>
                          <Row>
                            <Col md="6" className="heart">
                              <a href='#.'><i className='fa fa-heart-o'></i></a>
                            </Col>
                            <Col md="6" className='dot'>
                              <a href="#.">...</a>
                            </Col>
                          </Row>
                          <img src={vim} alt="product"></img>
                        </div>
                        <div className='list_info'>
                          <h6>Vim</h6>
                          <Row className="price">
                            <Col md="6">
                              <p><i className='fa fa-inr'></i> 20</p>
                            </Col>
                            <Col md="6">
                              <p>20pcs</p>
                            </Col>
                          </Row>
                        </div>
                      </Col>
                      <Col md="2">
                        <div className='list1'>
                          <Row>
                            <Col md="6" className="heart">
                              <a href='#.'><i className='fa fa-heart-o'></i></a>
                            </Col>
                            <Col md="6" className='dot'>
                              <a href="#.">...</a>
                            </Col>
                          </Row>
                          <img src={vim} alt="product"></img>
                        </div>
                        <div className='list_info'>
                          <h6>Vim</h6>
                          <Row className="price">
                            <Col md="6">
                              <p><i className='fa fa-inr'></i> 20</p>
                            </Col>
                            <Col md="6">
                              <p>20pcs</p>
                            </Col>
                          </Row>
                        </div>
                      </Col><Col md="2">
                        <div className='list1'>
                          <Row>
                            <Col md="6" className="heart">
                              <a href='#.'><i className='fa fa-heart-o'></i></a>
                            </Col>
                            <Col md="6" className='dot'>
                              <a href="#.">...</a>
                            </Col>
                          </Row>
                          <img src={vim} alt="product"></img>
                        </div>
                        <div className='list_info'>
                          <h6>Vim</h6>
                          <Row className="price">
                            <Col md="6">
                              <p><i className='fa fa-inr'></i> 20</p>
                            </Col>
                            <Col md="6">
                              <p>20pcs</p>
                            </Col>
                          </Row>
                        </div>
                      </Col>
                      <Col md="2">
                        <div className='list1'>
                          <Row>
                            <Col md="6" className="heart">
                              <a href='#.'><i className='fa fa-heart-o'></i></a>
                            </Col>
                            <Col md="6" className='dot'>
                              <a href="#.">...</a>
                            </Col>
                          </Row>
                          <img src={vim} alt="product"></img>
                        </div>
                        <div className='list_info'>
                          <h6>Vim</h6>
                          <Row className="price">
                            <Col md="6">
                              <p><i className='fa fa-inr'></i> 20</p>
                            </Col>
                            <Col md="6">
                              <p>20pcs</p>
                            </Col>
                          </Row>
                        </div>
                      </Col>
                      <Col md="2">
                        <div className='list1'>
                          <Row>
                            <Col md="6" className="heart">
                              <a href='#.'><i className='fa fa-heart-o'></i></a>
                            </Col>
                            <Col md="6" className='dot'>
                              <a href="#.">...</a>
                            </Col>
                          </Row>
                          <img src={vim} alt="product"></img>
                        </div>
                        <div className='list_info'>
                          <h6>Vim</h6>
                          <Row className="price">
                            <Col md="6">
                              <p><i className='fa fa-inr'></i> 20</p>
                            </Col>
                            <Col md="6">
                              <p>20pcs</p>
                            </Col>
                          </Row>
                        </div>
                      </Col><Col md="2">
                        <div className='list1'>
                          <Row>
                            <Col md="6" className="heart">
                              <a href='#.'><i className='fa fa-heart-o'></i></a>
                            </Col>
                            <Col md="6" className='dot'>
                              <a href="#.">...</a>
                            </Col>
                          </Row>
                          <img src={vim} alt="product"></img>
                        </div>
                        <div className='list_info'>
                          <h6>Vim</h6>
                          <Row className="price">
                            <Col md="6">
                              <p><i className='fa fa-inr'></i> 20</p>
                            </Col>
                            <Col md="6">
                              <p>20pcs</p>
                            </Col>
                          </Row>
                        </div>
                      </Col>

                    </Row>
                  </div>
                </Tab>
                {/*Place Photo Page code*/}
                <Tab eventKey="placephotos" title="Place Photos">
                  <Row>
                    <Col md="3" className='photos'>
                      <a href="#."><img src={img1} alt="img1"></img></a>
                    </Col>
                    <Col md="3" className='photos'>
                      <a href="#."><img src={img1} alt="img1"></img></a>
                    </Col>
                    <Col md="3" className='photos'>
                      <a href="#."><img src={img1} alt="img1"></img></a>
                    </Col>
                    <Col md="3" className='photos'>
                      <a href="#."><img src={img1} alt="img1"></img></a>
                    </Col>
                    <Col md="3">
                      <a href="#."><img src={img1} alt="img1"></img></a>
                    </Col>
                    <Col md="3" className='photos'>
                      <a href="#."><img src={img1} alt="img1"></img></a>
                    </Col>
                    <Col md="3" className='photos'>
                      <a href="#."><img src={img1} alt="img1"></img></a>
                    </Col>
                    <Col md="3" className='photos'>
                      <a href="#."><img src={img1} alt="img1"></img></a>
                    </Col>
                    <Col md="3" className='photos'>
                      <a href="#."><img src={img1} alt="img1"></img></a>
                    </Col>
                    <Col md="3" className='photos'>
                      <a href="#."><img src={img1} alt="img1"></img></a>
                    </Col>
                    <Col md="3" className='photos'>
                      <a href="#."><img src={img1} alt="img1"></img></a>
                    </Col>
                    <Col md="3" className='photos' >
                      <a href="#."><img src={img1} alt="img1"></img></a>
                    </Col>
                    <Col md="3" className='photos'>
                      <a href="#."><img src={img1} alt="img1"></img></a>
                    </Col>

                  </Row>
                </Tab>
                <Tab eventKey="editplacehelp" title={<span><i className='fa fa-question-circle'></i></span>} >
                  <EditPlaceProcedure />
                </Tab>
              </Tabs>
              <Modal show={this.state.show} onHide={() => this.handleModal()}>
                <Modal.Header closeButton className='p-2' style={{ background: "#eee", border: "none" }}><i className="fa fa-heart_o"></i></Modal.Header>
                <Modal.Body className="p-0"><Carousel variant="dark" className="sliderbg">
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={slider3}
                      alt="First slide"
                    />

                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={slider3}
                      alt="Second slide"
                    />

                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={slider3}
                      alt="Third slide"
                    />

                  </Carousel.Item>

                </Carousel>
                  <div className='download_icon'>
                    <h5><i style={{ color: "#ff0000" }} className='fa fa-heart-o'></i> &nbsp;<i style={{ color: "#c1bec3" }} className='fa fa-download'></i></h5>

                  </div>
                  <div className='product_info'>
                    <Row>
                      <Col md="6">
                        <div className='prdct_left'>
                          <h1>Vim Bar (Pack of 5 )</h1>
                          <p><i className='fa fa-inr'></i> 254.00</p>
                        </div>
                      </Col>
                      <Col md="6">
                        <div className="prdct_right">
                          <h5>250grm</h5>
                          <h6>In Stock</h6>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Modal.Body>
                {/*Brand info code*/}
                <Modal.Footer className='brand_info'>
                  {/* <Button onClick={()=>this.handleModal()}>Close</Button>  
              <Button onClick={()=>this.handleModal()}>Save</Button>  */}
                  <Row>
                    <Col md="6" className="brand_nm pull-left">
                      <p><span>Brand Name: </span>Vim Brand</p>
                    </Col>
                    <Col md="6" className='note pull-right' >
                      <p><span>Note:</span> Free Home Delivery & COD</p>
                    </Col>
                  </Row>

                </Modal.Footer>
              </Modal>
            </div>
          </Container>
        </section>
        <Footer />
      </div>
    )
  }
}