import React,{useState} from 'react'
import {GoogleLogin,GoogleLogout} from 'react-google-login';

const Logins = () => {
    const clientId="688695007193-eiu63gqe8ns2r2em0nju01tpoiahd08s.apps.googleusercontent.com"
    const [showloginbutton,setShowLoginButton]=useState(true);
    const [showlogoutbutton,setShowLogoutButton]=useState(false);

    const onLoginSuccess=(res)=>{
        console.log("Login Success:", res.profileObj);
        setShowLoginButton(false);
        setShowLogoutButton(true);
    }
    const onFailureSuccess=(res)=>{
        console.log("Login Failed:", res);
    }
    const onSignoutSuccess=()=>{
        alert("You have been signed out Successfully");
        setShowLoginButton(true);
        setShowLogoutButton(false);
    }

  return (
      <div>
      {showloginbutton ?(
    <GoogleLogin
    clientId={clientId}
    buttonText="Login"
    onSuccess={onLoginSuccess}
    onFailure={onFailureSuccess}
    cookiePolicy={'single_host_origin'}
  />) : null
      }
      {showlogoutbutton ?(

    <GoogleLogout
      clientId={clientId}
      buttonText="Logout"
      onLogoutSuccess={onSignoutSuccess}
    >
    </GoogleLogout>) : null
      }
      
    </div>
  )
}

export default Logins;
