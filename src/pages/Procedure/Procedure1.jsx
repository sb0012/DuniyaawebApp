import React, { Component } from 'react';
//import Carousel from 'react-elastic-carousel';
import product from "../../assets/images/product.png";
import voice from "../../assets/images/voice.png";
import Life from "../../assets/images/Life.mp4";
import doneproduct from "../../assets/images/doneproduct.png";
import "./procedure.css";
//import {Navbar, Nav, NavDropdown, Container, Row, Col, Button} from "react-bootstrap";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Container, Accordion } from 'react-bootstrap';
import './Procedure1.css'


export default class Procedure1 extends Component {
   constructor(props) {
      super(props);
      this.state = {
         is_visible: false,
      };
   }
   componentDidMount() {
      var scrollComponent = this;
      document.addEventListener("scroll", function (e) {
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
   render() {
      const { is_visible } = this.state;
      return (
         <div>

            <Header />
            <section>
               <div className='help_breadbrumb pt-3 mt-4'>
                  <Container>
                     <h6 className='text-center pb-3 fs-6 fw-bold'><a href="/Procedure">Information About My Place</a> / Procedure of My Place</h6>
                  </Container>
               </div>
               <Container  >


                  <Accordion
                     variant="flat" className='bg-none'>
                     <div className='styled'>

                        <Accordion.Item eventKey="0" >
                           <Accordion.Header className="Hovers"><span className='accordion-butt fs-4'><span className='fs-4 me-2'>Step1:</span>  Place Details</span></Accordion.Header>
                           <Accordion.Body >
                              <div className='accordion'>
                                 <div className='app_step mt-3 mb-5 pb-5'>
                                    <h5> How to add MY PLACE</h5>
                                    <ul className='step1'>
                                       <li>1. Tap on  <i className='fa fa-plus'></i> on Duniyaa Home Screen</li>
                                       <li>2. Tap  <span>+ Add Place </span> from the list shown in the bottom drawer.</li>
                                       <li className='span_button'>3. Tap   <span>My Place</span> if you want to add your own place or Tap  <span>My Place</span> if you want to add any     Other place.</li>
                                       <li className='span_button'>4. Tap  <span>Yes, I Am</span>                         if you are at your place while adding or Tap     <span>No, I'm Not</span>                      if you are not at the      Place which you want to be added.</li>
                                       <li>5. You will go through 5 steps from here, Step 1  <span className='step_1'> 1</span>                  asks for Place Details which are below:
                                          <ul className='Space'>
                                             <li>a)  Tap on <b>Shop/Office/Business/Place Name</b> >  Enter Your Business Name.</li>
                                             <li>b) Tap on <b>Place owner name</b> > Enter Place Owner Name.</li>
                                             <li>c) Tap on <b>Place Reg. Date ( Optional )</b> > Tap on <b>Year</b> > Select your Registered Year from the list > Tap       on <b>Month</b> > Select the Month of Registration > Tap on the <b>Date</b>.</li>
                                             <li className='span_button'>Shop/Office/Business Location Address will be automatically update if you were tap on    <span>Yes, I'm </span>you will see the text just below as Fetching current location ...  If not then Tap on <b style={{ color: "#7f0c86" }}>Fetch Current Location</b></li>
                                             <li>d) Tap on <b>Landmark ( Optional )</b> > Enter nearest landmark e.g. any residency, hospital, institute, transport medium, etc. to help customers to visit your place easily</li>
                                             <li className='span_button'>e) After filling all the details Tap on <span >Next</span> to go for next page i. e. Step 2</li>
                                          </ul>
                                       </li>
                                    </ul>
                                    <div >
                                       <video src={Life} type="video/mp4" controls className='decrese'>  </video>
                                    </div>

                                 </div>
                              </div>
                           </Accordion.Body>
                        </Accordion.Item>
                     </div>

                     <div className='styled'>

