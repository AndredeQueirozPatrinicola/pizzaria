import RoutesApp from './routes';
import Pizza from './api/pizza/teste'
import Api from './api/main/index';

// function App() {
//   const pizza = Pizza()

//   return (
//     <div className="App">
//       <RoutesApp/>
//       <p>{pizza}</p>
//     </div>
//   );
// }

// export default App;

import React from "react";
// import './App.css';
class App extends React.Component {
   
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
          "http://127.0.0.1:8000/api/sabores/")
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
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div> ;
   
        return (
        <div className = "App">
            <h1> Fetch data from an api in react </h1>  {
                items.map((item) => ( 
                <ol key = { item.id } >
                    id: { item.id }<br/>
                    Nome_pizza: { item.nome }, 
                    </ol>
                ))
            }
        </div>
    );
}
}
   
export default App;