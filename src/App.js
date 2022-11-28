import React from "react";
import { BrowserRouter as Router,Route,Routes,} from "react-router-dom";
//import logo from "./logo.svg";
//import "./assets/css/style.css";
//import "./assets/css/responsive.css";
//import Header from "../src/components/header/Headertop";
//import "bootstrap/dist/css/bootstrap.min.css";

// import Sidebar from "./components/Sidebar";

import About from "./pages/About.js";
import Homepage from "./pages/Homepage.js";
import Login from "./pages/Login/Login.jsx";
import HelpingHands from "./pages/HelpingHands/HelpingHands.js";
import Stepper from "./pages/AddNewPlace/Stepper.jsx";
import SearchedPlace from "./pages/SearchedPlace/SearchedPlace.jsx";
import EditPlace from "./pages/EditPlace/EditPlace.jsx";
import AllPlaces from "./pages/AllPlaces/AllPlaces.jsx";
import MyPlaces from "./pages/MyPlaces/MyPlaces.jsx";
import Procedure from "./pages/Procedure/Procedure.jsx";
import Procedure1 from "./pages/Procedure/Procedure1.jsx";
import Procedure2 from "./pages/Procedure/Procedure2.jsx";
import ShowPlaceProcedure from "./pages/Procedure/ShowPlaceProcedure.jsx";
import PublicPlaceProcedure from "./pages/Procedure/PublicPlaceProcedure.jsx";
import PhotoeditorProcedure from "./pages/Procedure/PhotoeditorProcedure.jsx";
import HelpingHandProcedure from "./pages/Procedure/HelpingHandProcedure.jsx";
import PhotoEditor from "./pages/PhotoEditor/PhotoEditor.jsx";
import Language from "./pages/Language/Language.jsx";
// import SideBar from "./components/Sidebar";
import Notification from "./components/Notification.jsx";
import HelpingHNew from "./pages/HelpingHands/HelpingHandsNew.js";
import Thoughts from "./pages/Thoughts/Thoughts.js";
import PlacedetailsStep1 from './pages/Procedure Step/PlacedetailsStep1';
import BusinessStep2 from './pages/Procedure Step/BusinessStep2';
import PlaceAvaiStep3 from './pages/Procedure Step/PlaceAvaiStep3';
import VoiceSearchBar from "./pages/Voice Search/VoiceSearchBar.js";
import ImageUpStep5 from './pages/Procedure Step/ImageUpStep5';
import Location from "./components/Location.js";
import AddNewPlace from "./pages/AddNewPlace/AddNewPlace.jsx";
import Popup from './pages/AddNewPlace/Popup.js';
import Popup2 from './pages/AddNewPlace/Popup2.js';
import SelectPopup from "./pages/AddNewPlace/SelectPopup.js";
import firebase from './firebase'
import PrivacyAndPolicy from "./pages/privacy/PrivacyAndPolicy.js";
import TermsAndCondition from "./pages/privacy/TermsAndCondition.js";




// import Login1 from "./pages/Login/Login1.jsx";
// import Popup from "./pages/AddNewPlace/Popup.js";
// import HelpingHandsNew from "./pages/HelpingHands/HelpingHandsNew.js";
// import TermsConditions from "./pages/TermsConditions/TermsConditions.jsx";
function App() {
  React.useEffect(()=>{
    const msg=firebase.messaging();
    msg.requestPermission().then(()=>{
      return msg.getToken();
    }).then((data)=>{
      console.warn("token",data)
    })
  })
  return (
    <Router>
  {/*<SideBar>*/}
      <Routes>
        {/* Common Route Start 
        <Route exact path="/MyWishlist" component={MyWishlist} />*/}
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Login" element={<Login />} />      
        <Route exact path="/HelpingHands" element={<HelpingHands />} />
        <Route exact path="/AddNewPlace" element={<AddNewPlace />} />
        <Route exact path="/SearchedPlace" element={<SearchedPlace />} />
        <Route exact path="/EditPlace" element={<EditPlace />} />
        <Route exact path="/AllPlaces" element={<AllPlaces />} />
        <Route exact path="/MyPlaces" element={<MyPlaces />} />
        <Route exact path="/Procedure" element={<Procedure />} />
        <Route exact path="/Procedure1" element={<Procedure1 />} />
        <Route exact path="/Procedure2" element={<Procedure2 />} />
        <Route exact path="/PublicPlaceProcedure" element={<PublicPlaceProcedure />} />
        <Route exact path="/ShowPlaceProcedure" element={<ShowPlaceProcedure />} />
        <Route exact path="/PhotoeditorProcedure" element={<PhotoeditorProcedure />} />
        <Route exact path="/PhotoEditor" element={<PhotoEditor />} />
        <Route exact path="/Language" element={<Language />} />
        <Route exact path="/HelpingHandProcedure" element={<HelpingHandProcedure />} />
        <Route exact path="/Stepper" element={<Stepper />} />
        <Route exact path="/Notification" element={<Notification/>}/>
        <Route exact path="/Helping" element={<HelpingHNew/>}/>
        <Route exact path="/Thoughts" element={<Thoughts/>}/>
        <Route exact path="/PlacedetailsStep1" element={<PlacedetailsStep1/>}/>
        <Route exact path="/BusinessStep2" element={<BusinessStep2/>}/>
        <Route exact path="/PlaceAvaiStep3" element={<PlaceAvaiStep3/>}/>
        <Route exact path="/ImageUpStep5" element={<ImageUpStep5/>}/>
        <Route exact path="/VoiceSearchBar" element={<VoiceSearchBar/>}/>
        <Route exact path="/location" element={<Location/>}/>
        <Route exact path="/popup" element={<Popup/>}/>
        <Route exact path="/popups" element={<Popup2/>}/>
        <Route exact path="/*" element={<h1>Page Not Found 404</h1>}/>
        <Route exact path="/selectpopup" element={<SelectPopup/>}/>
        <Route exact path="/privacypolicy" element={<PrivacyAndPolicy/>}/>
        <Route exact path="/termscondition" element={<TermsAndCondition/>}/>

    
      
      </Routes>
      {/*</SideBar>*/}
     
    </Router>
  );
}

export default App;
