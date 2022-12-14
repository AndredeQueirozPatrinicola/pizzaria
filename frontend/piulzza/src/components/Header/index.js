import './header.css';
// import logo from './logo.jpeg';
import logo from './logo1.png';
import React from "react";

class Header extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [],
            DataisLoaded: false
        };
    }

    render(){
        const dev = window.location.host;
        if (dev === "127.0.0.1:3000"){
            return(
                <nav className='nav'>
                    <div className='logo-div centralize-nav-divs'>
                        <a href='/'>
                            <img className='logo' alt="Logo" src={logo}></img>
                        </a>
                    </div>
                    <ul className='nav-list centralize-nav-divs'>
                        <li><a href="/piulzza">Piulzza</a></li>
                        <li><a href="/cardapio">Cardapio</a></li>
                        <li><a href="/delivery">Delivery</a></li>
                        <li><a href="/contato" id='contato'>Contato</a></li>
                    </ul>
                </nav>
            ) 
        }
        else{
            return (
                <nav className='nav'>
                    <div className='logo-div centralize-nav-divs'>
                        <a href='/'>
                            <img className='logo' alt="Logo" src={"http://127.0.0.1:8000/frontend/piulzza/build" + logo}></img>
                        </a>
                    </div>
                    <ul className='nav-list centralize-nav-divs'>
                        <li><a href="/piulzza">Piulzza</a></li>
                        <li><a href="/cardapio">Cardapio</a></li>
                        <li><a href="/delivery">Delivery</a></li>
                        <li><a href="/contato" id='contato'>Contato</a></li>
                    </ul>
                </nav>
            )
        }
    }
}

export default Header;