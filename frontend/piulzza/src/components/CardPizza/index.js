import './CardPizza.css';
import React from "react";
import { TailSpin } from "react-loader-spinner";
import { CiPizza } from 'react-icons/ci';

class CardPizza extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [],
            DataisLoaded: false
        };
    }

    componentDidMount() {
        fetch(
            "http://127.0.0.1:8000/api/pizza/")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }
    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) {
            return (
                <div className='spinner-card-pizza'>
                    <TailSpin
                        height="80"
                        width="80"
                        color="#840d23"
                        ariaLabel="tail-spin-loading"
                        radius="1"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                    />
                </div>
            );
        }
        else {
            console.log(items);
            return (
                <div className="card-pizza-main">
                    {
                        
                        items.map((item) => {
                                return (
                                    <ol key={item.id} className="card-pizza">
                                        <img className='imagem-card-pizza' src={item.imagem} alt="Imagem pizza"></img>
                                        <li className='nome-pizza'>{item.nome}</li>
                                        <div className='sabores-parent'>
                                            {
                                                item.sabores.map((sabor) => {
                                                    if (item.sabores.indexOf(sabor) === item.sabores.length - 1) {
                                                        return <li key={sabor.id} className='sabores'>{sabor.nome}.</li>
                                                    }
                                                    else {
                                                        return <li key={sabor.id} className='sabores'>{sabor.nome}, </li>
                                                    }
                                                })
                                            }
                                        </div>
                                        <div className='icon-pizza'>
                                            <li className='preco'>
                                                <p>
                                                    R$: {item.preco}
                                                </p>
                                            </li>
                                            <div className='button-pizza'>
                                                <CiPizza
                                                    color='#black'
                                                />
                                            </div>
                                        </div>
                                    </ol>
                                )
                        })
                    }
                </div>
            );
        }
    }
}

export default CardPizza;