import { signInWithGoogle } from '../Firebase/firebase';
import logo from '../../images/logo.png'; 
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';



const SignIn = () => {

  return (
    <div className="container">
      <div className="left"><span></span></div>
      <div className="center">
        <h1><b>Movies Room</b></h1>
        <img src={logo} alt="Movies Room"></img>
        <br></br>
        <br></br>
        <Button variant="success" className="btn-success" onClick={signInWithGoogle}><i className="fab fa-google"></i> Sign in with google</Button>

      </div>
      <div className="right"><span></span></div>
     </div>
  )
}

export default SignIn;