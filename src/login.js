import React from 'react';
import {auth , googleprovider,facebookprovider,githubprovider}  from './firebase.js';
  
const Login = () => {
  
    // Sign in with google
    const signin = () => {
        auth.signInWithPopup(googleprovider).catch(alert);
    }
    const fsignin =()=> {
        auth.signInWithPopup(facebookprovider).catch(alert);
    }
    const gsignin =()=> {
        auth.signInWithPopup(githubprovider).catch(alert);
    }
      
    return (
        <div>
            <center>
                <button style={{"marginTop" : "200px"}} 
                onClick={signin}>Sign In with Google</button>
                 <button style={{"marginTop" : "200px"}} 
                onClick={fsignin}>Sign In with facebook</button>
                 <button style={{"marginTop" : "200px"}} 
                onClick={gsignin}>Sign In with Github</button>
            </center>
        </div>
    );
}
  
export default Login;