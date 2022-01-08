import { Nav, NavHeader, NavLeft, NavCenter, NavRight} from './Header.styled';
import React, { useState, useRef } from 'react';
import { auth } from '../Firebase/firebase'
import logo from '../../images/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faUser, faHeart, faHeartBroken } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';



library.add(fab, faUser, faHeart, faHeartBroken)


const Header = ({ user }) => {    

    const navigate = useNavigate();

    function handleOnSubmit(e){
      navigate(
        '/wishlist'
      );
    };


    return (
        <Nav>
          <NavHeader>
            <NavLeft>
              <a href="/"><img src={logo} alt="Movies Room" width={50} height={50}></img></a>    
            </NavLeft>
            <NavCenter></NavCenter>
            <NavRight> 

                <Button variant="light" className="btn-light"><FontAwesomeIcon icon="user" color="black" /> {user.displayName}</Button>
                <Button variant="light" className="btn-light" onClick={(e) => handleOnSubmit(e)}><FontAwesomeIcon icon="heart" color="red" fixedWidth/></Button>

                <Button className="button signout" variant="danger" className="btn-danger" onClick={() => auth.signOut()}>Sign out</Button>

            </NavRight>
            
          </NavHeader>
        </Nav>
        
        );
};
export default Header;