                        <Accordion.Item eventKey="2" c>
                           <Accordion.Header><span className='accordion-butt fs-4'><span className='fs-4 me-2'>Step2:</span>Nature Of Business</span></Accordion.Header>
                           <Accordion.Body>
                              <div className='accordion'>
                                 <li>6. In step <span className='step_1'> 2</span> you will be asked the details about nature of your business which are below :
                                    <ul className='Space'>
                                       <li>a) Choose your type of business or place category which suits your business:</li>

                                       <p>Tap on any one of the provided options which are called major category of your   business:
                                          <div className='category_btn1'>
                                             <p>Shop</p>
                                             <p>Service</p>
                                             <p>Self Employment</p>
                                             <p>Factory / Mfg</p>
                                             <p>Other</p>
                                          </div>
                                       </p>
                                       <li>b) ii)  A page with list of subcategories is shown > Tap on any suitable subcategory or Tap on  <span className='SearchCat'>Search for Categories</span> > Enter your desired keyword for subcategory
                                          <p>Tap on the suitable result > you will be redirected to the step 2</p>
                                       </li>
                                       <li>c) Tap on <b>Describe your Business / Place in few words</b> > Enter more details of your business / place other than you are asked to provide.</li>
                                       <li>d) Tap on <b>Mobile Number</b> > Enter a valid 10 digit mobile number for contact purpose.</li>
                                       <li>e) Tap on <b>Email</b> > Enter a valid email address in case if you have any. If you do not have any email account leave it as blank.</li>
                                       <li>f) Tap on <b>Business Website</b> if you have any otherwise leave it as blank.</li>
                                       <li className='span_button'>g) Answer to the question <b>Do you provide Door Service ?</b><br />
                                          Tap on <span>Yes</span> if you provide Door Service i.e. Home Delivery.<br />
                                          Tap on   <span>No</span> if you do not provide Door Service i. e. Home Delivery.</li>

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
                                    <ul className='Space'>
                                       <li className='span_button'>a) Tap on<span>Yes</span> if you provide 24*7 Service ( All time Available ) and Tap on  <span>No</span> if you <br />
                                          do not provide 24*7 Service ( Only for limited hours daily ).</li>
                                       <li>b) Setting up of Working Days :
                                          <ul> <li className='span_button'><span className='on'>S</span> This type of button shows that this is the working day and </li>
                                             <li><span className='off'>S</span> This button shows that this is will be the holiday.</li>
                                             <li>b) Setting up of <b>Working Days :</b></li>
                                             <li>You are provided the following 7 buttons which are from Sunday to Saturday :</li>
                                             <li style={{ display: "inline" }} className="mr-2"><span className='off'>S</span></li>
                                             <li style={{ display: "inline" }} className='span_button'>
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
                                                <li>-  Tap on  <input type="checkbox" className='checkbox1' /> <b>No lunch hours</b> if you do not have fixed lunch hour timings daily.</li>

                                             </ul>
                                             <li>Details about <b>Exchange Facility :</b>
                                                <p>In case one customer bought some stuff from you and they are found unsatisfactory on the next day, now they wish to replace the bought stuff with new stuff this is called exchange. Provide about such information whether you provide exchange facility or not and if yes on what time you avail this facility to your customers so that they will visit your place for exchange.</p>
                                                <p>The procedure for setting up Exchange Hour Timings is same as that of used for Working Hour Timings.</p>
                                                <p>Tap on <input type="checkbox" className='checkbox1' /> <b>Any time during working hours</b> if you provide exchange facility at all time.</p>
                                             </li>
                                          </li>
                                          <li className='span_button'>e) After filling all the details Tap on <span>Next</span> to go for next page i. e. Step 4</li>
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
                              <div className='accordion'>
                                 <li>8. In step <span className='step_1'> 4</span> you will be asked to add or List Out Your Products as below :
                                    <p className='mb-0'>You will have 3 ways to add products as below :</p>
                                    <div style={{ textAlign: "center" }}><img src={product} alt="product" /></div>
                                    <p className='span_button' style={{ borderRadius: "unset" }}>The products are showed in the list on the basis of selection of your subcategory of your business <br />as default under <span>Select From List</span></p>
                                    <h3>How to add products with +Add Own ?</h3>
                                    <ul className='Space'>
                                       <li>Tap On. <span className='off' style={{ borderRadius: "20px" }}>+ Add Own</span></li>
                                       <li>-Next Page will open and fill under title Add New Product.</li>
                                       <li>-Tap on <b style={{ color: "#b5b1b1" }}>Enter Product Name.</b></li>
                                       <li>-Tap on <b style={{ color: "#b5b1b1" }}> Unit </b> > Tap on desired unit related to product</li>
                                       <li>-Tap on <b style={{ color: "#b5b1b1" }}>Price</b> > Enter the desired price.</li>
                                       <li>-Tap on <span>Change Quantity</span> in case you want to change the quantity for selected price and  product.</li>
                                       <li className='span_button'>After filling all the product details Tap on    <span>Add Product +</span></li>
                                    </ul>
                                    <h3>How to add products with Search ?</h3>
                                    <ul className='Space'>
                                       <li>Tap On. <span className='off' style={{ borderRadius: "20px" }}>+ Add Search</span></li>
                                       <li>-A new page will open.</li>
                                       <li>Tap on <span className='off' style={{ borderRadius: "20px" }}>Search For Products</span> to search your desired product. Or</li>
                                       <li className='voice'>-Tap on <img src={voice} alt="Voice Recognition"></img> to search the product with voice which will enable for 6-7 seconds.</li>
                                       <li>-Speak the Product name near the mic</li>
                                       <li>-Select the Desired Product from result and make changes as described in + Add Own if  needed.</li>
                                       <li className='span_button'>Tap on <span>Done</span> available at the right top corner of the screen.</li>
                                       <li>After adding a product you will see the count of added products on the top of</li>
                                       <p className="add_prdct">You've added 5 products</p>
                                       <div style={{ textAlign: "left" }}><img src={product} alt="product" /></div>
                                    </ul>
                                    <br />
                                    <h3>How to See the Added Products List ?</h3>
                                    <ul className='Space'>
                                       <li>-Tap on the count of the products to see the list of products added currently</li>
                                       <li>-The list will appear at the bottom of your screen like below :</li>
                                       <li className='imgcenter'><img src={doneproduct} alt="done product" ></img></li>
                                       <li>-Tap on Product Name to make any changes if needed.</li>
                                       <li>-Tap on Change Quantity and Change Unit to make any changes if needed.</li>
                                       <li className='span_button'>Tap on <i className="fa fa-times"></i> in case you want to delete any added product.     </li>
                                       <li className='span_button'>Tap on <span style={{ borderRadius: "unset" }}>Done</span> when all the selected products are ok with their respective details.
                                          <p>Do this step still all products are to be added successfully.</p></li>
                                       <li className='span_button'> After filling all the details Tap on  <span>Next </span>to go for next page i. e. Step 5</li>
                                    </ul>
                                 </li>
                                 <div >
                                    <video src={Life} type="video/mp4" controls className='decrese'> watch now</video>
                                 </div>




                                 <li>9. Step <span className='step_1'> 5</span>  will update after successful implementation of photo editor.</li>

                                 <p></p>
                                 <div className="scroll-to-top">
                                    {is_visible && (
                                       <div onClick={() => this.scrollToTop()}>
                                          <img src='https://i.postimg.cc/44Ytsk8Z/top-arrow-emoj.png' alt='Go to top' />
                                       </div>
                                    )}
                                 </div>
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