import React,{useState} from "react";
import PropTypes from "prop-types";
 import { makeStyles, withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Axios from "axios";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Check from "@material-ui/icons/Check";
import SettingsIcon from "@material-ui/icons/Settings";
import Map from "@material-ui/icons/Map";
import Place from "@material-ui/icons/Place";
import BusinessCenter from "@material-ui/icons/BusinessCenter";
// import GroupAddIcon from "@material-ui/icons/GroupAdd";
// import AccountBoxIcon from "@material-ui/icons/AccountBox";
// import VideoLabelIcon from "@material-ui/icons/VideoLabel";
import PhotoLibrary from "@material-ui/icons/PhotoLibrary";
import StepConnector from "@material-ui/core/StepConnector";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
//import ConfirmationNumberIcon from "@material-ui/icons/ConfirmationNumber";
import {Tabs, Tab, Container, Row, Col,Form} from "react-bootstrap";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./styles.css";

const QontoConnector = withStyles({
  alternativeLabel: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)"
  },
  active: {
    "& $line": {
      borderColor: "#784af4"
    }
  },
  completed: {
    "& $line": {
      borderColor: "#784af4"
    }
  },
  line: {
    borderColor: "#eaeaf0",
    borderTopWidth: 3,
    borderRadius: 1
  }
})(StepConnector);

const useQontoStepIconStyles = makeStyles({
  root: {
    color: "#eaeaf0",
    display: "flex",
    height: 22,
    alignItems: "center"
  },
  active: {
    color: "#784af4"
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "currentColor"
  },
  completed: {
    color: "#784af4",
    Index: 1,
    fontSize: 18
  }
});

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active
      })}
    >
      {completed ? (
        <Check className={classes.completed} />
      ) : (
        <div className={classes.circle} />
      )}
    </div>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool
};

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22
  },
  active: {
    "& $line": {
      backgroundImage:
        "linear-gradient(265deg, rgba(30,111,154,1) 0%, rgba(66,134,169,1) 100%)"
    }
  },
  completed: {
    "& $line": {
      backgroundImage:
        "linear-gradient(0deg, rgba(245,67,67,1) 0%, rgba(38,243,50,1) 100%);"
    }
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: "#7f0c86",
    borderRadius: 1
  }
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center"
  },
  active: {
    backgroundImage:
      "radial-gradient(circle, rgba(245,67,67,1) 0%, rgba(107,255,255,1) 47%, rgba(38,243,50,1) 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)"
  },
  completed: {
    backgroundImage:
      "linear-gradient(-145deg, rgba(30,111,154,1) 0%, rgba(243,149,38,1) 100%)"
  }
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <Map />,
    2: <BusinessCenter />,
    3: <Place />,
    4: <PhotoLibrary />
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node
};

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  button: {
    marginRight: theme.spacing(1)
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  }
}));

function getSteps() {
  return [
    "Place Details",
    "Nature of Business",
    "Place Avilaibility",
    "Upload Place Images"
  ];
}


