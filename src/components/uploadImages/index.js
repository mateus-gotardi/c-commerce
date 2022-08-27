import { useState } from "react";
import axios from "axios";

const UploadImages = (props) => {
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
    <div>
      <form onSubmit={uploadImages}>
        <label to="file">Upload de imagens</label>
        <input
          required
          type="file"
          id="imageInput"
          name="file"
          onChange={(e) => setImages(e.target.files[0])}
        />
        <br />
        <label>Texto alternativo</label>
        <input
          placeholder="alt"
          required
          type="text"
          value={alt}
          onChange={(e) => setAlt(e.target.value)}
        ></input>
        <br />
        <button type="submit">enviar imagem</button>
      </form>
      <div></div>
    </div>
  );
};

export default UploadImages;
