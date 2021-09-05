import React from 'react';
import {auth} from './firebase';
  
const Mainpage = () => {
  
    // Signout function
    const logout = () => {
        auth.signOut();
    }
    console.log(auth.currentUser);
   

    return (
        <div>
           <h1>Welcome</h1>
           <h1>{auth.currentUser.displayName}</h1>
           <h1>{auth.currentUser.email}</h1>
            <button style={{"marginLeft" : "20px"}} 
            onClick={logout}>
                Logout
            </button>
        </div>
    );
}
  
export default Mainpage;