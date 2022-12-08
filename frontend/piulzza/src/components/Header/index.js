import './header.css';

function Header(){
    return(
        <nav className='nav'>
            <div className='logo-div centralize-nav-divs'>
                <img alt="Logo"></img>
            </div>
            <ul className='nav-list centralize-nav-divs'>
                <li><a href="/piulzza">Piulzza</a></li>
                <li><a href="/cardapio">Cardapio</a></li>
                <li><a href="/delivery">Delivery</a></li>
                <li><a href="/contato">Contato</a></li>
            </ul>
        </nav>
    )
}

export default Header;