import { DetailsStyle } from "./styles";
import { useEffect, useState } from "react";
import axios from "axios";
import { UploadImages } from "..";
import { getUrl, adjustPrice } from "../../utils/showProductsHelpers";

const ProductDetails = (props) => {
  const [product, setProduct] = useState();
  const [images, setImages] = useState();
  const getProduct = () => {
    axios
      .post("/api/products/getone", { id: props.productid })
      .then((response) => {
        setProduct(response.data.product);
        setImages(response.data.productImages);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    getProduct();
  }, []);
  const deleteProduct = (id) => {
    axios
      .post(`/api/products/delete/`, { id })
      .then((response) => {
        getAllProducts();
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <DetailsStyle>
      {product && (
        <>
          {props.admin && (
            <button onClick={() => deleteProduct(product.id)}>Deletar</button>
          )}
          <h2>{product.name}</h2>
          <div>
            {images.length > 0 ? (
              images.map((image, key) => {
                return (
                  <div className="image-container">
                    <img
                      key={key}
                      src={getUrl(image.link)}
                      alt={image.alt}
                    ></img>
                  </div>
                );
              })
            ) : (
              <div className="image-container">
                <img src="/placeholder.png" alt="placeholder"></img>
              </div>
            )}
          </div>
          <p>{product.description}</p>
          {product.activePromotion ? (
            <div className="promoPrice">
              <h2>{adjustPrice(product.promotionPrice)}</h2>
              <h3>{adjustPrice(product.price)}</h3>
            </div>
          ) : (
            <div className="price">
              <h2>{adjustPrice(product.price)}</h2>
            </div>
          )}
          {props.admin && <UploadImages productid={props.productid} />}
        </>
      )}
    </DetailsStyle>
  );
};
export default ProductDetails;
