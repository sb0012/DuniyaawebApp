import React from 'react'
import {Button,Col,Form,Tab,Row,Container} from 'react-bootstrap'
import "./addnewplace.css";

const PlaceDetails = () => {
  return (
    <div>
    
                      
    <div className='add_place_tab'>
      <span><i className='fa fa-map-marker'></i> <br /> Place Details  </span>
        <Row>
        <Col md="3"></Col>
        <Col md="6">
        <Form className="placeinfo">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Shop / Office / Business / Place Name</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
         
        </Form.Group>
      
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Place Owner Name</Form.Label>
          <Form.Control type="text" placeholder="Place Owner Name" />
        </Form.Group>
       
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Place Reg Date</Form.Label>
          <Form.Control type="date" placeholder="Place Reg Date" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Shop / Office / Business / Place Address</Form.Label>
          <Form.Control as="textarea" rows={3} />
          <Form.Text className="text-muted">
         Make sure entered address is complete, correct and it is yoyr Shop/ Office / business location address.
        </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Landmark</Form.Label>
          <Form.Control type="text" placeholder="Place Reg Date" />
        </Form.Group>
        <div className=''><a href="#."><i className="fa fa-map-marker"></i> Fetch current location</a></div>
        <Row className="place_btn">
        <Col md="6">
        <Button variant="primary" type="submit" className="opacity_class">
        <i className='fa fa-angle-left' /> Prevoius
      </Button>
        </Col>
        <Col md="6">
        <Button variant="primary" type="submit" className="pull-right">
        Next <i className='fa fa-angle-right' />
      </Button>
        </Col>
     </Row>
       
    </Form>
        </Col>
        <Col md="3"></Col>
      </Row>    
        
      
    </div>
    
    </div>

  )
}

export default PlaceDetails
