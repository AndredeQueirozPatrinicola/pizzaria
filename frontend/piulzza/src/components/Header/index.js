import './header.css';
// import logo from './logo.jpeg';
import logo from './logo1.png';

function Header(){
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

export default Header;