import React from "react";
import './SideBarPerfil.css'
import CardSideBar from "../CardSideBar";

class SideBarPerfil extends React.Component 
{
    render()
    {
        return(
            <div className="side-bar-perfil">
                <CardSideBar/>
            </div>
        )
    }
}

export default SideBarPerfil;