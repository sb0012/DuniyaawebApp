import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import './Logins.css'
import "./pages/Language/i18n.js";
import Time from './pages/AddNewPlace/Time';
// import LOginpage from './pages/AllPlaces/LOginpage';
// import Login1 from './pages/Login/Login1';
// import PlaceDetails from './pages/AddNewPlace/PlaceDetails';
// import Logins from "./Logins.js";


ReactDOM.render(
  <React.StrictMode>
    {/* <Login1/> */}
   <App />
   {/* <Time/> */}
   {/* <LOginpage/> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
