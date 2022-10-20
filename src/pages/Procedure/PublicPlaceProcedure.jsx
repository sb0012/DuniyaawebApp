import React, { Component } from 'react';
//import Carousel from 'react-elastic-carousel';
import product from "../../assets/images/product.png";
import voice from "../../assets/images/voice.png";
import doneproduct from "../../assets/images/doneproduct.png";
import "./procedure.css";
import Life from "../../assets/images/Life.mp4";

//import {Navbar, Nav, NavDropdown, Container, Row, Col, Button} from "react-bootstrap";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Container,Accordion } from 'react-bootstrap';

export default class PublicPlaceProcedure extends Component {
 
  render () {
 
    return (
        <div>
           <Header />
              <section>
                 <Container>
                 <div className='help_breadbrumb pt-3 mt-4'>
                  <Container>
                     <h5 className='text-center pb-3 fs-6 fw-bold'>How to add Public PLACE</h5>
                  </Container>
               </div>
                 <Accordion
                     variant="flat" className='bg-none'>
                     <div className='styled'>

                        <Accordion.Item eventKey="0" >
                           <Accordion.Header className="Hovers"><span className='accordion-butt fs-4'><span className='fs-4 me-2'>Step1:</span>  Place Details</span></Accordion.Header>
                           <Accordion.Body >
                              <div className='accordion'></div>
                    <div className='app_step mt-5'>
                     {/*<h5>How to add Public PLACE</h5>*/}
                       <ul className='step1'> 
                          <li>1. Tap on  <i className='fa fa-plus'></i> on Duniyaa Home Screen</li>
                          <li className='span_button'>3. Tap   <span>My Public Place</span> if you want to add Public Place </li>
                          <li className='span_button'>4. Tap  <span>Yes, I Am</span>                         if you are at your place while adding or Tap     <span>No, I'm Not</span>                      if you are not at the      Place which you want to be added.</li>
                          <li>5. You will go through 4 steps from here, Step 1  <span className='step_1'> 1</span>                  asks for Place Details which are below:
                             <ul>
                             <li>a)  Tap on <b>Shop/Office/Business/Place Name</b> >  Enter Your Business Name.</li>
                             <li>b) Tap on <b>Place Reg. Date ( Optional )</b> > Tap on <b>Year</b> > Select your Registered Year from the list > Tap       on <b>Month</b> > Select the Month of Registration > Tap on the <b>Date</b>.</li>
                             <li className='span_button'>c) Shop/Office/Business Location Address will be automatically update if you were tap on    <span>Yes, I'm </span>you will see the text just below as Fetching current location ...  If not then Tap on <b style={{color:"#7f0c86"}}>Fetch Current Location</b></li>
                             <li>d) Tap on <b>Landmark ( Optional )</b> > Enter nearest landmark e.g. any residency, hospital, institute, transport medium, etc. to help customers to visit your place easily</li>
                             <li className='span_button'>e) After filling all the details Tap on <span >Next</span> to go for next page i. e. Step 2</li>
                             </ul>
                          </li>
                          <div >
                                       <video src={Life} type="video/mp4" controls className='decrese'>  </video>
                                    </div>
                                    </ul>
                                 </div>
                            
                           </Accordion.Body>
                        </Accordion.Item>
                     </div>

                     <div className='styled'>

                     <Accordion.Item eventKey="2" c>
                        <Accordion.Header><span className='accordion-butt fs-4'><span className='fs-4 me-2'>Step2:</span>Nature Of Business</span></Accordion.Header>
                        <Accordion.Body>
                           <div className='accordion'>
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
                        <div >
                        <video src={Life} type="video/mp4" controls className='decrese'> watch now</video>
                     </div>
                  </div>
               </Accordion.Body>
            </Accordion.Item>
         </div>
         <div className='styled'>
         <Accordion.Item eventKey="3">
            <Accordion.Header><span className='accordion-butt fs-4'><span className='fs-4 me-2'>Step3:</span>Place Availability</span></Accordion.Header>
            <Accordion.Body className='mb-5'>
               <div className='accordion'>
                        <li>7. In step <span className='step_1'> 3</span> you will be asked the details about <span>Place Availability</span> which are below :
                           <ul>
                              <li className='span_button'>a) Tap on<span>Yes</span> if you provide 24*7 Service ( All time Available ) and Tap on  <span>No</span> if you <br />
                              do not provide 24*7 Service ( Only for limited hours daily ).</li>
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
                        <div >
                        <video src={Life} type="video/mp4" controls className='decrese'> watch now</video>
                     </div>
                  </div>
               </Accordion.Body>
            </Accordion.Item>
         </div>

         <div className='styled'>
                        <Accordion.Item eventKey="4">
                           <Accordion.Header><span className='accordion-butt fs-4'><span className='fs-4 me-2'>Step4:</span>Upload Place Images</span></Accordion.Header>
                           <Accordion.Body>
                              <div className='accordion'></div>
                        <li>8. In step <span className='step_1'> 4</span> you will be upload multiple photos of respective place</li>
                        <li className='span_button'>Select multiple photos and click on <span>Submit</span> button.</li>
                        <li>Below showes all selected images</li>
                        
                        <div >
                        <video src={Life} type="video/mp4" controls className='decrese'> watch now</video>
                     </div>
                      
                       </Accordion.Body>
                       </Accordion.Item>
                       </div>
                       </Accordion>
                       <div >
                       <div >
                       <video src={Life} type="video/mp4" controls className='Outsidevideo'>  </video>
                    </div>
                    </div>
                 </Container>
              </section>
           <Footer />
      </div>
    )
  }
}