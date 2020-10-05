import React, { useEffect} from 'react';
import './App.css';
import Login from "./components/Login"
import { getTokenFromUrl } from './spotify';

function App() {

  useEffect(() => {
    const token = getTokenFromUrl()
    console.log(" i have a token ", token);
  },[])

  return (
    <div className="app">
      
      {/* spotify logo */}
      {/* login with spotify */}
      <Login />


    </div>
  );
}

export default App;
