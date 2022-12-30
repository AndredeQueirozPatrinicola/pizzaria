import './CardPizza.css';
import React from "react";
import { TailSpin } from "react-loader-spinner";
import { CiPizza } from 'react-icons/ci';
import getApi from '../../api';

class CardPizza extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [],
            DataisLoaded: false
        };
    }

    componentDidMount() {
        const api = getApi('pizza')
        api.then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }
    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded || !items.length) {
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
                                            <a className='button-pizza' href='/'>
                                                <CiPizza/>
                                            </a>
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