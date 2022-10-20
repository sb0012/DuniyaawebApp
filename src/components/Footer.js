import React, { Component } from 'react';
//import Carousel from 'react-elastic-carousel';
//import img1 from "../assets/images/img1.png";
//import "../../addedplace.css";
import {Container, Row, Col} from "react-bootstrap";
export default class About extends Component {
 
  render () {
 
    return (
        <div>
        <footer>
        <Container>
        <Row>
          <Col md="6">
            <div className='footer'>
            <h1>Duniyaa Web App</h1>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
            the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type 
            and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap 
            into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
            </p>
          </div>
          </Col>
          <Col md="6">
            {/* <div className='download pull-right'>
               <h5>Download an Duniyaa app on</h5>
               <a href="/PhotoeditorProcedure"><i className='fa fa-question-circle'></i> Photo Editor Help Page</a><br />
               <a href="/Procedure"><i className='fa fa-question-circle'></i> My Places Help Page</a><br />
              <a href="/PublicPlaceProcedure"><i className='fa fa-question-circle'></i> Public Place Help Page</a><br />
              <a href="/PhotoEditor"><i className='fa fa-question-circle'></i> Photo Editor</a><br />
              <a href="/HelpingHandProcedure"><i className='fa fa-question-circle'></i> Helping Hand Procedure</a><br />
              // <a href="/EditPlaceProcedure"><i className='fa fa-question-circle'></i> Edit Place Help Page</a>
              <a href="/ShowPlaceProcedure"><i className='fa fa-question-circle'></i>Show Place Procedure</a><br/>
              <a href="/Procedure1"><i className='fa fa-question-circle'></i>Add My Place</a>
            </div> */}
          </Col>
        </Row>
        
        </Container>
        </footer>
      </div>
    )
  }
}