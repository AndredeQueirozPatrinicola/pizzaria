import './header.css';

function Header(){
    return(
        <nav className='nav'>
            <div className='logo-div centralize-nav-divs'>Logo</div>
            <ul className='nav-list centralize-nav-divs'>
                <li>Piulzza</li>
                <li>Cardapio</li>
                <li>Delivery</li>
                <li>Contato</li>
            </ul>
        </nav>
    )
}

export default Header;