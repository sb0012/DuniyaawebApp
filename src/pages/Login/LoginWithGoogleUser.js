
import {useEffect} from 'react';

function LoginWithGoogleUser() {

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

export default LoginWithGoogleUser;