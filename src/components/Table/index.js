import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { addWishlistExported, removeWishlistExported } from '../Firebase/firebase';

const MoviesTable = (props) => {
    

    const deleteRow = (x, index) => {
      //update state on parent
      const newData = [...props.data.slice(0, index), ...props.data.slice(index+1)];
      var setData = props.setData;
      setData(newData);

      //update state on back-end
      props.isWishlist == true ? removeWishlistExported(x) : addWishlistExported(x);
    }

    return (
         <div className="table">
         	<Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Year</th>
                    <th>Gender</th>
                    <th>Add to Wishlist</th>
                </tr>
                </thead>
                <tbody>
                            {
                                props.data.map((x, index) => (
                                    <tr>
                                        <td>{x['title']}</td>
                                        <td>{x['year']}</td>
                                        <td>{x['genre']}</td>
                                        <td><Button variant="light" className="btn-light" onClick={() => deleteRow(x, index)}>{props.isWishlist == true ? <FontAwesomeIcon icon="heart-broken" color="black" fixedWidth/> : <FontAwesomeIcon icon="heart" color="red" fixedWidth/>}</Button></td>
                                    </tr>
                                ))

                            }
                </tbody>
              </Table>
         </div>
      );
  	}

export default MoviesTable

/**/