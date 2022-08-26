import { useState } from "react";
import axios from "axios";

const UploadImages = (props) => {
  const [images, setImages] = useState([]);
  const [alt, setAlt] = useState('');
  const uploadImages = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', images)
    const headers = {
        'headers':{
            'Content-Type': 'application/json',
        }
    }
    axios
      .post("/api/products/uploadimages", formData, headers)
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });

    console.log(typeof images);
    console.log(images);
  };

  return (
    <div>
      <form onSubmit={uploadImages}>
        <label to="images">Upload de imagens</label>
        <input
          type="file"
          id="imageInput"
          accept=".png .jpeg .webp .jpg"
          name="image"
          onChange={(e) => setImages(e.target.files[0])}
        />
        <input type='text' value={alt} ></input>
        <button type="submit">enviar imagens</button>
      </form>
      <div></div>
    </div>
  );
};

export default UploadImages;
