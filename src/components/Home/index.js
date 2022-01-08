import React from 'react';
import Header from '../Header';
import SearchBar from '../SearchBar';
import { useState, useEffect } from 'react';
import { setUserUid } from '../Firebase/firebase';


const Home = ({ user }) => {

  setUserUid(user.uid);
  
  return (
    <div className="home">
    <Header user={user} />
    <SearchBar user={user}/>
    
    </div>
  )
}

export default Home;