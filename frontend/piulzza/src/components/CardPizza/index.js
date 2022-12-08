import './CardPizza.css';
import React, { useEffect, useState } from "react";

class CardPizza extends React.Component {

    // Constructor 
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            DataisLoaded: false
        };
    }

    // ComponentDidMount is used to
    // execute the code 
    componentDidMount() {
        fetch(
          "http://127.0.0.1:8000/api/pizza/")
            .then((res) => res.json())
            .then((json) => {
                console.log(json)
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }
    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div> ;

        return (
        <div className = "">
            {
                items.map((item) => ( 
                <ol key = { item.id } >
                    id: { item.id }<br/>
                    Nome_pizza: { item.nome }<br/>
                    Sabores: 
                    </ol>
                ))
            }
        </div>
    );
}
}

export default CardPizza;