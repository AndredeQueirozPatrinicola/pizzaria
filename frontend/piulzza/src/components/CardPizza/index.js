import './CardPizza.css';
import placeholder from './pizza-placeholder.jpg';
import placeholder2 from './frango.jpg';
import placeholder3 from './pizza-templ.jpg';
import React from "react";
import { TailSpin } from "react-loader-spinner";

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
        const array = [placeholder, placeholder2, placeholder3];
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
            return (
                <div className="card-pizza-main">
                    {
                        items.map((item) => {
                                return (
                                    <ol key={item.id} className="card-pizza">
                                        <img className='imagem-card-pizza' src={array[Math.floor(Math.random() * array.length)]} alt="Imagem pizza"></img>
                                        <li className='nome-pizza'>{item.nome}</li>
                                        <div>
                                            {
                                                item.sabores.map((sabor) => {
                                                    if (item.sabores.indexOf(sabor) === item.sabores.length) {
                                                        return <li key={sabor.id} className='sabores'>{sabor.nome}.</li>
                                                    }
                                                    else {
                                                        return <li key={sabor.id} className='sabores'>{sabor.nome}, </li>
                                                    }
                                                })
                                            }
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