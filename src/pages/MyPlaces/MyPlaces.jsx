import React, { Component } from 'react';
//import Carousel from 'react-elastic-carousel';
import map from "../../assets/images/map.gif";
import "./myplaces.css";
import {Container, Row, Col, Button} from "react-bootstrap";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default class MyPlaces extends Component {
 
  render () {
 
    return (
        <div>
           <Header />
            {/*        <div className='add_bg'>
             <Container>
           <div className='add_title'>
                <Row> 
                  <Col md="8">
                    <h1>Add Place</h1>
                  </Col>
                  <Col md="4">
                    <h6><span>Add Place</span> / Upload Place Images</h6>
                  </Col>
                </Row>
                   
                </div>
             </Container>
             </div>*/} 
    
              <div>
                 <Container>
                   <div className='place_info'>
                      <img src={map} alt="gif"></img>
                    {/*  <i className='fa fa-map-marker'></i> */} 
                    <h4>My Places <a href='/ShowPlaceProcedure'><i className='fa fa-question-circle'></i></a></h4>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five</p>
                   </div>
                    <div className='Muti_places'>
                    <div class="tiles">
                    <Row>
                        <Col md="3">
                        <a class="tile" href="#">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/216995/1.jpg" />
                        <div class="details">
                        <span class="title">Lorem Ipsum Dolor</span>
                        <span class="info">Quisque vel felis lectus donec vitae dapibus magna</span>
                    </div>
                   
                    </a>
                    <h6>Automobile</h6>
                        </Col>
                        <Col md="3"> <a class="tile" href="#"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/216995/2.jpg" />
                        <div class="details"><span class="title">Lorem Ipsum Dolor</span><span class="info">Quisque vel felis lectus donec vitae dapibus magna</span>
                        </div>
                    </a><h6>Jewellery Shop</h6></Col>
                        <Col md="3"> <a class="tile" href="#"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/216995/3.jpg" />
                        <div class="details"><span class="title">Lorem Ipsum Dolor</span><span class="info">Quisque vel felis lectus donec vitae dapibus magna</span>
                        </div>
                    </a><h6>Uphar Bakery</h6></Col>
                        <Col md="3"> <a class="tile" href="#"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/216995/4.jpg" />
                        <div class="details"><span class="title">Lorem Ipsum Dolor</span><span class="info">Quisque vel felis lectus donec vitae dapibus magna</span>
                        </div>
                    </a>Season Shop</Col>
                    </Row>
                    <Row>
                    <Col md="3">
                    <a class="tile" href="#">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/216995/1.jpg" />
                    <div class="details">
                    <span class="title">Lorem Ipsum Dolor</span>
                    <span class="info">Quisque vel felis lectus donec vitae dapibus magna</span>
                </div>
               
                </a>
                <h6>Automobile</h6>
                    </Col>
                    <Col md="3"> <a class="tile" href="#"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/216995/2.jpg" />
                    <div class="details"><span class="title">Lorem Ipsum Dolor</span><span class="info">Quisque vel felis lectus donec vitae dapibus magna</span>
                    </div>
                </a><h6>Jewellery Shop</h6></Col>
                    <Col md="3"> <a class="tile" href="#"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/216995/3.jpg" />
                    <div class="details"><span class="title">Lorem Ipsum Dolor</span><span class="info">Quisque vel felis lectus donec vitae dapibus magna</span>
                    </div>
                </a><h6>Uphar Bakery</h6></Col>
                    <Col md="3"> <a class="tile" href="#"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/216995/4.jpg" />
                    <div class="details"><span class="title">Lorem Ipsum Dolor</span><span class="info">Quisque vel felis lectus donec vitae dapibus magna</span>
                    </div>
                </a>Season Shop</Col>
                </Row>
                <Row>
                <Col md="3">
                <a class="tile" href="#">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/216995/1.jpg" />
                <div class="details">
                <span class="title">Lorem Ipsum Dolor</span>
                <span class="info">Quisque vel felis lectus donec vitae dapibus magna</span>
            </div>
           
            </a>
            <h6>Automobile</h6>
                </Col>
                <Col md="3"> <a class="tile" href="#"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/216995/2.jpg" />
                <div class="details"><span class="title">Lorem Ipsum Dolor</span><span class="info">Quisque vel felis lectus donec vitae dapibus magna</span>
                </div>
            </a><h6>Jewellery Shop</h6></Col>
                <Col md="3"> <a class="tile" href="#"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/216995/3.jpg" />
                <div class="details"><span class="title">Lorem Ipsum Dolor</span><span class="info">Quisque vel felis lectus donec vitae dapibus magna</span>
                </div>
            </a><h6>Uphar Bakery</h6></Col>
                <Col md="3"> <a class="tile" href="#"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/216995/4.jpg" />
                <div class="details"><span class="title">Lorem Ipsum Dolor</span><span class="info">Quisque vel felis lectus donec vitae dapibus magna</span>
                </div>
            </a>Season Shop</Col>
            </Row>
                    </div>
                    </div>
                 </Container>
              </div>
           <Footer />
        </div>
    )
  }
}