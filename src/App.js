import React, { useEffect, useState } from 'react';
import './App.css';
import Login from "./pages/Login"
import Player from "./pages/Player"
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js"
import { useDataLayerValue } from "./context/DataLayer"

const spotify = new SpotifyWebApi()

function App() {

  const [token, setToken] = useState(undefined)

  useEffect(() => {
    const hash = getTokenFromUrl()
    window.location.hash = "";
    const _token = hash.access_token

    if (_token) {
      setToken(_token)
      spotify.setAccessToken(_token)
      spotify.getMe()
        .then(user =>{
          console.log(user);
        })
    }
    console.log(" i have a token ", token);
    console.log( spotify);
  },[])

  return (
    <div className="app">

      {
        token ? (           
          <Player />         
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
