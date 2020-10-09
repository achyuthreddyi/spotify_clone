import React, { useEffect, useState } from 'react';
import './App.css';
import Login from "./pages/Login"
import Player from "./pages/Player"
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js"
import { useDataLayerValue } from "./context/DataLayer"

const spotify = new SpotifyWebApi()

function App() {

  
  const[{ user, token }, dispatch ] = useDataLayerValue()

  useEffect(() => {
    const hash = getTokenFromUrl()
    window.location.hash = "";
    const _token = hash.access_token

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token
      })

      spotify.setAccessToken(_token)

      spotify.getMe()
        .then(user =>{
          dispatch({
            type: 'SET_USER',
            user: user,
          })
          
        })
    }
    console.log(" i have a token ", token);
  },[])
  console.log("data from dataLayer", user );
  console.log("data from dataLayer", token );


  return (
    <div className="app">

      {
        token ? (           
          <Player 
          spotify
          />         
        ) : (
            <Login />
        )
      }
      
      {/* spotify logo */}
      {/* login with spotify */}
      {/* <Login /> */}


    </div>
  );
}

export default App;
