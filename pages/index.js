import Head from "next/head";
import React, { useState } from "react";
import axios from "axios";
import { UploadImages } from "../src/components";

export default function Home() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [bar_code, setBar_code] = useState("");
  const [tags, setTags] = useState("");
  function submitProduct() {
    let data = { name, price, description, bar_code };
    axios
      .post("/api/products/sendproduct", data)
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <div>
      <Head>
        <title>Loja Virtual</title>
        <meta
          name="description"
          content="homepage for the e-commerce website"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>new product</h1>
      <input
      required
        type="text"
        name="name"
        value={name}
        placeholder="Produto"
        onChange={(e) => setName(e.target.value)}
      ></input>
      <input
      required
        type="number"
        name="price"
        value={price}
        placeholder="Preço"
        onChange={(e) => setPrice(e.target.value)}
      ></input>
      <input
      required
        type="text"
        name="description"
        value={description}
        placeholder="Descrição"
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <input
      required
        type="text"
        name="bar_code"
        value={bar_code}
        placeholder="Código de barras"
        onChange={(e) => setBar_code(e.target.value)}
      ></input>
      <input

        type="text"
        name="tags"
        value={tags}
        placeholder="tags separadas por vírgula"
        onChange={(e) => setTags(e.target.value)}
      ></input>
      <button onClick={submitProduct}>Cadastrar Produto</button>
      <UploadImages productid='2'/>
    </div>
  );
}
