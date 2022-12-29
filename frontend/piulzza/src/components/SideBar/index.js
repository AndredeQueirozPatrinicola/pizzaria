import React from "react";
import { IoIosArrowForward } from "react-icons/io"
import { IoIosArrowBack } from "react-icons/io"
import './SideBar.css'
import SideBarStruc from "../SideBarStruc";

class SideBar extends React.Component 
{
    constructor(props) 
    {
        super(props);
        this.state = {
            isToggleOn: true
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
        const className = this.state.isToggleOn ? 'icone-side-bar-perfil is-toggled' : 'icone-side-bar-perfil';
        if(!this.state.isToggleOn){
            return(
                <div className="icone-suporte" style={{height: window.screen.height}}>
                    <div className={className}>
                        <IoIosArrowForward 
                            onClick={this.handleClick} 
                        />
                    </div>
                </div>
            )
        }
        else{
            return(
                <div className="side-bar" style={{height: window.screen.height}}>
                    <div className={className}>
                        <IoIosArrowBack
                            onClick={this.handleClick}
                        />
                    </div>
                    <SideBarStruc/>
                </div>
            )
        }  
    }
}

export default SideBar;

