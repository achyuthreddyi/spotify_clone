import React, {useEffect} from 'react'

import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";

import "./style.css"
import { Grid, Slider } from '@material-ui/core';
import { useDataLayerValue } from '../../context/DataLayer';

function Footer( { spotify } ) {

    const [ { token, item, playing }, dispatch ] = useDataLayerValue()

    useEffect(() => {
       spotify.getMyCurrentPlaybackState()
       .then(r =>{
           console.log(r);
           dispatch({
               type: "SET_PLAYING",
               playing:r.is_playing
           })
           dispatch({
               type: "SET_ITEM",
               item: r.item
           })
       })
    }, [spotify])

    const handlePlayPause = () =>{
        if(playing){
            spotify.pause()
            dispatch({
                type:"SET_PLAYING",
                playing: false
            })
        }else{
            spotify.play()
            dispatch({
                type:"SET_PLAYING",
                playing: true
            })
        }
    }

    const skipNext = () =>{
        spotify.skipToNext()
        spotify.getMyCurrentPlayingTrack()
            .then(r =>{
                dispatch({
                    type: "SET_ITEM",
                    item: r.item
                })
                dispatch({
                    type: "SET_PLAYING",
                    playing:true
                })
            })
    }

    const skipPrevious = () => {
        spotify.skipToPrevious();
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      };





    return (
        // <div className="footer">
        //     <div className="footer__left">
        //         <img className= "footer__albumLogo"
        //         src = "data:image/jpeg;base64,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" 

        //         alt=""/>                
        //         <div className="footer__songInfo">
        //             <h4> No song to play </h4>
        //             <p> Sonu nigam </p>
        //         </div>
        //     </div>

        //     {/* footer center */}
        //     <div className="footer__center">
        //         <ShuffleIcon className="footer__orange"/> 
        //         <SkipPreviousIcon onClick={skipNext} className="footer__icon"/> 
        //         <PlayCircleOutlineIcon onClick={handlePlayPause} fontSize="large" className="footer__orange"/> 
        //         <SkipNextIcon className="footer__icon"/> 
        //         <RepeatIcon className="footer__orange"/> 
        //     </div>


        //     {/* footer right  */}
        //     <div className="footer__right">                
        //         <Grid container spacing={2}>
        //             <Grid item >                    
        //                 <PlaylistPlayIcon />
        //             </Grid>                
        //             <Grid item >
        //                 <VolumeDownIcon />
        //             </Grid>
        //             <Grid item xs>
        //                 <Slider aria-labelledby="continuous-slider" />
        //             </Grid>
        //         </Grid>
        //     </div>

        // </div>

        <div className="footer">
        <div className="footer__left">
          {/* <img
            className="footer__albumLogo"
            src={item?.album.images[0].url}
            alt={item?.name}
          /> */}
            <img className= "footer__albumLogo"
                src = "data:image/jpeg;base64,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" 

                alt=""/>
          {item ? (
            <div className="footer__songInfo">
              <h4>{item.name}</h4>
              <p>{item.artists.map((artist) => artist.name).join(", ")}</p>
            </div>
          ) : (
            <div className="footer__songInfo">
              <h4>No song is playing</h4>
              <p>...</p>
            </div>
          )}
        </div>
  
        <div className="footer__center">
          <ShuffleIcon className="footer__green" />
          <SkipPreviousIcon onClick={skipNext} className="footer__icon" />
          {playing ? (
            <PauseCircleOutlineIcon
              onClick={handlePlayPause}
              fontSize="large"
              className="footer__icon"
            />
          ) : (
            <PlayCircleOutlineIcon
              onClick={handlePlayPause}
              fontSize="large"
              className="footer__icon"
            />
          )}
          <SkipNextIcon onClick={skipPrevious} className="footer__icon" />
          <RepeatIcon className="footer__green" />
        </div>
        <div className="footer__right">
          <Grid container spacing={2}>
            <Grid item>
              <PlaylistPlayIcon />
            </Grid>
            <Grid item>
              <VolumeDownIcon />
            </Grid>
            <Grid item xs>
              <Slider aria-labelledby="continuous-slider" />
            </Grid>
          </Grid>
        </div>
      </div>
    )
}

export default Footer
