import React, { useEffect, useState } from 'react';
import './App.css';

import Login from "./pages/Login/Login"
import Player from "./pages/Player/Player"


import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js"
import { useDataLayerValue } from "./context/DataLayer"

const spotify = new SpotifyWebApi()

function App() {  

  
  const[{ user, token, playlists }, dispatch ] = useDataLayerValue()

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

      spotify.getUserPlaylists()
        .then( (playlists) => {
          dispatch({
            type: 'CREATE_PLAYLISTS',
            playlists: playlists
          })
        })
        
    }
    console.log(" i have a token ", token);
  },[])
  console.log("user from the datalayer", user );
  console.log("data from dataLayer", token );
  console.log("data from the playlists contect api", playlists);


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
