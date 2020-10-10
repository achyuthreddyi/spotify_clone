import React from 'react'
import "./style.css"

import Header from "../Header/Header"

import { useDataLayerValue } from "../../context/DataLayer"
import { FavoriteOutlined, MoreHorizRounded, PlayCircleFilledRounded } from '@material-ui/icons'
import SongRow from '../SongRow/SongRow'

function Body( {spotify} ) {
    
    const [{ discover_weekly }, dispatch] = useDataLayerValue()

    return (
        <div className="body">
            <Header 
            spotify = { spotify }
            />
            <div className="achyuth">
                <h1 > <span> Achyuth Reddy's</span> Spotify Clone</h1>
                <p> above line is just to say that i have built this</p>
                <p > orange is new Black, modi is pm of india, i have 2 no minimum balance bank accounts, i am poor, single, boring, trying to be sarcastic by writing this line   </p>
                <p> I write code i love and hate JS </p>
            </div>
           
          
            <div className="body__info">

                <img 
                src= { discover_weekly?.images[0].url }
                alt=""/>
                
                <div className="body__infoText">
                    <strong> Playlist</strong>
                    <h2> Discover weekly</h2>
                    <p> { discover_weekly?.description } </p>
                </div>
            </div>

            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilledRounded className="body__shuffle" />
                    <FavoriteOutlined fontSize="large"  />
                    <MoreHorizRounded />
                </div>                
                {/* lists of songs */}
                { discover_weekly?.tracks.items.map(item =>(
                    <SongRow track={item.track} />
                ))}


            </div>
        </div>
    )
}

export default Body
