import React from 'react';
import './App.css';
import axios from 'axios';

function App() {
  axios.get('/api/pizza/')
  .then(function (response) {
      console.log(response)
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    console.log("tei")
  });

    return (
      <div className="App">
        Coco
      </div>
    );
  }
  
  export default App;