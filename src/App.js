import logo from './logo.svg';
import './App.css';
import Login from './login';
import Mainpage from './main';
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth} from './firebase';


function App() {
  
 
  const [user] = useAuthState(auth);
  return (
    user ? <Mainpage/> : <Login/>
  );
}

export default App;
