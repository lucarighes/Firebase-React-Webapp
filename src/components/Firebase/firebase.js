import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/database';
import 'firebase/compat/firestore';
import { useState, useEffect } from 'react';


var res = [];
var uid;
var wishlist = [];
var idWishlist = [];


const config = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

firebase.initializeApp(config);
const firestore = firebase.firestore();

const ref = firebase.database().ref('/movies-list');

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });


export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const getUserData = (filter) => {
  res = [];
  filter = filter.trim();


  if(filter.length == 0){
    ref.orderByKey().on('child_added', snapshot => {
      const state = snapshot.val();
      if(checkItem(state['id'])){
          res.push(state);
      }
    });
    return res;
  }
  else{
      if(!isNaN(filter) && filter >= 2009 && filter <=2020){
         ref.orderByChild('year').equalTo(parseInt(filter)).on('child_added', snapshot => {
          const state = snapshot.val();
          if(checkItem(state['id'])){
              res.push(state);
          }
        });
         return res;
      }
      else{
        ref.orderByChild('title').startAt(filter).endAt(filter+'utf8ff').on('child_added', snapshot => {
          const state = snapshot.val();
          if(checkItem(state['id'])){
              res.push(state);
          }
        });
        ref.orderByChild('genre').startAt(filter).endAt(filter).on('child_added', snapshot => {
          const state = snapshot.val();
          if(checkItem(state['id'])){
              res.push(state);
          }
        });
        return res;
      }
  }
}

const addWishlist = (data) => {
    firestore.collection("wishlist").doc(uid).update({
      id: firebase.firestore.FieldValue.arrayUnion(data)
    });
}

const removeWishlist = (data) => {
    firestore.collection("wishlist").doc(uid).update({
      id: firebase.firestore.FieldValue.arrayRemove(data)
    });
}

const getWishlist = () => {
  wishlist = [];
  firestore.collection("wishlist").doc(uid).get().then((querySnapshot) => {
      if(querySnapshot.exists){
        var data = querySnapshot.data();
        for(var count = 0; count < data['id'].length; count++){
          wishlist.push(data['id'][count]);
        }
      }
      else{
        firestore.collection("wishlist").doc(uid).set({
          id: []
        });
      }
    }).then(() => {
    wishlist = uniq(wishlist);
    idWishlist = wishlist.map(function(x){return x['id']});
    idWishlist = idWishlist.filter(Number);
    return wishlist;
  });
}

const uniq = (a) =>{
    var seen = {};
    return a.filter(function(item) {
        var k = item['id'];
        return seen.hasOwnProperty(k) ? false : (seen[k] = true);
    });
}

const checkItem = (id) => {
    if(idWishlist.includes(id)){
      return false;
    }
    else{
      return true;
    }
}

export const setUserUid = (userUid) =>{
    uid=userUid;
    getWishlist();
}

export const addWishlistExported = (data) => {
    wishlist.push(data);
    idWishlist.push(data['id']);
    addWishlist(data);
}

export const removeWishlistExported = (data) => {
    const index = idWishlist.indexOf(data['id']);
    idWishlist.splice(index,1);
    for(var count = 0; count < wishlist.length; count++){
      if(wishlist[count]['id'] == data['id']){
          wishlist.splice(count, 1);
      }
    }
    removeWishlist(data);
}

export const getUpdatedWishlist = (filter) => {
    if(filter == ''){
        return wishlist;
    }
    else{
        if(!isNaN(filter) && filter >= 2009 && filter <=2020){
            var temp = [];
            for(var count = 0; count < wishlist.length; count++){
              if(wishlist[count]['year'] == parseInt(filter)){
                  temp.push(wishlist[count]);
              }
            }
            return temp;
        }
        else{
          var temp = [];
          for(var count = 0; count < wishlist.length; count++){
             if(wishlist[count]['title'].startsWith(filter) || wishlist[count]['genre'] == filter){
                temp.push(wishlist[count]);
             }
          }
          return temp;
        }
    }
}
export default firebase;
