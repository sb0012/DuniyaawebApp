import React, { Component } from 'react';
//import Carousel from 'react-elastic-carousel';
import product from "../../assets/images/product.png";
import voice from "../../assets/images/voice.png";
import doneproduct from "../../assets/images/doneproduct.png";
import "./procedure.css";
//import {Navbar, Nav, NavDropdown, Container, Row, Col, Button} from "react-bootstrap";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Container,Accordion } from 'react-bootstrap';

export default class ShowPlaceProcedure extends Component {
 
  render () {
 
    return (
        <div>
           <Header />
              <section>
              <div className='help_breadbrumb pt-3 mt-4'>
                  <Container>
                     <h6 className='text-center pb-3 fs-6 fw-bold'>In this shown all registerted places</h6>
                  </Container>
               </div>
                 <Container>
                 <Accordion
                 variant="flat" className='bg-none'>
                 <div className='styled'>

                    <Accordion.Item eventKey="0" >
                       <Accordion.Header className="Hovers"><span className='accordion-butt fs-4'><span className='fs-4 me-2'>Step1:</span>  Place Details</span></Accordion.Header>
                       <Accordion.Body >
                    <div className='app_step mt-5'>
                       <h5>Information</h5>
                       <ul className='step1'> 
                          <li>In this shown all registerted places. Which are below:
                             <ul>
                                <li>Newly Added Places</li>
                                <li>Recommanded Places</li>
                                <li>Most Popular In Places</li>
                             </ul>
                          </li>
                          <li>And also shown <b>Business Post</b></li> 
                          <li><b>Newly Added Places</b>
                             <ul>
                                <li>In this section user can see new places.</li>
                                <li>On this new places user can get data about new place which are unknow to user and He/ She can reach to the palce very easily</li>
                                <li>In a new place included:
                                   <ul>
                                      <li>Place Name</li>
                                      <li>Place Photo</li>
                                      <li>Type of Place</li>
                                      <li>Mobile No</li>
                                      <li>User Ratings</li>
                                   </ul>
                                </li>
                             </ul>
                          </li> 
                          </ul>
                          </div>
                          </Accordion.Body>
                          </Accordion.Item>
                       </div>
                       <div className='styled'>

                       <Accordion.Item eventKey="1" c>
                          <Accordion.Header><span className='accordion-butt fs-4'><span className='fs-4 me-2'>Step2:</span>Nature Of Business</span></Accordion.Header>
                          <Accordion.Body>
                             <div className='accordion'>
                          <li><b>Recommanded Places</b>
                             <ul>
                              <li>These recommanded places very helpful to users</li>
                              <li>On this recommanded places user can get idea, He/ She easily reach to the place.</li>
                              <li>In a recommanded included:
                                   <ul>
                                      <li>Place Name</li>
                                      <li>Place Photo</li>
                                      <li>Type of Place</li>
                                      <li>Mobile No</li>
                                      <li>User Ratings</li>
                                   </ul>
                                </li>
                              </ul>
                          </li>
                          </div>
                          </Accordion.Body>
                       </Accordion.Item>
                    </div>
                    <div className='styled'>
                    <Accordion.Item eventKey="2">
                       <Accordion.Header><span className='accordion-butt fs-4'><span className='fs-4 me-2'>Step3:</span>Place Availability</span></Accordion.Header>
                       <Accordion.Body className='mb-5'>
                          <div className='accordion'>
                          <li><b>Most Popular Places</b>
                             <ul>
                                <li>In this section user can get the all the information of most popular place without any searching.</li>
                                <li>On this information user know the details of most popular place.</li>
                                <li>In a Place Details included:
                                   <ul>
                                      <li>Place Name</li>
                                      <li>Place Photo</li>
                                      <li>Type of Place</li>
                                      <li>Mobile No</li>
                                      <li>User Ratings</li>
                                   </ul>
                                </li>
                             </ul>
                          </li>   
                          </div>
                          </Accordion.Body>
                       </Accordion.Item>
                    </div> 

                    <div className='styled'>
                    <Accordion.Item eventKey="3">
                       <Accordion.Header><span className='accordion-butt fs-4'><span className='fs-4 me-2'>Step4:</span>Upload Place Images</span></Accordion.Header>
                       <Accordion.Body>
                          <div className='accordion'>
                          <li><b>Business Post:</b>
                             <ul>
                                <li>In this section user can see all information of various types of business. 
                                which business are growing, Which type of business, Acjact where is the place....etc.
                                </li>
                                <li>All the little bit information user can get on this post.</li>
                             </ul>
                          </li>               
                   
                      
                       </div>

                       </Accordion.Body>
                       </Accordion.Item>
                       </div>
                       </Accordion>
                   
                 </Container>
              </section>
           <Footer />
      </div>
    )
  }
}