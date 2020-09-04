import { useEffect, useState } from 'react';

const auth = window.firebase.auth();
const provider = new window.firebase.auth.GoogleAuthProvider();

export function useAuthentication() {
  const [authentictated, setAuthenticated ] = useState('loading')
  
  function login() {
  auth.signInWithPopup(provider);
  }

  function logout() {
    auth
    .signout()
    .then(function() {
      // Sign-out successful
    })
    .catch(function(error){
      // Error 
    });
  }

  useEffect(() => {
    auth.onAuthStateChanged(function(user){
      if(user){
        setAuthenticated(user);
      } else {
        setAuthenticated();
      }
    }, function(error){
      console.log(error);
    });
  }, []);

  return {login, logout, loggedIn: authentictated};
}