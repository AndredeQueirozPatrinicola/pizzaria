import './header.css';
// import logo from './logo.jpeg';
import logo from './logo.png';
import React from "react";
import SideBar from '../SideBar';

class Header extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [],
            DataisLoaded: false
        };

    }

    render(){
        const host = window.location.host;
        const imgSrc = host === "127.0.0.1:3000" || host === "localhost:3000" ? logo : "/frontend/piulzza/build/static/media/logo.png";
        return(
            <nav className='nav'>
                <div className='logo-div centralize-nav-divs'>

                    <SideBar/>

                    <a href='/'>
                        <img className='logo' alt="Logo" src={imgSrc}></img>
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

export default Header;