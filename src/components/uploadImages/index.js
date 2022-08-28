import { useState } from "react";
import axios from "axios";
import { UploadStyle } from "./styles";
import AppContext from "../../../AppContext";
import React, { useContext } from "react";
import { Colors } from "..";

const UploadImages = (props) => {
  const value = useContext(AppContext);
  let { darkMode } = value.state;
  const [images, setImages] = useState([]);
  const [alt, setAlt] = useState("");
  const uploadImages = (e) => {
    e.preventDefault();
    const formData = new FormData();
    const infos = JSON.stringify({ alt, productid: props.productid });
    formData.append("file", images);
    formData.append("info", infos);
    const headers = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios
      .post("/api/products/uploadimages", formData, headers)
      .then((response) => {
        console.log(response);
        props.setStage(0);
        setTimeout(() => {
          props.setStage(1);
        }, 50);
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
    console.log(images);
  };

  return (
    <UploadStyle Colors={Colors} darkMode={darkMode}>
      <h2>Adicionar Imagem:</h2>
      <form onSubmit={uploadImages}>
        <label for="file" className="imageLabel">
          Selecionar Imagem
          <input
            required
            type="file"
            id="file"
            name="file"
            onChange={(e) => setImages(e.target.files[0])}
          />
        </label>
        <br />
        <br />
        <label>Texto alternativo</label>
        <input
          placeholder="Descrição da imagem"
          required
          type="text"
          value={alt}
          onChange={(e) => setAlt(e.target.value)}
        ></input>
        <br />
        <button type="submit">enviar imagem</button>
      </form>
    </UploadStyle>
  );
};

export default UploadImages;
