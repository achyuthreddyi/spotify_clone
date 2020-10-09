import React from 'react'
import "./style.css"
import { useDataLayerValue } from "../../context/DataLayer"
function Footer() {
    
    const [{ playlists }, dispatch] = useDataLayerValue()

    return (
        <div className="body">
            <h1> I am the body </h1>
        </div>
    )
}

export default Footer
