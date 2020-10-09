import React from 'react'
import './style.css'
import SideBar from "../../components/SideBar"
import Body from "../../components/Body"
import Footer from "../../components/Footer"

function index({ spotify }) {
    return (
        <div className="player">
            <div className = "player__body">
                <SideBar />
                <Body />
                {/* sidebar  */}
                {/*  Body  */}
            </div>            
            {/* footer */}
            <Footer />
        </div>
    )
}

export default index
