import React, { Component } from 'react';
//import Carousel from 'react-elastic-carousel';
import product from "../../assets/images/product.png";
import voice from "../../assets/images/voice.png";
import doneproduct from "../../assets/images/doneproduct.png";
import "./procedure.css";
//import {Navbar, Nav, NavDropdown, Container, Row, Col, Button} from "react-bootstrap";

import { Container } from 'react-bootstrap';

export default class EditPlaceProcedure extends Component {
 
  render () {
 
    return (
        <div>
           {/* Edit Place in My Places Help Page */}
              <section>
                 <Container>
                    <div className='app_step mt-2'>
                       <h5>How update to edit place</h5>
                       <ul className='step1'> 
                          <li>User can see all the details which are entered in my place create section</li>
                          <li><b>Step 1</b>
                            <ul>
                               <li>a) Choose product price Visibility </li>
                               <li className=''><span className='off'>Public</span> &nbsp;<span className='off'>Only Few</span> &nbsp;<span className='off'>Hide</span>
                                  <ul>
                                     <li>i) <b>Public</b>: If user selects public then price shows publically</li>
                                     <li>i) <b>Only Few </b>: </li>
                                     <li>iii) <b>Hide</b>: User selects hide  button then price will be hide . No one can see price of that product</li>
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
                      
                    </div>
                 </Container>
              </section>
           
      </div>
    )
  }
}