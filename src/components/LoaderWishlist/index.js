import React from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';


const LoaderWishlist = () => {

  const navigate = useNavigate();

    function handleOnSubmit(e){
      navigate(
        '/'
      );
    };

  return (
    <div>
      <h1>You did not add any movie to the wishlist!</h1>    
      <br></br>
      <Button variant="dark" className="btn-dark" onClick={(e) => handleOnSubmit(e)}>Movies list</Button>
    </div>
  )
}

export default LoaderWishlist;