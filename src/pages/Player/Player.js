import React from 'react'
import './style.css'
import SideBar from "../../components/SideBar/SideBar"
import Body from "../../components/Body/Body"
import Footer from "../../components/Footer/Footer"
import { useDataLayerValue } from "../../context/DataLayer"

function Player({ spotify }) {

    const [ { playlists } ] = useDataLayerValue()
    return (
        <div className="player">
            <div className = "player__body">
                <SideBar 
                
                />
                <Body />
                {/* sidebar  */}
                {/*  Body  */}
            </div>            
            {/* footer */}
            <Footer />
        </div>
    )
}

export default Player
