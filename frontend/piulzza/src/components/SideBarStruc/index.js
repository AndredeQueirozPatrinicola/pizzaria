import React from "react";
import './SideBarStruc.css'
import SideBarPerfil from "../SideBarPerfil";


class SideBarStruc extends React.Component 
{
    render()
    {
        return(
            <div className="sidebar-perfil" style={{height: window.screen.height - 150}}>
                <SideBarPerfil/>
            </div>
        )
    }
}

export default SideBarStruc;