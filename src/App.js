import React, { useEffect, useState } from 'react';
import './App.css';
import Login from "./components/Login"
import { getTokenFromUrl } from './spotify';

function App() {

  const [token, setToken] = useState(null)



  useEffect(() => {
    const hash = getTokenFromUrl()
    window.location.hash = "";
    const _token = hash.access_token

    if (_token) {
      setToken(_token)
    }
    console.log(" i have a token ", token);
  },[])

  return (
    <div className="app">

      {
        token ? (
          <h2> Ia m logged in </h2>
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
