import React from "react";
import { IoIosArrowForward } from "react-icons/io"
import { IoIosArrowBack } from "react-icons/io"
import './SideBarIcon.css'

class SideBarIcon extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {    
        this.setState(prevState => (
            {
                isToggleOn: !prevState.isToggleOn 
            }
        )); 
    }

    render(){
        const className = this.state.isToggleOn ? 'icone-side-bar-perfil is-toggled' : 'icone-side-bar-perfil';
        if(!this.state.isToggleOn){
            return(
                <div className={className}>
                    <IoIosArrowForward 
                        onClick={this.handleClick} 
                    />
                </div>
            )
        }
        else{
            return(
                <div>
                    <div className="side-bar" style={{height: window.screen.height}}>
                        <div className={className}>
                            <IoIosArrowBack
                                onClick={this.handleClick}
                            />
                        </div>
                    </div>
                </div>
            )
        }
        
    }
}

export default SideBarIcon;

