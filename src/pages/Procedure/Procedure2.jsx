import React, { Component } from 'react';
//import Carousel from 'react-elastic-carousel';
//import img1 from "../assets/images/img1.png";
import step1 from "../../assets/images/step1.png";
import step2 from "../../assets/images/step2.png";
import step3 from "../../assets/images/step3.png";
import step4 from "../../assets/images/step4.png";
import step5 from "../../assets/images/step5.png";
import step6 from "../../assets/images/step6.png";
import {Container, Row, Col, Button} from "react-bootstrap";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default class Procedure2 extends Component {
 
  render () {
 
    return (
        <div>
        <Header />
        <section>
          <Container>
            <div className='app_step mt-5'>
              <h5>How to add MY PLACE</h5>
              <ul className='step1'>
                 <li>You will have two options while adding any place i.e. 1. My Place 2. Public Place</li>
                 <li>1. Click on <i className='fa fa-plus'></i>  on the bottom bar.</li>
                 <li className='span_button'>
                    <Row>
                        
                        <Col md="6">
                        2. Click on <span>My Place</span><br />
                           <img src={step2} alt="Step 2" />
                        </Col>
                        <Col md="6">
                        3. A Click on <span>My Place</span>  If you are at your  business location while adding place.
                       <br /> <img src={step1} alt="Step 1" /></Col>
                                          </Row>
                 </li>
                 <li className='span_button'>
                    <Row>
                       
                        <Col md="7">
                        3. B Click <span>No I'm Not</span> on if you are at another  Xxl location during adding your place:    
                           <img src={step3} alt="Step 2" />
                        </Col>
                        <Col md="5">
                        4. First page will open and name of page will be  Place Details:
                       <br /> <img src={step4} alt="Step 1" /></Col>
                       
                    </Row>
                 </li>
                 <li>5. A. i) Tap Shop/Office/Business/Place as shown in image </li>
                 <li>
                 <Row>
                       
                        <Col md="7">
                        5. B. Fill place details form in the following manner:<br />
                           <img src={step5} alt="Step 2" />
                        </Col>
                        <Col md="5">
                        6. First page will open and name of page will be     Place Details.
                       <br /> <img src={step6} alt="Step 1" /></Col>
                       
                    </Row></li>
              </ul>
            </div>
          </Container>
         </section>     
        <Footer />
      </div>
    )
  }
}