import React, { Component } from 'react';
//import Carousel from 'react-elastic-carousel';
// import product from "../../assets/images/product.png";
// import voice from "../../assets/images/voice.png";
// import doneproduct from "../../assets/images/doneproduct.png";
import Life from "../../assets/images/Life.mp4";
import "./procedure.css";
//import {Navbar, Nav, NavDropdown, Container, Row, Col, Button} from "react-bootstrap";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Container,Accordion } from 'react-bootstrap';

export default class HelpingHandProcedure extends Component {
   constructor(props) {
      super(props);
      this.state = {
        is_visible: false,
      };
    }
    componentDidMount() {
      var scrollComponent = this;
      document.addEventListener("scroll", function(e) {
        scrollComponent.toggleVisibility();
      });
    }
    toggleVisibility() {
      if (window.pageYOffset > 600) {
        this.setState({
          is_visible: true
        });
      } else {
        this.setState({
          is_visible: false
        });
      }
    }
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  render () {
   const { is_visible } = this.state;
    return (
        <div>
           <Header />
              <section>
              <div className='help_breadbrumb pt-2 mt-4'>
                  <Container>
                     <h5 className='text-center pb-2 fs-6 fw-bold'> How to add Helping Hand Place</h5>
                  </Container>
               </div>
                 {/**
                 <div className='help_breadbrumb pt-3 mt-4'>
                    <Container>
                    <h6>Procedure of Help Place</h6>
                    </Container>
                 </div>
                **/}
                 <Container>
                 <Accordion
                 variant="flat" className='bg-none'>
                 <div className='styled'>

                    <Accordion.Item eventKey="0" >
                       <Accordion.Header className="Hovers"><span className='accordion-butt fs-4'>Step1:</span> </Accordion.Header>
                       <Accordion.Body >
                 
                    <div className='app_step mt-1 mb-1 pb-3 pt-2 mt-1'>
                       {/* <h5> How to add Help Place</h5> */}
                       <ul className='step1'> 
                          <li><b>Step 1</b></li>
                          <li>1. Tap   <i className='fa fa-plus'></i> &nbsp;on Duniyaa Home Screen</li>                         
                          <li className='span_button'>2. Select category from the list For ex. <span>Food</span></li>
                          <li>3. Select No. of people from the list which are included in that place where people need help</li>
                          <li>4. Select Priority : There are 3 option that are below: 
                              <ul>
                                 <li className='span_button'> <span>Immediate</span><span>Urgent</span><span>Normal</span></li>
                              
                              </ul>
                            </li>
                           <li>5. Enter address of that help place</li>   
                           <li>6. Select landmark of that place</li>
                           </ul>
                           </div>
                           <div >
                       <video src={Life} type = "video/mp4" controls className='decrese'>  </video>
                    </div>
                           </Accordion.Body>
                           </Accordion.Item>
                        </div>
                        <div className='styled'>

                        <Accordion.Item eventKey="1" >
                           <Accordion.Header><span className='accordion-butt fs-4'>Step2:</span></Accordion.Header>
                           <Accordion.Body>
                           <li><b>Step 2</b></li>
                           <li>Here, are 3 options that are below: 
                            <ul style={{paddingLeft:"20px"}}>
                                <li><span>Add Images</span></li>
                                <li><span>Add Message</span></li>
                                <li><span>Fetch Location</span></li>
                            </ul></li>
                            <li>1. Here, click on <span>Add Images:</span></li>
                              <p style={{paddingLeft:"20px"}}>Select the files and upload multiple images of that help place</p>
                            
                            <li style={{paddingLeft:"20px"}} className='span_button'>And click on <span>Add</span> button</li>
                            <li >2. Click on <span>Add Message</span></li>
                               <p style={{paddingLeft:"20px"}}>Add message regarding to help place</p>
                            
                            <li style={{paddingLeft:"20px"}} className='span_button'>And click on <span>Add</span> button</li>
                            <li>3.Click on <span>Fetch Location</span></li>
                            <p style={{paddingLeft:"20px"}}>Select location of help place in the map and fetch the address</p>
                           
                           <li style={{paddingLeft:"20px"}} className='span_button'>And click on <span>Add</span> button</li>

                           <div >
                       <video src={Life} type="video/mp4" controls className='decrese'>  </video>
                    </div>
                           </Accordion.Body>
                           </Accordion.Item>
                        </div>
                        <div className='styled'>

                        <Accordion.Item eventKey="2" >
                           <Accordion.Header><span className='accordion-butt fs-4'>Step3:</span></Accordion.Header>
                           <Accordion.Body>
                           <li><b>Step 3</b></li>
                           <li>When added all the details click on <span className="off" style={{borderRadius: "20px"}}>Add +</span> &nbsp;Button</li>
                      
                    
                       <div >
                       <video src={Life} type="video/mp4" controls className='decrese'>  </video>
                    </div>
                    <div className="scroll-to-top">
                                    {is_visible && (
                                       <div onClick={() => this.scrollToTop()}>
                                          <img src='https://i.postimg.cc/44Ytsk8Z/top-arrow-emoj.png' alt='Go to top' />
                                       </div>
                                    )}
                                 </div>
                                 </Accordion.Body>
                                 </Accordion.Item>
                                 </div>
                                 </Accordion>
                                 <div >
                                 <video src={Life} type="video/mp4" controls className='Outsidevideo'>  </video>
                              </div>

                  
                   
                 </Container>
                
              </section>
           <Footer/>
      </div>
    )
  }
}