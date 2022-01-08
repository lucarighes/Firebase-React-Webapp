import React from 'react';
import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import { getUserData } from '../Firebase/firebase';
import Button from 'react-bootstrap/Button';
import MoviesTable from '../Table';
import Loader from '../Loader';




const SearchBar = ({ user }) => {

    const [data, setData] = useState([]);
    const [temp, setTemp] = useState([]);
    const [wishlist, setWishlist] =  useState([]);
    const [update, setUpdate] = useState('');
    const [loader, setLoader] = useState(true);


    useEffect(() => {
        setLoader(true);
        const delayDebounceFn = setTimeout(() => {
          setData(getUserData(update + ' '));
        }, 1000)

        return () => clearTimeout(delayDebounceFn)
           
    }, [update]);


    useEffect(() => {
        setTimeout(() => {
          if(data.length > 0 || update != ''){
            setLoader(false);
          }   
        }, 1300)

    }, [data]);


    return (
      <React.Fragment>
      <div className="container">
      <div className="left"><span></span></div>
      <div className="center">
          <Form className='d-flex'>
            <Form.Control type="text" placeholder="Enter words" name="search" width="50%" className="mr-sm-2" onChange={(e) => setUpdate(e.target.value)}/>
          </Form>
          <br></br>
          {loader ? <Loader /> : <MoviesTable data={data} setData={setData} isWishlist={false}/>}
          
      </div>
      <div className="right"><span></span></div>
      </div>
      </React.Fragment>
    );
}

export default SearchBar



