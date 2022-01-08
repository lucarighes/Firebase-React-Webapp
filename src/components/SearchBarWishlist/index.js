import React from 'react';
import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import { getUpdatedWishlist } from '../Firebase/firebase';
import Button from 'react-bootstrap/Button';
import MoviesTable from '../Table';
import LoaderWishlist from '../LoaderWishlist';
import Loader from '../Loader';




const SearchBarWishlist = ({ user }) => {

    const [data, setData] = useState([]);
    const [update, setUpdate] = useState('');
    const [loader, setLoader] = useState(true);
    const [first, setFirst] = useState(true);


    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
          setLoader(true);
          setData(getUpdatedWishlist(update));     
        }, 1000)

        return () => clearTimeout(delayDebounceFn)    
           
    }, [update]);


    useEffect(() => {
        setTimeout(() => {
          setLoader(false);
          if(first == true){
            setFirst(false);
          }
        }, 1000)

    }, [data]);


    return (
      <React.Fragment>
      <div className="container">
      <div className="left"><span></span></div>
      <div className="center">
          
          {first ? <Loader /> : data.length == 0 && update.length == 0 ? <LoaderWishlist /> : (
            <div>
              <Form className='d-flex'>
                <Form.Control type="text" placeholder="Enter words" value={update} name="search" width="50%" className="mr-sm-2" onChange={(e) => setUpdate(e.target.value)}/>
              </Form>
              <br></br>
              {loader ? <Loader /> : <MoviesTable data={data} setData={setData} isWishlist={true}/>}
            </div>

            )}
          
      </div>
      <div className="right"><span></span></div>
      </div>
      </React.Fragment>
    );
}

export default SearchBarWishlist
