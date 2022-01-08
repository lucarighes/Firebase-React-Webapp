import React from 'react';
import Home from '../Home';
import SignIn from '../SignIn';
import Wishlist from '../Wishlist';
import { useState, useEffect } from 'react';
import firebase from '../Firebase/firebase';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setUser(user);
    })
  }, [])


  return (

      <div>
      <link href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" rel="stylesheet" />
      <Router>      
          <Routes>
            <Route path="/" element={user ? <Home user={user} /> : <SignIn />} />
            <Route path="/wishlist" element={user ? <Wishlist user={user}/> : <SignIn />} />
          </Routes>
      </Router>
        
      </div>
  )
};

export default App;