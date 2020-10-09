import React   from 'react'
import SideBarOption from "../SideBarOption"
import HomeIcon from "@material-ui/icons/Home"
import SearchIcon from "@material-ui/icons/Search"
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic"
import { useDataLayerValue } from "../../context/DataLayer"

import "./style.css"

function SideBar() {

    const[{ playlists }, dispatch ] = useDataLayerValue()
    console.log("Playlists", playlists );

    return (
        <div className="sidebar">
            <img className="sidebar__logo"
            src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="" />

            <SideBarOption Icon = { HomeIcon } title = "Home" />
            <SideBarOption Icon = { SearchIcon } title = "Search"/>
            <SideBarOption Icon = { LibraryMusicIcon } title = "Library"/>
            <br />
            <strong className="sidebar__title"> PLAYLISTS</strong>
            <hr />

            { playlists?.items?.map(playlist =>(
                <SideBarOption title={playlist.name} />
            ))}
        </div>
    )
}

export default SideBar
