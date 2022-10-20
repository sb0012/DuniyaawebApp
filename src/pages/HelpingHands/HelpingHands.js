import React, { Component } from 'react';
import hands from "../../assets/images/hands.png";
import slider1 from "../../assets/images/slider1.jpg";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import UpcommingPost from "../../components/UpcommingPost";
// import Sample from "../../assets/images/sample.mp4";
import Life from "../../assets/images/Life.mp4";

import "./helpinghands.css";
import {Container, Row, Col, Button} from "react-bootstrap";


export default class About extends Component {
 
  render () {
    return (
        <div>
          <Header />
          
          <section id="helping_hands">
             <div className='hands_img'></div>
              <Container>
                <div className='slider_bg'>
                   <h1> With the <span>AY CONNECTS</span> we are helpig to needy 
                   peoples</h1>
                   <p>
                   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
has been the industry's standard dummy text ever since the 1500
                   </p>
                   <Button><img src={hands} alt="Add Post"/>Add Post</Button>
                </div>
              </Container>
          </section>
          <section>
            <Container>
              <div className='u_post'>
              <h2>Helped Post</h2>
              </div>
              <div className=''>
                 <Row>
                   <Col md="8">
                     <div className='image'>
                        <a href="#."><img src={slider1} alt="slider1"></img></a>
                        <div className='image_desc'>
                          <h6>Lorem ipsum</h6>
                        </div>
                     </div>
                   </Col>
                   <Col md="4">
                    <div className='image image_div'>
                    <a href="#."><img src={slider1} alt="slider1"></img>
                    </a>
                    <div className='image_desc'>
                          <h6>Lorem ipsum</h6>
                        </div>
                  </div>
                  <div className='image'>
                  <a href="#."><img src={slider1} alt="slider1"></img></a>
                  <div className='image_desc'>
                          <h6>Lorem ipsum</h6>
                        </div>
                </div>
                   </Col>
                 </Row>
              </div>
            </Container> 
          </section>
          <section>
            <Container>
               <div className='u_post'>
                  <h2>Upcomming Post</h2>
                  <UpcommingPost />
               </div>
            </Container>
          </section>
          <section>
             <Container>
               <div className='video'>
                 <h2>Volenteers helping to needy peoples</h2>
                 <video width="100%" height="500" controls>
      <source src={Life} type="video/mp4"/>
     </video>
               </div>
             </Container>
          </section>
          <Footer />
        </div>
    )
  }
}