function GetStepContent(step) {

  const [showText, setShowText] = useState(false);
  const onClick = () => setShowText(true);
  
  const [placename, setPlaceName] = useState("");
const [ownername, setOwnerName] = useState("");

const addPlace = () =>{
  console.log(placename);
  console.log(ownername);
  Axios.post('3.109.26.2:8080//api/v{version}/places/addPlace/create', {placename:placename, ownername:ownername}).then(()=>{
      console.log('success');
  });
};

  switch (step) {
    case 0:
      return <div className='demo'>
          <Row>
             <Col md="3"></Col>
             <Col md="6">
             
             <Container>
                 <Form.Group className="mb-3" controlId="validationCustom01">
                   <Form.Label>Shop / Office / Business / Place Name</Form.Label>
                   <Form.Control required type="text" placeholder="Enter Place Name" />
                  
                 </Form.Group>
               
                 <Form.Group className="mb-3" controlId="formBasicPassword">
                   <Form.Label>Place Owner Name</Form.Label>
                   <Form.Control required type="text" placeholder="Place Owner Name" />
                 </Form.Group>
               
                 <Form.Group className="mb-3" controlId="formBasicPassword">
                   <Form.Label>Place Reg Date</Form.Label>
                   <Form.Control required type="date" placeholder="Place Reg Date" />
                 </Form.Group>

                 <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                   <Form.Label>Shop / Office / Business / Place Address</Form.Label>
                   <Form.Control required as="textarea" rows={3} />
                   <Form.Text className="text-muted">
                 Make sure entered address is complete, correct and it is yoyr Shop/ Office / business location address.
                 </Form.Text>
                 </Form.Group>
                 <Form.Group className="mb-3" controlId="formBasicPassword">
                   <Form.Label>Landmark</Form.Label>
                   <Form.Control required type="text" placeholder="Place Reg Date" />
                 </Form.Group>
                 <div className=''><a href="#."><i className="fa fa-map-marker"></i> Fetch current location</a></div>
                 {/** <Row className="place_btn">
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
             </Row>**/}
           </Container>
   
             </Col>
             <Col md="3"></Col>
          </Row>
              
      </div>
    case 1:
      return <div className="">
         <div className="placeinfo">
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                       
                    <Row>
                    <Col md="2"></Col>
                    <Col md="8">
                    <Form.Label>Choose type of business / Place and Category</Form.Label>  
                       <ul className='place_cat'>
                         <li><Button onClick={onClick}>Shop</Button></li>
                         <li><Button>Services</Button></li>
                         <li><Button>Shop</Button></li>
                         <li><Button>Services</Button></li>
                         <li><Button>Shop</Button></li>
                         <li><Button>Services</Button></li>
                       </ul>
                    </Col>
                    <Col md="2"></Col>
                 </Row>                               
                  </Form.Group>
                  {showText ? <div>You clicked the button!</div> : null}
                 
                      <Row>
                        <Col md="3"></Col>
                        <Col md="6">                          
                          <Form.Group controlId="formBasicPassword">
                          <Form.Label>More Details about place :</Form.Label>                         
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                        
                        
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Describe your place / business in few words</Form.Label>
                        <Form.Control as="textarea" rows={3} required/>                      
                      </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Row>
                           <Col md="4">
                              <Form.Label>Mobile No.</Form.Label>
                            <Form.Control type="date" required placeholder="Mobile No." />
                            </Col>
                           <Col md="8">
                           <Form.Label>Email ID</Form.Label>
                           <Form.Control type="date" required placeholder="Email ID" />
                           </Col>
                        </Row>
                        
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Business Website (If Any)</Form.Label>
                        <Form.Control type="date" required placeholder="Business Website (If Any)" />
                      </Form.Group>
                      <Form.Group as={Row} className="mb-3">
                      <Form.Label as="legend" column sm={5}>
                        Do you have door services : 
                      </Form.Label>
                      <Col sm={2}>
                        <Form.Check
                          type="radio"
                          label="Yes"
                          name="formHorizontalRadios"
                          id="formHorizontalRadios1"
                        />
                        </Col>
                        <Col sm={2}>
                        <Form.Check
                          type="radio"
                          label="No"
                          name="formHorizontalRadios"
                          id="formHorizontalRadios2"
                        />
                     
                        </Col>
                    </Form.Group>
                {/**  <Row className="place_btn">
                      <Col md="6">
                      <Button variant="primary" type="submit">
                      <i className='fa fa-angle-left' /> Prevoius
                    </Button>
                      </Col>
                      <Col md="6">
                      <Button variant="primary" type="submit" className="pull-right">
                      Next <i className='fa fa-angle-right' />
                    </Button>
                      </Col>
                   </Row>* */}   
                        </Col>
                        <Col md="3"></Col>
                      </Row>
                   
                    </div>
      </div>
    case 2:
      return <div className="">
      <Container>
         <Row>
            <Col md="3"></Col>
            <Col md="6">
            <Form className='placeinfo'>
            <Form.Group as={Row} className="mb-2">
              <Form.Label as="legend" column sm={5}>
                Do you provide 24 * 7 Service : 
              </Form.Label>
              :
              <Col sm={2}>
                <Form.Check
                  type="radio"
                  label="Yes"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                />
                </Col>
                <Col sm={2}>
                <Form.Check
                  type="radio"
                  label="No"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                />
            
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2">
            <Form.Label as="legend" column sm={5}>
              Working Days : 
            </Form.Label>
            :
            <Col sm={6}>
              <div className='days-btn'>
              {/** <Button>S</Button>
                <Button>M</Button>
                <Button>T</Button>
                <Button>W</Button>
                <Button>T</Button>
                <Button>F</Button>
                <Button>S</Button>**/}
                <div class="cat action">
                  <label>
                      <input type="checkbox" value="1" /><span>S</span>
                  </label>
                </div>

                <div class="cat comedy">
                  <label>
                      <input type="checkbox" value="1" /><span>M</span>
                  </label>
                </div>

                <div class="cat crime">
                  <label>
                      <input type="checkbox" value="1" /><span>T</span>
                  </label>
                </div>

                <div class="cat history">
                  <label>
                      <input type="checkbox" value="1" /><span>W</span>
                  </label>
                </div>

                <div class="cat reality">
                  <label>
                      <input type="checkbox" value="1" /><span>T</span>
                  </label>
                </div>

                <div class="cat news">
                  <label>
                      <input type="checkbox" value="1" /><span>f</span>
                  </label>
                </div>

                  <div class="cat scifi">
                  <label>
                      <input type="checkbox" value="1" /><span>S</span>
                  </label>
                </div>

              </div>                    
            </Col>
          </Form.Group>
            <Form.Group as={Row} className="mb-2">
            <Form.Label as="legend" column sm={5}>
            Working hour timing
            </Form.Label>
            :
            <Col sm={2}>
              <Form.Select aria-label="Default select example" className="hours">                 
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </Form.Select>
              </Col>
              <Col sm={1}><p>to</p></Col>
              <Col sm={2}>
                <Form.Select aria-label="Default select example" className="hours">                 
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </Form.Select>
          
              </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-2">
          <Form.Label as="legend" column sm={5}>
          Lunch hour timing
          </Form.Label>
          :
          <Col sm={4}>
          <Form.Check type="checkbox" label="No Lunch Hours" />
        
            </Col>
          
        </Form.Group>
        <Form.Group as={Row} className="mb-2">
        <Form.Label as="legend" column sm={5}>
      
        </Form.Label>
        :
        <Col sm={2}>
        <Form.Select aria-label="Default select example" className="hours">                 
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </Form.Select>

          </Col>
          <Col sm={1}><p>to</p></Col>
          <Col sm={2}>
          <Form.Select aria-label="Default select example" className="hours">                 
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </Form.Select>
        
            </Col>
      </Form.Group>
            <Form.Group as={Row} className="mb-2">
            <Form.Label as="legend" column sm={5}>
              Do you provide exchange facility 
            </Form.Label>
            :
            <Col sm={2}>
            
              <Form.Check
                type="radio"
                label="Yes"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
              </Col>
              <Col sm={2}>
              <Form.Check
                type="radio"
                label="No"
                name="formHorizontalRadios"
                id="formHorizontalRadios2"
              />
          
              </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-2">
          <Form.Label as="legend" column sm={5}>
          Exchange hour timing
          </Form.Label>
          :
          <Col sm={2}>
            <Form.Select aria-label="Default select example" className="hours">                 
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </Form.Select>
          
            </Col>
            <Col sm={1}><p>to</p></Col>
            <Col sm={2}>
              <Form.Select aria-label="Default select example" className="hours">                 
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </Form.Select>
        
            </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2">
            <Form.Label as="legend" column sm={5}>
          
            </Form.Label>
            :
            <Col sm={6}>
            
            <Form.Check type="checkbox" label="Any time during working hours" />
          
              </Col>
            
              </Form.Group>
            {/** <Row className="place_btn">
                <Col md="6">
                <Button variant="primary" type="submit">
                <i className='fa fa-angle-left' /> Prevoius
              </Button>
                </Col>
                <Col md="6">
                <Button variant="primary" type="submit" className="pull-right">
                Next <i className='fa fa-angle-right' />
              </Button>
                </Col>
              </Row>* */}  
            </Form>
            </Col>
            <Col md="3"></Col>
         </Row>
        
            </Container>
      </div>
    case 3:
      return <div className="">
        <Container>
           <Row>
              <Col md="3"></Col>
              <Col md="6">
                  <Form className="placeinfo">
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Upload Images</Form.Label>
                    <Form.Control required type="file" placeholder="Enter email" className='uploadimg'/>
                  </Form.Group>
                  <div className=''><p>You have added 0 images</p></div>
          {/** <Row className="place_btn">
                  <Col md="6">
                  <Button variant="primary" type="submit">
                  <i className='fa fa-angle-left' /> Prevoius
                </Button>
                  </Col>
                  <Col md="6">
                  <Button variant="primary" type="submit" className="pull-right">
                  Next <i className='fa fa-angle-right' />
                </Button>
                  </Col>
                </Row>   * */}              
              </Form>
              </Col>
              <Col md="3"></Col>
           </Row>
         
        </Container>
      </div>
    default:
      return "Unknown step";
  }
}

export default function CustomizedSteppers() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(1);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const [validated, setValidated] = useState(false);

const handleSubmit = (event) => {
  const form = event.currentTarget;
  if (form.checkValidity() === true) {
    event.preventDefault();
    event.stopPropagation();
  }
  setValidated(false);
};

  return (
    <div className={classes.root}>
    <Header />
    <div className='add_bg'>
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
             </div>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<ColorlibConnector />}
      >
        {steps.map(label => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </div>
        ) : (
          <div>
            <Container>
            <Form className="placeinfo" noValidate validated={validated} onSubmit={handleSubmit}>
            <Typography className={classes.instructions}>
              {GetStepContent(activeStep)}
            </Typography>
            <div className="place_btn">
           
              <Row>
                 <Col md="3"></Col>
                 <Col md="3">
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                 </Col>
                 <Col md="3">
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button} 
                    // className="float-right"
                    >
                  
                    {activeStep === steps.length - 1 ? "Finish" : "Next"} 
                  </Button>
                 </Col>
                 <Col md="3"></Col>
              </Row>
            </div>
            </Form>
            </Container>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
