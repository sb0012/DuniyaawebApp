import React, { Component } from 'react';
//import Carousel from 'react-elastic-carousel';
import bg1 from "../../assets/images/bg1.png";
import vim from "../../assets/images/vim.png";
import img1 from "../../assets/images/img1.png";
import slider3 from "../../assets/images/slider3.png";
import "./searchedplace.css";
import {Container, Row, Col, Button, Tabs, Tab,Form, Modal, Carousel} from "react-bootstrap";
import Header from "../../components/Header";
import Footer from "../../components/Footer";


export default class SearchedPlace extends Component {
    constructor(){  
        super();  
        this.state={  
          show:false  
        }  
      }  
      handleModal(){  
        this.setState({show:!this.state.show})  
      }
  render () {
 
    return (
        <div>
          <Header /> 
              <section className='search_place'>
                  <Container>
                    <Row>
                       <Col md="3">
                        <div className='shop_name'>
                           <div className='address'>
                              <h1>Vijay Kirana Dukan <a href="/EditPlace" className='pull-right'><i className='fa fa-pencil'></i></a></h1>
                              <h4><span>Owner Name : </span> Chandrakant Gouda</h4>
                              <p><i className='fa fa-map-marker'></i> c1 103, Hydrabad Road, Vidi 
                              Gharkul,pani Taki, Solapur-
                              413005</p>
                              <h6>All Types Grocery</h6>
                           </div>
                            <div className='review'>
                               <Row>
                                  <Col md="7">
                                    <h6><i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i></h6>
                                  </Col>
                                  <Col md="5">
                                    <h4>3.5</h4>
                                  </Col>
                               </Row>
                              
                            </div>
                            <div className="emialid">
                            <h6><i className='fa fa-envelope'></i> vijay1234@gmail.com</h6>
                            <h6><i className='fa fa-phone'></i> +91 9878675645</h6>
                            </div>
                            <div className='follow'>
                                <h3>Follow Us On : </h3>
                                <ul>
                                   <li><a href="#."><i className='fa fa-instagram'></i></a></li>
                                   <li><a href="#."><i className='fa fa-whatsapp'></i></a></li>
                                </ul>
                            </div>
                            <div className='time'>
                                <h6>Shop Time : </h6>
                                <p>
                                Daily 10:00 am to 9:00 pm<br />
                                Sunday Holiday
                                </p>
                            </div>
                        </div>
                       </Col>
                       <Col md="9">
                           <div className='slider_bg1'>
                               <img src={bg1} alt=""></img>
                               <div className=''>
                                    <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3 product_tab">
                                    <Tab eventKey="home" title="Products">
                                       <div className='product_list'>
                                           <Row>
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
                                                     <a href='#.' onClick={()=>this.handleModal()}><img src={vim} alt="product"></img></a>
                                                  </div>
                                                  <div onClick={()=>this.handleModal()} className='list_info'>
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
                                    <Tab eventKey="profile" title="Photos">
                                        <Row> 
                                            <Col md="3" className='photos'>
                                                <a href=""><img src={img1} alt="img1"></img></a>
                                            </Col>
                                            <Col md="3" className='photos'>
                                                <a href=""><img src={img1} alt="img1"></img></a>
                                            </Col>
                                            <Col md="3" className='photos'>
                                                <a href=""><img src={img1} alt="img1"></img></a>
                                            </Col>
                                            <Col md="3" className='photos'>
                                                <a href=""><img src={img1} alt="img1"></img></a>
                                            </Col><Col md="3">
                                            <a href=""><img src={img1} alt="img1"></img></a>
                                        </Col>
                                        <Col md="3" className='photos'>
                                                <a href=""><img src={img1} alt="img1"></img></a>
                                            </Col>
                                            <Col md="3" className='photos'>
                                                <a href=""><img src={img1} alt="img1"></img></a>
                                            </Col>
                                            <Col md="3" className='photos'> 
                                                <a href=""><img src={img1} alt="img1"></img></a>
                                            </Col><Col md="3" className='photos'>
                                            <a href=""><img src={img1} alt="img1"></img></a>
                                        </Col>
                                        <Col md="3" className='photos'>
                                                <a href=""><img src={img1} alt="img1"></img></a>
                                            </Col>
                                            <Col md="3" className='photos'>
                                                <a href=""><img src={img1} alt="img1"></img></a>
                                            </Col>
                                            <Col md="3" className='photos' >
                                                <a href=""><img src={img1} alt="img1"></img></a>
                                            </Col>
                                            <Col md="3" className='photos'>
                                                <a href=""><img src={img1} alt="img1"></img></a>
                                            </Col>

                                        </Row>
                                    </Tab>
                                    <Tab eventKey="contact" title="Posts">
                                       c
                                    </Tab>
                                    <Tab eventKey="review" title="Review and Feedback">
                                       <div className='review_top'>
                                          <Row>  
                                              <Col md="7">
                                                 <div className='review_div'>
                                                     <ul> 
                                                        <li>
                                                           <div className='pull-left'>
                                                           <h6>Your Review</h6>
                                                           <h6><i className='fa fa-star'></i>
                                                           <i className='fa fa-star'></i>
                                                           <i className='fa fa-star'></i>
                                                           <i className='fa fa-star'></i>
                                                           <i className='fa fa-star'></i></h6>
                                                           </div>
                                                           <div className='pull-right'>
                                                           <p>2 days ago, 10:12 am</p>
                                                           </div>
                                                        </li>
                                                       
                                                     </ul>
                                                 </div>
                                              </Col>
                                              <Col md="5">
                                                 <div className='feedback'>
                                                   <Form.Control as="textarea" rows={3} placeholder="Write your feedback"/>
                                                   <Button className="pull-right">Send</Button>
                                                 </div>
                                              </Col>
                                          </Row>
                                       </div>
                                       <div className='review_bottom'>
                                           <ul>
                                              <li>
                                                 <Row>
                                                     <Col md="3">
                                                        <div className='user_review'>
                                                           <div className='pull-left user_icon'>
                                                               <i className='fa fa-user'></i>
                                                           </div>
                                                           <div className='user_name'>
                                                               <h6>User Name</h6>
                                                               <h6><i className='fa fa-star'></i>
                                                           <i className='fa fa-star'></i>
                                                           <i className='fa fa-star'></i>
                                                           <i className='fa fa-star'></i>
                                                           <i className='fa fa-star'></i></h6>
                                                           </div>
                                                        </div>
                                                     </Col>
                                                     <Col md="9"> 
                                                        <div className='user_twit'>
                                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                            <span className='pull-right'>2 day's before : 2:00 pm</span>
                                                        </div>
                                                     </Col>
                                                 </Row>
                                              </li>
                                              <li>
                                              <Row>
                                                  <Col md="3">
                                                     <div className='user_review'>
                                                        <div className='pull-left user_icon'>
                                                            <i className='fa fa-user'></i>
                                                        </div>
                                                        <div className='user_name'>
                                                            <h6>User Name</h6>
                                                            <h6><i className='fa fa-star'></i>
                                                        <i className='fa fa-star'></i>
                                                        <i className='fa fa-star'></i>
                                                        <i className='fa fa-star'></i>
                                                        <i className='fa fa-star'></i></h6>
                                                        </div>
                                                     </div>
                                                  </Col>
                                                  <Col md="9"> 
                                                     <div className='user_twit'>
                                                         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                         <span className='pull-right'>2 day's before : 2:00 pm</span>
                                                     </div>
                                                  </Col>
                                              </Row>
                                           </li>
                                           <li>
                                           <Row>
                                               <Col md="3">
                                                  <div className='user_review'>
                                                     <div className='pull-left user_icon'>
                                                         <i className='fa fa-user'></i>
                                                     </div>
                                                     <div className='user_name'>
                                                         <h6>User Name</h6>
                                                         <h6><i className='fa fa-star'></i>
                                                     <i className='fa fa-star'></i>
                                                     <i className='fa fa-star'></i>
                                                     <i className='fa fa-star'></i>
                                                     <i className='fa fa-star'></i></h6>
                                                     </div>
                                                  </div>
                                               </Col>
                                               <Col md="9"> 
                                                  <div className='user_twit'>
                                                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                      <span className='pull-right'>2 day's before : 2:00 pm</span>
                                                  </div>
                                               </Col>
                                           </Row>
                                        </li>
                                        <li>
                                        <Row>
                                            <Col md="3">
                                               <div className='user_review'>
                                                  <div className='pull-left user_icon'>
                                                      <i className='fa fa-user'></i>
                                                  </div>
                                                  <div className='user_name'>
                                                      <h6>User Name</h6>
                                                      <h6><i className='fa fa-star'></i>
                                                  <i className='fa fa-star'></i>
                                                  <i className='fa fa-star'></i>
                                                  <i className='fa fa-star'></i>
                                                  <i className='fa fa-star'></i></h6>
                                                  </div>
                                               </div>
                                            </Col>
                                            <Col md="9"> 
                                               <div className='user_twit'>
                                                   <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                   <span className='pull-right'>2 day's before : 2:00 pm</span>
                                               </div>
                                            </Col>
                                        </Row>
                                     </li>
                                           </ul>
                                       </div>
                                    </Tab>
                                    </Tabs>
                               </div>
                               <Modal show={this.state.show} onHide={()=>this.handleModal()}>  
                               <Modal.Header closeButton className='p-2' style={{background:"#eee", border:"none"}}><i className="fa fa-heart_o"></i></Modal.Header>
                               <Modal.Body  className="p-0"><Carousel variant="dark" className="sliderbg">
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
                               <h5><i style={{color:"#ff0000"}} className='fa fa-heart-o'></i> &nbsp;<i style={{color:"#c1bec3"}} className='fa fa-download'></i></h5>
                              
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
                       </Col>
                    </Row>                    
                  </Container>
              </section>              
          <Footer />
        </div>
    )
  }
}