import React from "react";
import './CarSideBar.css'

class CardSideBar extends React.Component 
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
        const className = this.state.isToggleOn ? 'side-bar-items is-toggled' : "side-bar-items";
        const classNameItem = this.state.isToggleOn ? 'titulo-item is-toggled' : "titulo-item";
        const classNameContent = this.state.isToggleOn ? "conteudo-card is-toggled" : "conteudo-card";

        return(
                <div className={className} >
                   {this.props.children} <p onClick={this.handleClick} className={classNameItem}>{this.props.titulo}</p>
                   <div className={classNameContent}>
                        <ul>
                            {/* <li>jhjhg</li>
                            <li>gdsfs</li>
                            <li>gfdgf</li>
                            <li>ddddd</li>
                            <li>dsadas</li> */}
                        </ul>

                   </div>
                </div>
            )
    }
}

export default CardSideBar;