import React, { useState } from 'react';
//import Carousel from 'react-elastic-carousel';
//import img1 from "../assets/images/img1.png";
import PlacedetailsStep1 from '../Procedure Step/PlacedetailsStep1';
import BusinessStep2 from '../Procedure Step/BusinessStep2';
import PlaceAvaiStep3 from '../Procedure Step/PlaceAvaiStep3';
import LOUPStep4 from '../Procedure Step/LOUPStep4';
import ImageUpStep5 from '../Procedure Step/ImageUpStep5';
import "./procedure.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
   BrowserRouter as Router,
   Route,
  // Link,
   Routes,
  // Redirect,
  useLocation,
 } from "react-router-dom";
 import { Container, Row, Col, Button,Tab, Accordion,Nav} from "react-bootstrap";

//destructuring pathname from location
//assigning location variable


export default function Procedure() {

  return (
   <div>
   <Header />           
     <Container>
         <div className=''>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
               <Col sm={2}>
                 <div className="left-tab mt-4 pt-2">
                  <Nav variant="pills" className="flex-column tab-anchor">
                  <Nav.Item>
                     <Nav.Link eventKey="first">My Place</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                     <Nav.Link eventKey="second">Helping Hands</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                     <Nav.Link eventKey="third">Photo Editor</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                     <Nav.Link eventKey="fourth">Public Place</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                     <Nav.Link eventKey="fifth">Edit Place</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                     <Nav.Link eventKey="sixth">Show Place</Nav.Link>
                  </Nav.Item>
                  </Nav>
                  </div>
               </Col>
               <Col sm={10}>
                  <Tab.Content>
                  <Tab.Pane eventKey="first" className="pt-4 mt-3">
                 
                     <div id="link2" className='app_step'><h5>Get know more about My Place</h5></div>
                     
                   {/** <Col md="6" xs="6" className='pull-right procedure'>
                        <p><a href="/Procedure1">Procedure of how to add place <i className='fa fa-angle-right'></i></a></p>
                     </Col>**/}  
                     <Tab.Container id="left-tabs-example" defaultActiveKey="step1">
                     <Row>
                      
                       <Col sm={9}>
                         <Tab.Content className='help_steps'>
                           <Tab.Pane eventKey="step1">
                          <PlacedetailsStep1/>
                           </Tab.Pane>
                           <Tab.Pane eventKey="step2">
                          <BusinessStep2/>
                           </Tab.Pane>
                           <Tab.Pane eventKey="step3">
                          <PlaceAvaiStep3/>
                           </Tab.Pane>
                           <Tab.Pane eventKey="step4">
                           <LOUPStep4/>
                           </Tab.Pane>
                           <Tab.Pane eventKey="step5">
                           <ImageUpStep5/>
                           </Tab.Pane>
                         </Tab.Content>
                       </Col>
                       <Col sm={3}>
                       <Nav variant="pills" className="flex-column tab-anchor1">
                         <Nav.Item>
                           <Nav.Link eventKey="step1">Step 1 : Place Details</Nav.Link>
                         </Nav.Item>
                         <Nav.Item>
                           <Nav.Link eventKey="step2">Step 2 : Nature of Business</Nav.Link>
                         </Nav.Item>
                         <Nav.Item>
                         <Nav.Link eventKey="step3">Step 3 : Place Availability</Nav.Link>
                       </Nav.Item>
                       <Nav.Item>
                       <Nav.Link eventKey="step4">Step 4 : List Out Your Products</Nav.Link>
                     </Nav.Item>
                     <Nav.Item>
                       <Nav.Link eventKey="step5">Step 5 : Upload Place Images</Nav.Link>
                     </Nav.Item>
                       </Nav>
                     </Col>
                     </Row>
                   </Tab.Container>
                
                  </Tab.Pane>
                  <Tab.Pane eventKey="second" className="pt-4 mt-3">
                  <Tab.Container id="left-tabs-example" defaultActiveKey="step5">
                  <Row>
                  
                    <Col sm={9}>
                      <Tab.Content>
                        <Tab.Pane eventKey="step5">
                        <div className='app_step'>
                        <div className='app_step mb-5 pb-5'>
                           <h5> How to add Help Place</h5>
                           <ul className='step1'> 
                           
                             <div id="step1">
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
                              </div>
                             
                           </ul>
                        
                        
                        </div>
                    </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="step6">
                        <div className='app_step'>
                          <ul className='step1'>
                              <div id="step2">
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
                              <li><b>Step 3</b></li>
                              <li>When added all the details click on <span class="off" style={{borderRadius: "20px"}}>Add +</span> &nbsp;Button</li>
                              </div>
                              </ul>
                              </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </Col>
                    <Col sm={3}>
                    <Nav variant="pills" className="flex-column tab-anchor1">
                      <Nav.Item>
                        <Nav.Link eventKey="step5">Step 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="step6">Step 2</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  </Row>
                </Tab.Container>
                
                
                      
                  </Tab.Pane>
                  <Tab.Pane eventKey="third" className="pt-4 mt-3">
                  <Tab.Container id="left-tabs-example" defaultActiveKey="step7">
                     <Row>
                        
                        <Col sm={9}>
                           <Tab.Content>
                           <Tab.Pane eventKey="step7">
                           <div className='app_step'>
                           <h5>Photo Editor Information</h5>
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
                            
                           </ul>
                           
                        </div>
                           </Tab.Pane>
                           <Tab.Pane eventKey="step8">
                              <div className='app_step'>
                                 <ul className='step1'>
                                 <li><b>Photo Editor Features </b>
                                 <ul>
                                    <li>Nice default and full featured customizable editor</li>
                                    <li>Has black and white theme and user can modify the theme file to customize it.</li>
                                    <li>Widely supportedd in browsers including IE10</li>
                                    <li>Option to support various display sizes.</li>
                                    <li>Allows you to use the editor features on your web pages at least over 550 * 450 sizes.</li>
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
                                 </ul>
                              </li>
                                 </ul>
                              </div>
                           </Tab.Pane>
                           </Tab.Content>
                        </Col>
                        <Col sm={3}>
                           <Nav variant="pills" className="flex-column tab-anchor1">
                           <Nav.Item>
                              <Nav.Link eventKey="step7">Photo Editor</Nav.Link>
                           </Nav.Item>
                           <Nav.Item>
                              <Nav.Link eventKey="step8">Photo Editor Feature</Nav.Link>
                           </Nav.Item>
                           </Nav>
                        </Col>
                     </Row>
                     </Tab.Container>
                 
                  </Tab.Pane>
                  {/*  Public PLACE Help page */}
                  <Tab.Pane eventKey="fourth" className="pt-4 mt-3">
                  <Tab.Container id="left-tabs-example" defaultActiveKey="step10">
                  <div className='app_step'>
                  <h5>How to add Public PLACE</h5>
                  </div>
                  <Row>                   
                    <Col sm={9}>
                      <Tab.Content>
                        <Tab.Pane eventKey="step10" id="step10">
                        <div className='app_step'>
                        
                        <ul className='step1'> 
                        <li>1. Tap on  <i className='fa fa-plus'></i> on Duniyaa Home Screen</li>
                        <li className='span_button'>3. Tap   <span>My Public Place</span> if you want to add Public Place </li>
                        <li className='span_button'>4. Tap  <span>Yes, I Am</span>                         if you are at your place while adding or Tap     <span>No, I'm Not</span>                      if you are not at the      Place which you want to be added.</li>
                        <li>5. You will go through 4 steps from here, Step 1  <span className='step_1'> 1</span>                  asks for Place Details which are below:
                           <ul>
                           <li>a)  Tap on <b>Shop/Office/Business/Place Name </b> > Enter Your Business Name.</li>
                           <li>b) Tap on <b>Place Reg. Date ( Optional )</b> > Tap on <b>Year</b> > Select your Registered Year from the list > Tap       on <b>Month</b> > Select the Month of Registration > Tap on the <b>Date</b>.</li>
                           <li className='span_button'>c) Shop/Office/Business Location Address will be automatically update if you were tap on    <span>Yes, I'm </span>you will see the text just below as Fetching current location ...  If not then Tap on <b style={{color:"#7f0c86"}}>Fetch Current Location</b></li>
                           <li>d) Tap on <b>Landmark ( Optional )</b> > Enter nearest landmark e.g. any residency, hospital, institute, transport medium, etc. to help customers to visit your place easily</li>
                           <li className='span_button'>e) After filling all the details Tap on <span >Next</span> to go for next page i. e. Step 2</li>
                           </ul>
                        </li>
                        <li>6. In step <span className='step_1'> 2</span> you will be asked the details about nature of business or Religious places or theater which are below :
                           <ul>
                              <li>a) Choose type of business or place category which suits business:</li>
   
                              <p>Tap on any one of the provided options which are called major category of your   business:
                                 <div className='category_btn1'>
                                    <p>ATM</p>
                                    <p>Theater</p>
                                    <p>Temple</p>
                                    
                                    <p>Other</p>
                                 </div>
                              </p>
                              <li>b) ii)  A page with list of subcategories is shown > Tap on any suitable subcategory or Tap on  <span className='SearchCat'>Search for Categories</span> > Enter your desired keyword for subcategory
                                 <p>Tap on the suitable result > you will be redirected to the step 2</p>
                              </li>
                              <li>c) Tap on <b>Describe your Business / Place in few words</b> > Enter more details of business / place other than you are asked to provide.</li>
                              <li>d) Tap on <b>Mobile Number</b> > Enter a valid 10 digit mobile number for contact purpose.</li>
                              {/** <li>e) Tap on <b>Email</b> > Enter a valid email address in case if you have any. If you do not have any email account leave it as blank.</li> */}
                              <li>e) Tap on <b>Business Website</b> if you have any otherwise leave it as blank.</li>
                              
                              
                           </ul>
                        </li>
                        <li>7. In step <span className='step_1'> 3</span> you will be asked the details about <span>Place Availability</span> which are below :
                           <ul>
                              <li className='span_button'>a) Tap on<span>Yes</span> if you provide 24*7 Service ( All time Available ) and Tap on  <span>No</span> if you <br />
                              do not provide 24*7 Service ( Only for limited hours daily ).</li>
                              </ul>
                            </li>  
                         </ul>
                         </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="step11" id="step1">
                        <div className='app_step'>
                        <ul className='step1'>
                        <li>
                         <ul>
                         <li>b) Setting up of Working Days :
                         <ul> <li className='span_button'><span className='on'>S</span> This type of button shows that this is the working day and </li>
                         <li><span className='off'>S</span> This button shows that this is will be the holiday.</li>
                         <li>b) Setting up of <b>Working Days :</b></li>
                         <li>You are provided the following 7 buttons which are from Sunday to Saturday :</li>
                         <li style={{display:"inline"}} className="mr-2"><span className='off'>S</span></li>
                         <li  style={{display:"inline"}} className='span_button'>
                         &nbsp;
                         <span className='on mr-2'>M</span>&nbsp;
                         <span className='on mr-2'>T</span>&nbsp;
                         <span className='on mr-2'>W</span>&nbsp;
                         <span className='on mr-2'>T</span>&nbsp;
                         <span className='on mr-2'>F</span>&nbsp;
                         <span className='on mr-2'>S</span></li>
                         <li>The above tabs showing that there is off day on Sunday as there is button like <span className='off'>S</span> and remaining days are working days as the remaining buttons are filled with inside.You can make theses buttons ON/OFF by tapping on the respective button.</li>
                         </ul>
                         <li>c) Setting up of <b>Working Hour Timings :</b>
                         <p>iii) Setting up of Working Hour Timings : These are the timings during which you open your shop in case you are retailer,these are the timings at which you open and close your service or business.</p>
                         <p>- Tap on Opening Time > Move the dial of clock at hour first > Again move the same dial to the desired minute > Select the A.M. or P.M. from the options provided at the right top corner. Or ..........................................</p>
                         <p>- Tap on Closing Time> Move the dial of clock at hour first >  Again move the same dial to the desired minute > Select the A.M. or P.M. from the options provided at the righttop corner. Or ..........................................</p>
                         </li>
                         <li>d) Setting up of <b>Lunch Hour Timings :</b>
                         <p>Lunch hour timings are the break during working timings. Let your customers know when they can visit your place as per both convenience.</p>
                         The procedure for setting up Lunch Hour Timings is same as that of used for Working Hour Timings.
                                  <ul>
                                     <li>- Tap on <b>Start Time</b> > Move the dial of clock at hour first > Again move the same dial to the desired minute > Select the A.M. or P.M. from the options provided at the right top corner. Or ...........................................</li>
                                     <li>- Tap on <b>End Time</b> > Move the dial of clock at hour first > Again move the same dial to the desired minute > Select the A.M. or P.M. from the options provided at the right top corner. Or .............................................</li>
                                     <li>-  Tap on  <input type="checkbox" className='checkbox1'/> <b>No lunch hours</b> if you do not have fixed lunch hour timings daily.</li>
                                     
                                  </ul>
                                  <li>e) Details about <b>Exchange Facility :</b>
                                  <p>In case one customer bought some stuff from you and they are found unsatisfactory on the next day, now they wish to replace the bought stuff with new stuff this is called exchange. Provide about such information whether you provide exchange facility or not and if yes on what time you avail this facility to your customers so that they will visit your place for exchange.</p>
                                  <p>The procedure for setting up Exchange Hour Timings is same as that of used for Working Hour Timings.</p>
                                  <p>Tap on <input type="checkbox" className='checkbox1'/> <b>Any time during working hours</b> if you provide exchange facility at all time.</p>
                                  </li>
                            </li>
                            <li className='span_button'>f) After filling all the details Tap on <span>Next</span> to go for next page i. e. Step 4</li>
                         </li>
                      </ul>
                           </li>
                           <li>8. In step <span className='step_1'> 4</span> you will be upload multiple photos of respective place</li>
                           <li className='span_button'>Select multiple photos and click on <span>Submit</span> button.</li>
                           <li>Below showes all selected images</li>
                           
                           
                           </ul>
                        </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </Col>
                    <Col sm={3}>
                    <Nav variant="pills" className="flex-column tab-anchor1">
                      <Nav.Item>
                        <Nav.Link eventKey="step10">
                           Step 1
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="step11">
                          Working Day's
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  </Row>
                </Tab.Container>
                  
                  </Tab.Pane>
                  <Tab.Pane eventKey="fifth" className="pt-4 mt-3" >
                  <div className='app_step mt-2'>
                  <h5>How update to edit place</h5>
                  <Tab.Container id="left-tabs-example" defaultActiveKey="step12">
                  <Row>
                    
                    <Col sm={9}>
                      <Tab.Content>
                        <Tab.Pane eventKey="step12">
                        <ul className='step1'> 
                        <li>User can see all the details which are entered in my place create section</li>
                        <li><b>Step 1</b>
                           <ul>
                              <li>a) Choose product price Visibility </li>
                              <li className=''><span className='off'>Public</span> &nbsp;<span className='off'>Only Few</span> &nbsp;<span className='off'>Hide</span>
                                 <ul>
                                    <li>i) <b>Public</b>: If user selects public then price shows publically</li>
                                    <li>i) <b>Only Few </b>: </li>
                                    <li>iii) <b>Hide</b> : User selects hide  button then price will be hide . No one can see price of that product</li>
                                 </ul>
                              </li>
                           </ul>
                        </li>
                        <li>b) Choose user current status: 
                           <ul>
                              <li className=''>
                              <span className='off'>Online</span> 
                              &nbsp;<span className='off'>Offline</span>
                                 <ul>
                                    <li>i) If user click on <span className='off'>Online</span> it shows available message</li>
                                    <li>i) If user click on <span className='off'>Offline</span> it shows 
                                    another window in that window it shows offline message that are</li>
                                    <div className='offile_msg'>
                                       <p>Select your online message</p>
                                       <li><span className='off'>On Break</span><span className='off'>Personal Time</span>....etc</li>
                                    </div>
                                 </ul>
                              </li>
                              <li>Select one of these message and it shows offline message which is selected.</li>
   
                              </ul>
                        </li>
                        </ul>
                        </Tab.Pane>
                        <Tab.Pane eventKey="step13">
                           <ul className='step1'>
                           <li><b>Step 2</b></li>
                           <li>In this step shows all the details of place, These place details are categoried in tab, These are below: </li>
                       
                           <li><b>A) In first tab place details contains</b>
                              <ul>
                                 <li>Shop Name</li>
                                 <li>Owner Name</li>
                                 <li>Reg. Dt. No.</li>
                                 <li>Address</li>
                                 <li>Fetch current location</li>
                              </ul>
                              </li>
      
                           <li><b>B) In this Nature of business tab</b>
                              <ul>
                                 <li>Category </li>
                                 <li>Subcategory</li>
                                 <li>Description of business</li>
                                 <li>Mobile No.</li>
                                 <li>Email ID</li>
                                 <li>Business Website</li>
                                 <li>Door Services</li>
                              </ul>    
                           </li>
                           <li>User edit these all the details</li>
                           <li><b>C). In Place Availability Tab :</b>
                           <p style={{marginBottom:"0"}}>In this tab user change following details as per need</p>
                              <ul>
                                 <li>Shop Service</li>
                                 <li>Working Day's</li>
                                 <li>Working Hour Timing</li>
                                 <li>Lunch Hour Timing</li>
                                 <li>Exchange Facility</li>
                                 <p style={{marginBottom:"0"}}>In this facility user can edit time of exchange facility or select <br /></p>
                                 <p style={{marginBottom:"0"}}><input type="checkbox" className='checkbox1'/> Any time during workign hours</p>
                              </ul>
                           </li>
                           
                          
                           <li><b>D). Products : </b>
                              <ul>
                                 <li>i) User can edit price visible option.</li>
                                 <li>Click on <span className='off'>Add / Edit Product List</span>
                                    <ul>
                                       <li>a) It opens one window: In this window user can add Products 
                                       <p style={{marginBottom:"0"}}>User enter</p>
                                          <ul>
                                             <li>Product Name</li>
                                             <li>Unit</li>
                                             <li>Price</li>
                                             <li>Qty</li>
                                          </ul>
                                       <p style={{marginBottom:"0"}}>and then click on submit button.
                                       </p>
                                       <p style={{marginBottom:"0"}}>If user want to add more details of product then click on <span>Add More</span> button</p>
                                       <p style={{marginBottom:"0"}}>The following details are user enter here: </p>
                                          <ul>
                                             <li>Product Brand Name</li>
                                             <li>Upload Product Image</li>
                                             <li>Product Stock</li>
                                          </ul>
                                       </li>
                                       <li>i) In this window shows all products.</li>
                                       <li>ii) User search the product</li>
                                       <li>iii) User can edit the product</li>
                                    </ul>
                                 </li>
                              </ul>
                           </li>
                           <li><b>E). In this Place Detail Tab: </b>
                              <ul>
                                 <li>In this tab shows all photos of places</li>
                                 <li>User can edit these photos.</li>
                              </ul>
                           </li>
                           <li><b>F). Review and Feedback</b>
                              <ul>
                                 <li>In this section it shows reviews and ratings of particular product ot place</li>
                                 <li>Shows all feedback of users</li>
                                 <li>User can enter feedback of that product or place.</li>
                              </ul>
                           </li>
                          
                        </ul>
                        </Tab.Pane>
                      </Tab.Content>
                    </Col>
                    <Col sm={3}>
                      <Nav variant="pills" className="flex-column tab-anchor1">
                        <Nav.Item>
                          <Nav.Link eventKey="step12">Step 1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="step13">Step 2</Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </Col>
                  </Row>
                </Tab.Container>
                     
                    
                    
               </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="sixth" className="pt-4 mt-3" >
                  <section>
                  <Container>
                     <div className='app_step'>
                        <h5>Information</h5>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="step14">
                           <Row>                             
                              <Col sm={9}>
                                 <Tab.Content>
                                 <Tab.Pane eventKey="step14">
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
                                 </ul>
                                 </Tab.Pane>
                                 <Tab.Pane eventKey="step15">
                                 <ul className='step1'>
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
                                 <li><b>Business Post:</b>
                                    <ul>
                                       <li>In this section user can see all information of various types of business. 
                                       which business are growing, Which type of business, Acjact where is the place....etc.
                                       </li>
                                       <li>All the little bit information user can get on this post.</li>
                                    </ul>
                                 </li>               
                              </ul>
                             
                                 </Tab.Pane>
                                 </Tab.Content>
                              </Col>
                              <Col sm={3}>
                              <Nav variant="pills" className="flex-column tab-anchor1">
                              <Nav.Item>
                                 <Nav.Link eventKey="step14">Newly Added Places</Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                 <Nav.Link eventKey="step15">Most Popular Places</Nav.Link>
                              </Nav.Item>
                              </Nav>
                           </Col>
                           </Row>
                           </Tab.Container>
                     
                           </div>
                        </Container>
                     </section>
                  </Tab.Pane>
                  </Tab.Content>
               </Col>
            </Row>
            </Tab.Container>
         </div>
     </Container>
     </div>
 
  )
}

