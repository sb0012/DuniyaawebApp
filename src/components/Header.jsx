import React, { useState } from 'react';
import { MdNotificationsActive, MdSwitchAccount, MdLogin, MdSettings, MdHelp } from 'react-icons/md'
// import { MDBSwitch } from 'mdb-react-ui-kit';
// import SideBar from "../components/Sidebar";
import {Menu,MenuItem,MenuButton,SubMenu} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { FaSun, FaMoon, FaMicrophone } from 'react-icons/fa'
import "./addedplace.css";

// notification import
import addNotification from 'react-push-notification';
import { Notifications } from 'react-push-notification';

import { Navbar, Nav, Container } from "react-bootstrap";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles, darkTheme, lightTheme } from "./theme.jsx";
import {
  BrowserRouter as Router,
  Route,
  // Link,
  Routes,
  // Redirect,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Popup from '../pages/AddNewPlace/Popup';

const StyledApp = styled.div`
 color: ${(props) => props.theme.fontColor};
`;

export default function Header() {


  
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  function buttonOnClick() {
    addNotification({
      title: 'Warning',
      native: true
    })
  };
  return ( 
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme} >
        
    <GlobalStyles />

      <StyledApp>
        <header className="">
          <Navbar collapseOnSelect expand="lg" className="pt-0 pb-0 header">

            <Container>
         
              <Navbar.Brand href="/" className="lg"><span className="rightmargin">D</span><span className='lgnm'>Duniyaa Web App</span></Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav" className='menu'>
                <Nav className="me-auto">


                </Nav>
                <Nav className=" nav-header mt-2  ">
                  <nav className="navbar navbar-light bg-none">
                  </nav>

                  {/* <Nav.Link className={splitLocation[1] === "" ? "active" : ""} href="/">Home</Nav.Link> */}
                  {/* <Nav.Link eventKey={2} href="/About">            
                  About
                  </Nav.Link>*/}
                  <Nav.Link className={splitLocation[1] === "AddNewPlace" ? "active" : ""} href="/popup" >Add New Place </Nav.Link>

                  {/* <Nav.Link href="#deets">Contact</Nav.Link>*/}
                  
                  <Nav.Link className={splitLocation[1] === "MyPlaces" ? "active" : ""} href="/MyPlaces">My Places</Nav.Link>
                  <Nav.Link className={splitLocation[1] === "Stepper" ? "active" : ""} href="/Stepper">Stepper</Nav.Link>
                  <Nav.Link className={splitLocation[1] === "Login" ? "active" : ""} eventKey={2} href="/Login"><span className='me-4'>Login</span></Nav.Link>
                    {/* <Nav.Link href="/VoiceSearchBar"><span className='mdlogo'><FaMicrophone /></span></Nav.Link> */}
                    {/* nitification div */}
                  <Nav.Link><div className="App">
                  {/* <Notifications /> */}
                    {/* <button onClick={buttonOnClick} className="bgremo">
                      <span className='mdlogo'><MdNotificationsActive /></span>
                    </button> */}
                  </div></Nav.Link>
                  <Nav.Link><div id="google_translate_element" className='google'></div></Nav.Link>

                  <Nav.Link href="/Procedure" className='help_icon'><i className='fa fa-question-circle'></i></Nav.Link>
                  {/* <Nav.Link href="/PublicPlaceProcedure" className='help_icon'>Public Place Help</Nav.Link> */}
                  {/* <Nav.Link className={splitLocation[1] === "Language" ? "active" : ""} eventKey={2} href="/Language">
                  Language
                  </Nav.Link> */}

                </Nav>
              </Navbar.Collapse>
              {/* <div id="google_translate_element" ></div> */}

              {/* userCode return deta */}
              <Menu className="brshadow" menuButton={<MenuButton className="btnbgremo"><AccountCircleIcon /></MenuButton>} transition>
          <MenuItem className="brshadow">New File</MenuItem>
            <MenuItem className="brshadow">Profile</MenuItem>
            <MenuItem className="brshadow">My Account</MenuItem>
            <MenuItem className="brshadow">Save</MenuItem>
            <MenuItem className="brshadow"><button className="darkmode" onClick={() => themeToggler()} >
                      {theme === 'light' ? <div > <abbr title="Light Theme" className='dotremo' ><FaSun /><span className='textspace ms-2'>Light Theme </span> </abbr>
                      </div> : <div> <abbr title="Dark Theme" className='dotremo' ><FaMoon /><span className='textspace ms-2'>Dark Theme </span> </abbr> </div>}
                    </button></MenuItem>
            <MenuItem className="brshadow">Send Feedback</MenuItem>
            <MenuItem className="brshadow">Setting</MenuItem>
            <MenuItem className="brshadow">Logout</MenuItem>
			<SubMenu label="Help" >
            <MenuItem className="brshadow"><a href="/PlacedetailsStep1" className="submenu">Place Details</a></MenuItem>
            <MenuItem className="brshadow"><a href="/BusinessStep2" className="submenu">Nature of Business</a></MenuItem>
            <MenuItem className="brshadow"><a href="/PlaceAvaiStep3" className="submenu">Place Availibility</a></MenuItem>
            <MenuItem className="brshadow"><a href="/ImageUpStep5" className="submenu">Image Upload</a></MenuItem>
        </SubMenu> 
        </Menu>
                    
            </Container>
          </Navbar>
        </header>
      </StyledApp>
    </ThemeProvider>

  )
}

