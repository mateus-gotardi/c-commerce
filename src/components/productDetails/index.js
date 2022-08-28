import { DetailsStyle } from "./styles";
import { useEffect, useState } from "react";
import axios from "axios";
import { UploadImages } from "..";
import { getUrl, adjustPrice, getTags } from "../../utils/showProductsHelpers";

const ProductDetails = (props) => {
  const [product, setProduct] = useState();
  const [images, setImages] = useState();
  const [edit, setEdit] = useState(false);
  const [newValue, setNewValue] = useState("");
  const [newTags, setNewTags] = useState("");
  const [tags, setTags] = useState("abc");

  const getProduct = () => {
    axios
      .post("/api/products/getone", { id: props.productid })
      .then((response) => {
        setProduct(response.data.product);
        setImages(response.data.productImages);
        setTags(getTags(response.data.product.tags));
        setNewTags(response.data.product.tags);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const editProduct = (e, id, field, newValue) => {
    e.preventDefault();
    axios
      .put(`/api/products/update/`, { id, field, newValue })
      .then((response) => {
        setProduct(response.data.product);
        props.setStage(0);
        setTimeout(() => {
          props.setStage(1);
        }, 50);
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
        props.setStage(0);
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
  };
  const removeImage = (e, id) => {
    e.preventDefault();
    axios
      .post(`/api/products/deleteimage/`, { id })
      .then((response) => {
        props.setStage(0);
        setTimeout(() => {
          props.setStage(1);
        }, 100);
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
  };

  return (
    <DetailsStyle>
      {product && (
        <>
          {props.admin && (
            <button onClick={() => deleteProduct(product.id)}>
              Apagar Produto
            </button>
          )}
          <div className="product-name">
            <h2>{product.name}</h2>
            {props.admin && (
              <div>
                <button
                  onClick={() => {
                    setNewValue("");
                    edit !== "name" ? setEdit("name") : setEdit(false);
                  }}
                >
                  Editar Nome
                </button>
                {edit === "name" && (
                  <div>
                    <input
                      placeholder="Novo Nome"
                      name="new name"
                      type="text"
                      value={newValue}
                      onChange={(e) => {
                        setNewValue(e.target.value);
                      }}
                    ></input>
                    <button
                      onClick={(e) =>
                        editProduct(e, product.id, "name", newValue)
                      }
                    >
                      Salvar
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
          <div>
            {images.length > 0 ? (
              images.map((image, key) => {
                return (
                  <div key={key} className="image-container">
                    <img
                      key={key}
                      src={getUrl(image.link)}
                      alt={image.alt}
                    ></img>
                    {props.admin && (
                      <button onClick={(e) => removeImage(e, image.id)}>
                        Remover imagem
                      </button>
                    )}
                  </div>
                );
              })
            ) : (
              <div className="image-container">
                <img src="/placeholder.png" alt="placeholder"></img>
              </div>
            )}
          </div>
          <div className="product-description">
            <p>{product.description}</p>
            {props.admin && (
              <button
                onClick={() => {
                  setNewValue("");
                  edit !== "description"
                    ? setEdit("description")
                    : setEdit(false);
                }}
              >
                Alterar Descrição
              </button>
            )}
            {edit === "description" && (
              <div>
                <input
                  placeholder="Nova Descrição"
                  name="new description"
                  type="text"
                  value={newValue}
                  onChange={(e) => {
                    setNewValue(e.target.value);
                  }}
                ></input>
                <button
                  onClick={(e) =>
                    editProduct(e, product.id, "description", newValue)
                  }
                >
                  Salvar
                </button>
              </div>
            )}
          </div>

          {product.activePromotion ? (
            <div className="promoPrice">
              <h2>{adjustPrice(product.promotionPrice)}</h2>
              <h3>{adjustPrice(product.price)}</h3>
            </div>
          ) : (
            <div className="price">
              <h2>{adjustPrice(product.price)}</h2>
              {props.admin && (
                <button
                  onClick={() => {
                    setNewValue("");
                    edit !== "price" ? setEdit("price") : setEdit(false);
                  }}
                >
                  Editar Preço
                </button>
              )}
              {edit === "price" && (
                <div>
                  <input
                    placeholder="Novo Preço"
                    value={newValue}
                    name="new price"
                    onChange={(e) => {
                      setNewValue(e.target.value);
                    }}
                    type="number"
                  ></input>
                  <button
                    onClick={(e) =>
                      editProduct(e, product.id, "price", newValue)
                    }
                  >
                    Salvar
                  </button>
                </div>
              )}
            </div>
          )}
          <div className="tags">
            {tags.map((tag, key) => {
              return <span key={key}>{tag}</span>;
            })}
            {props.admin && (
              <div>
                <button
                  onClick={() => {
                    setNewValue("");
                    edit !== "tags" ? setEdit("tags") : setEdit(false);
                  }}
                >
                  Editar Tags
                </button>
              </div>
            )}
            {edit === "tags" && (
              <div>
                <input
                  placeholder="Novas Tags"
                  value={newTags}
                  name="new price"
                  onChange={(e) => {
                    setNewTags(e.target.value);
                  }}
                  type="text"
                ></input>
                <button
                  onClick={(e) => editProduct(e, product.id, "tags", newTags)}
                >
                  Salvar
                </button>
              </div>
            )}
          </div>
          {props.admin && (
            <div>
              <UploadImages
                productid={props.productid}
                setStage={props.setStage}
                setShowAll={props.setShowAll}
                showAll={props.showAll}
              />
            </div>
          )}
        </>
      )}
    </DetailsStyle>
  );
};
export default ProductDetails;
