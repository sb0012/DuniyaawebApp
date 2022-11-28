// import React, { Component } from 'react';
// //import Carousel from 'react-elastic-carousel';
// // import img1 from "../assets/images/img1.png";
// import "./login.css";
// import {Container, Row, Col, Button, Form} from "react-bootstrap";
// import Header from "../../components/Header";
// import Footer from "../../components/Footer";

// export default class Login extends Component {
 
//   render () {
 
//     return (
//         <div>
//             <Header />
//                 <section>
//                     <Container>
//                     <Row>
//                        <Col md="3"></Col>
//                             <Col md="6">
//                                 <div className='login'>
//                                     <div className='login_head'>
//                                         <h5><i className="fa fa-user"></i> Login</h5>
//                                     </div>
//                                     <div className='login_bg'>
//                                     <p>Login to access duniyaa web app</p>
//                                     <Form>
//                                     <Form.Group className="mb-3" controlId="formBasicEmail">
                                    
//                                       <Form.Control type="email" placeholder="Enter email" />
                                   
//                                     </Form.Group>
                                  
//                                     <Form.Group className="mb-3" controlId="formBasicPassword">
                                     
//                                       <Form.Control type="password" placeholder="Password" />
//                                     </Form.Group>
                                   
//                                     {/* <Button variant="primary" onClick={event =>  window.location.href='/AllPlaces'} type="submit">
//                                       Login
//                                     </Button> */}
//                                     <div className='login_btn'><a href="/AllPlaces">Login</a></div>
                                    
//                                   </Form>
//                                     </div>
//                                 </div>
//                             </Col>
//                        <Col md="3"></Col>
//                     </Row>
                   
//                     </Container>
//                 </section>
//             <Footer />
//         </div>
//     )
//   }
// }



import {useEffect} from 'react';

function Login() {

  function handleCallbackResponse(response){
      console.log("Encoded JWT ID token: "+ response.credential);
  }

  useEffect(()=>{
    /*global google */
    google.accounts.id.initialize({
      client_id: "688695007193-eiu63gqe8ns2r2em0nju01tpoiahd08s.apps.googleusercontent.com",
      callback:handleCallbackResponse
    });
    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {theme: "outline", size:"large"}
    )
  },[])
  return (
    <div className="App">
      <div id="signInDiv"></div>
    </div>
  );
}

export default Login;