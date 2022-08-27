import axios from "axios";
import React, { useState, useEffect } from "react";
import { ShowStyle } from "./styles";
import { getUrl, adjustPrice, getTags } from "../../utils/showProductsHelpers";
import { useRouter } from "next/router";

const ShowProducts = (props) => {
  const router = useRouter();
  const [products, setProducts] = useState(null);
  const [productImages, setProductImages] = useState(null);

  const getAllProducts = () => {
    axios
      .get("/api/products/getall")
      .then((response) => {
        setProductImages(response.data.productImages);
        setProducts(response.data.products);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <ShowStyle>
      {products !== null &&
        products.map((product, key) => {
          let tags;
          if (product.tags.length > 0) {
            tags = getTags(product.tags);
          }
          let images = [];
          productImages.map((image) => {
            if (image.productid === product.id) {
              images.push(image);
            }
          });
          const loadDetails = () => {
            if (!props.admin) {
              router.push("/product?productid=" + product.id);
            } else {
              props.showFunction(product.id);
            }
          };
          return (
            <div key={key} className="product" onClick={loadDetails}>
              {images.length > 0 ? (
                <div className="image">
                  <img src={getUrl(images[0].link)} alt={images[0].alt}></img>
                </div>
              ) : (
                <div className="image">
                  <img src="/placeholder.png" alt="placeholder"></img>
                </div>
              )}
              {product.activePromotion ? (
                <div>
                  <h2>{adjustPrice(product.promotionPrice)}</h2>
                  <h3>{adjustPrice(product.price)}</h3>
                </div>
              ) : (
                <div>
                  <h2>{adjustPrice(product.price)}</h2>
                </div>
              )}
              <h3>{product.name}</h3>
              {tags.map((tag, key) => {
                return (<span key={key}>{tag}</span>);
              })}
            </div>
          );
        })}
    </ShowStyle>
  );
};

export default ShowProducts;
