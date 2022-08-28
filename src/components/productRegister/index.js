import { RegisterProdStyle } from "./styles";
import { useState } from "react";
import axios from "axios";
import AppContext from "../../../AppContext";
import React, { useContext } from "react";
import { Colors } from "..";

const ProductRegister = (props) => {
  const value = useContext(AppContext);
  let { darkMode } = value.state;
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [bar_code, setBar_code] = useState("");
  const [tags, setTags] = useState("");
  function submitProduct() {
    let data = { name, price, description, bar_code, tags };
    axios
      .post("/api/products/sendproduct", data)
      .then((response) => {
        props.setRegisteredProduct(response.data);
        props.setStage(1);
        if (props.showAll) {
          props.setShowAll(false);
          setTimeout(() => {
            props.setShowAll(true);
          }, 100);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <RegisterProdStyle Colors={Colors} darkMode={darkMode}>
      <h1>Cadastrar Novo Produto</h1>
      <label>Nome:</label>
      <input
        required
        type="text"
        name="name"
        value={name}
        placeholder="Produto"
        onChange={(e) => setName(e.target.value)}
      ></input>
      <label>Preço:</label>
      <input
        required
        type="number"
        name="price"
        value={price}
        placeholder="Preço"
        onChange={(e) => setPrice(e.target.value)}
      ></input>
      <label>Descrição:</label>
      <textarea
        required
        type="text"
        name="description"
        value={description}
        placeholder="Descrição"
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <label>Código de barras:</label>
      <input
        required
        type="text"
        name="bar_code"
        value={bar_code}
        placeholder="Código de barras"
        onChange={(e) => setBar_code(e.target.value)}
      ></input>
      <label>Tags:</label>
      <input
        type="text"
        name="tags"
        value={tags}
        placeholder="tags separadas por vírgula"
        onChange={(e) => setTags(e.target.value)}
      ></input>
      <button onClick={submitProduct}>Cadastrar Produto</button>
    </RegisterProdStyle>
  );
};

export default ProductRegister;
