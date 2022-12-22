import './Cardapio.css';
import CardPizza from '../CardPizza';
import TituloCardapio from '../TituloCardapio';

function Cardapio(){
    return(
        <section className='main-cardapio'>

            <TituloCardapio/>

            <CardPizza/>    

        </section>
    )
}

export default Cardapio;