import React from "react";
import './SideBarPerfil.css'
import CardSideBar from '../CardSideBar'
import {RiAccountCircleFill} from 'react-icons/ri'
import {SlNote} from 'react-icons/sl'
import {BsFillTelephoneInboundFill} from 'react-icons/bs'
class SideBarPerfil extends React.Component 
{
    constructor(props) 
    {
        super(props);
        this.state = {
            isToggleOn: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() 
    {    
        this.setState(prevState => (
            {
                isToggleOn: !prevState.isToggleOn 
            }
        )); 
    }

    render()
    {
        return(
            <div className="card-icones-perfil">
                
                <CardSideBar titulo='Perfil' ><RiAccountCircleFill/></CardSideBar>
                <CardSideBar titulo='Pedidos'><SlNote/></CardSideBar>
                <CardSideBar titulo='Contato'><BsFillTelephoneInboundFill/></CardSideBar>

            </div>
        )
    }
}

export default SideBarPerfil;