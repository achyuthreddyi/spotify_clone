import React from 'react'
import "./style.css"

import Header from "../Header/Header"

import { useDataLayerValue } from "../../context/DataLayer"
function Body( {spotify} ) {
    
    const [{ playlists }, dispatch] = useDataLayerValue()

    return (
        <div className="body">
            <Header 
            spotify = { spotify }
            />
            <h1> Achyuth Reddy </h1>
        </div>
    )
}

export default Body
