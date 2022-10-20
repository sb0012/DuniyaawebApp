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
import Life from "../../assets/images/Life.mp4";


export default class PhotoeditorProcedure extends Component {
 
  render () {
 
    return (
        <div>
           <Header />
              <section>
                 <Container>
                 <div className='help_breadbrumb pt-3 mt-4'>
                  <Container>
                     <h6 className='text-center pb-3 fs-6 fw-bold'> Photo Editor Information</h6>
                  </Container>
               </div>
                 <Accordion
                     variant="flat" className='bg-none'>
                     <div className='styled'>

                        <Accordion.Item eventKey="0" >
                           <Accordion.Header className="Hovers"><span className='accordion-butt fs-4'><span className='fs-4 me-2'>Step1:</span></span></Accordion.Header>
                           <Accordion.Body >
                              <div className='accordion'>
                    <div className='app_step mt-5'>
                       {/* <h5>Photo Editor Information</h5> */}
                       <ul className='step1'> 
                          <li>In this section user can create business post. In this post user can show own business details.</li>
                          <li>In This business details user can show: Photo, Business name, Address, Mobile name, Email ID</li>
                          <li>In this post user can put there own ideas to design post in a good way.</li>              
                          <li>In this post LL are features are available that useful to making post.</li>
                          <li>User can manipulate business post using this features: Crop, Flip, Rotation, Drawing, Shap, Icon, Text, Mask Filter, Image Filter</li>
                          <li>And some image functions are there :
                          <ul>
                            <li>Dwonload</li>
                            <li>Image load</li>
                            <li>Undo</li>
                            <li>Redo</li>
                            <li>Reset</li>
                            <li>Delete Object(Shape, Line, Mask Image)</li>
                          </ul>
                        </li>
                        <li>User can design post using some extra features that are: Greyscale, Noise, Emboss, Pixlate, Depia, Blend-Righten
                        , Blend-Deff, Invert......etc.</li>
                        <li>USer easily apply size and design of post.</li>
                        <li><b>Photo Editor Features </b></li>
                           <ul>
                              <li>Nice default and full featured customizable editor</li>
                              <li>Has black and white theme and user can modify the theme file to customize it.</li>
                              <li>Widely supportedd in browsers including IE10</li>
                              <li>Option to support various display sizes.</li>
                              <li>Allows you to use the editor features on your web pages at least over 550 * 450 sizes.</li>
                              </ul>
                              </ul>
                              <div >
                                    <video src={Life} type="video/mp4" controls className='decrese'> watch now</video>
                                 </div>
                              </div>
                              </div>
                              </Accordion.Body>
                           </Accordion.Item>
                        </div>

                        <div className='styled'>

                        <Accordion.Item eventKey="2" c>
                           <Accordion.Header><span className='accordion-butt fs-4'><span className='fs-4 me-2'>Step2:</span></span></Accordion.Header>
                           <Accordion.Body>
                              <div className='accordion'>
                              <li><b>Step 1</b>
                              <ul className='symbols'>
                                 <li>a) Upload the image: <br />
                                 -Click on <span className='load_btn'>Load</span> Button and select image file. When uploaded image                                  
                                 </li>
                                <li><i className='fa fa-search-plus'></i> : Using this icon user can zooming image in particaular size.</li>
                                <li><i className='fa fa-search-minus'></i>: Using this icon user can minimize the image and can see image very clearly</li>
                                <li><i className='fa fa-hand-o-up'></i>: Using this icon user can replace arrow icon to hand symbol. </li>
                                <li><i className='fa fa-history'></i>: Using this history icon user designed data will be stored here like</li>
                                   <ul style={{marginLeft:"26px"}}>
                                        <li>If user taken text on image then text stored here.</li>
                                        <li>And also shape, Color, Underline, Italic, Icons.</li>
                                   </ul>
                                   <li><i className='fa fa-undo'></i>: Undo the last document editing action.</li>                            
                                   <li><i className='fa fa-repeat'></i>: Redo the last undone document editing action.</li>
                                   <li><i className='fa fa-retweet'></i>: Using this reset icon, If user whatever he designed that design suppose incorrect then user reset that image. That means: The design will be cleared whatever user designed.</li>
                                   <li><i className='fa fa-trash-o'></i>: Using this icon user delete image and design.</li>
                                   <li><i className='fa fa-trash'></i>: Using this icon user delete entire and image in single click.</li>
                              </ul></li>
                              <div >
                                    <video src={Life} type="video/mp4" controls className='decrese'> watch now</video>
                                 </div>
                              </div>
                           </Accordion.Body>
                        </Accordion.Item>
                     </div>

                     <div className='styled'>
                        <Accordion.Item eventKey="3">
                           <Accordion.Header><span className='accordion-butt fs-4'><span className='fs-4 me-2'>Step3:</span></span></Accordion.Header>
                           <Accordion.Body className='mb-5'>
                              <div className='accordion'>
                              <li><b>Step 2:</b>
                                 <ul>
                                    <li>Bottom of image there are multipal features: 
                                       <ul>
                                           <li><b style={{color:"#7f0c86"}}>1) Text :</b> If user click on text icon there are multipal options are there: 
                                              <ul className='symbols'>
                                                 <li><i className='fa fa fa-bold'></i> : Using this icon user can bold the text.</li>
                                                 <li><i className='fa fa fa-italic'></i> : Using this icon user can apply italic style to font</li>
                                                 <li><i className='fa fa fa-underline'></i> : Using this icon user can apply underline style to font</li>
                                                 <li><i className='fa fa-align-left'></i> : Using this icon user can move text to left side</li>
                                                 <li><i className='fa fa-align-right'></i> : Using this icon user can move text to right side</li>
                                                 <li><i className='fa fa-align-center'></i> : Using this icon user can align text to center</li>
                                                 <li><i className='fa fa-circle'></i> : Using this icon user can select color to text</li>
                                              </ul>
                                           </li>
                                           <li><b style={{color:"#7f0c86"}}>2) Filter :</b> If user click on this icon there are multipal features are below
                                               
                                               <ul>
                                                   <li>Greyscale, invert, sepia, blur using this feaures user can change image respectivally that design option</li>
                                                   <li><b>1.Remove White :</b> Using this user remove white space to image</li>
                                                   <li><b>2. Brightness : </b> Using this feature user can change brightness of image.</li>
                                                   <li><b>3.Noise :</b> Using this feature user can change appreance of undesired traces & variations in the brightness or color of your image.
                                                   <li><b>4. Pixlet :</b> Using this icon ......</li>
                                                   </li>
                                                   <li><b>Color Filter : </b> Using this icon user can change color of image like black and white</li>
                                                   <li>Using this Tint, Multiply and blend three colors user can apply on image and design image beautifully.</li>
                                               </ul>
                                           </li>
                                           <li><b style={{color:"#7f0c86"}}>Crop: </b>
                                               <ul className='symbols'>
                                                  <li><i class="fa fa-crop" aria-hidden="true"></i> : Using crop tool user can crop the image in a particular sizes and user can apply size customizabally</li>
                                                  <li><i className='fa fa-circle-thin'></i> : In this section user can choose shape for ex. Rectangle, Circle and Triangle</li>
                                                  <li><i className="fa fa-square-o"></i> : And also apply strock to image and fill color to image</li>
                                               </ul>
                                           </li>
                                           <li><b style={{color:"#7f0c86"}}>Icons: </b>
                                               <ul>
                                                   <li>Using this icons user can select icons and put on image like arrow, star, polygon, location, heart and bubble.</li>
                                                   <li>In this section user can take custom icons.</li>
                                                   <li>Color: Using color option user can change color of icons.</li>
                                               </ul>
                                           </li>
                                       </ul>
                                    </li>
                                 </ul>
                              </li>
                              <li>On top of right side corner there is a download button using that button user can download button</li>
                              <div >
                              <video src={Life} type="video/mp4" controls className='decrese'> watch now</video>
                           </div>
                           
                              {/* </ul> */}
                        {/* </li> */}
                       {/* </ul> */}
                       </div>

                              </Accordion.Body>
                              </Accordion.Item>
                              </div>
                              </Accordion>
                              <div >
                                 <video src={Life} type="video/mp4" controls className='Outsidevideo'>  </video>
                              </div>
                    {/* </div> */}
                 </Container>
              </section>
          <Footer/>
      </div>
    )
  }
}