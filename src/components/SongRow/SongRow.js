import React from 'react'
import "./style.css"

function SongRow( { track } ) {
    return (
        <div className="songrow">
            <img className = "songRow__album" src= {track.album.images[0].url} alt="" />
            <div className="songRow__info">
                <h1> {track.name} </h1>
                <p>
                    {track.artists.map((artist) => artist.name).join(", ")} -{" "}
                    {track.album.name}
                </p>
            </div>
            
        </div>
    )
}

export default SongRow
