import React, { useEffect, useState } from "react";
import api from "./index";

export default function Pizza() {
  const [pizza, setPizza] = useState();

  useEffect(() => {
    api
      .get("")
      .then((response) => setPizza(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <div className="App">
      <p>{pizza}</p>
    </div>
  );
}