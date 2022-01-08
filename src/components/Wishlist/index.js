import React from 'react';
import Header from '../Header';
import SearchBarWishlist from '../SearchBarWishlist';
import { setUserUid } from '../Firebase/firebase';

const Wishlist = ({ user }) => {    
    setUserUid(user.uid);


    return (
      <div>
          <Header user={user} />
          <SearchBarWishlist user={user} />
      </div>
        );
};
export default Wishlist;