import { DetailsStyle } from "./styles";
import { useEffect, useState } from "react";
import axios from "axios";
import { UploadImages } from "..";
import { getUrl, adjustPrice, getTags } from "../../utils/showProductsHelpers";
import { Colors } from "..";
import AppContext from "../../../AppContext";
import React, { useContext } from "react";

const ProductDetails = (props) => {
  const value = useContext(AppContext);
  let { darkMode } = value.state;
  const [product, setProduct] = useState();
  const [images, setImages] = useState();
  const [edit, setEdit] = useState(false);
  const [newValue, setNewValue] = useState("");
  const [newTags, setNewTags] = useState("");
  const [tags, setTags] = useState("abc");
  const [bigImage, setBigImage] = useState();
  const [bigImageID, setBigImageID] = useState();
  const [shortDescription, setShortDescription] = useState();
  const [showCompleteDescription, setShowCompleteDescription] = useState(false);

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
        props.getAllProducts();
        if (props.showAll) {
          props.setShowAll(false);
          setTimeout(() => {
            props.setShowAll(true);
          }, 100);
        }
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
  useEffect(() => {
    if (product && product.description.length > 200) {
      let shortDsc = product.description.substring(0, 200).trim();
      setShortDescription(shortDsc);
    }
  }, [product]);
  const deleteProduct = (id) => {
    axios
      .post(`/api/products/delete/`, { id })
      .then((response) => {
        props.setStage(0);
        props.getAllProducts();
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
        props.getAllProducts();
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
    <DetailsStyle Colors={Colors} darkMode={darkMode}>
      {product && (
        <>
          {props.admin && (
            <div className="admin">
              <button onClick={() => deleteProduct(product.id)}>
                Apagar Produto
              </button>
            </div>
          )}
          <div className="product-name">
            <h2>{product.name}</h2>
            {props.admin && (
              <div className="admin">
                <button
                  onClick={() => {
                    setNewValue("");
                    edit !== "name" ? setEdit("name") : setEdit(false);
                  }}
                >
                  Editar Nome
                </button>
                {edit === "name" && (
                  <div className="admin">
                    <div className="newNameInput">
                      <input
                        placeholder="Novo Nome"
                        name="new name"
                        type="text"
                        value={newValue}
                        onChange={(e) => {
                          setNewValue(e.target.value);
                        }}
                      ></input>
                    </div>

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
          <section className="images-and-description">
            <div className="allImages">
              <div className="bigImage-container">
                {images.length > 0 ? (
                  <img src={bigImage ? bigImage : getUrl(images[0].link)}></img>
                ) : (
                  <img src="/placeholder.png" alt="placeholder"></img>
                )}

                {props.admin && images.length > 0 && (
                  <div className="admin">
                    <button
                      onClick={(e) =>
                        removeImage(e, bigImageID ? bigImageID : images[0].id)
                      }
                    >
                      Remover imagem
                    </button>
                  </div>
                )}
              </div>

              <div className="images">
                {images.length > 0 ? (
                  images.map((image, key) => {
                    return (
                      <div
                        key={key}
                        className="image-container"
                        onClick={() => {
                          setBigImageID(image.id);
                          setBigImage(getUrl(image.link));
                        }}
                      >
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
            </div>

            <div className="details">
              {product.activePromotion ? (
                <div className="promoPrice">
                  <h2>{adjustPrice(product.promotionPrice)}</h2>
                  <h3>{adjustPrice(product.price)}</h3>
                </div>
              ) : (
                <div>
                  <h2 className="price">{adjustPrice(product.price)}</h2>
                  {props.admin && (
                    <div className="admin">
                      <button
                        onClick={() => {
                          setNewValue("");
                          edit !== "price" ? setEdit("price") : setEdit(false);
                        }}
                      >
                        Editar Preço
                      </button>
                    </div>
                  )}
                  {edit === "price" && (
                    <div className="admin">
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
              <div className="product-description">
                {shortDescription ? (
                  <>
                    <p>
                      {showCompleteDescription
                        ? product.description
                        : <>{shortDescription}...</>}
                    </p>
                    <span
                      className="showCompleteDescription"
                      onClick={() =>
                        setShowCompleteDescription(!showCompleteDescription)
                      }
                    >
                      {showCompleteDescription ? (
                        <>Ocultar descrição completa</>
                      ) : (
                        <>Mostrar descrição completa</>
                      )}
                    </span>
                  </>
                ) : (
                  <p>{product.description}</p>
                )}

                {props.admin && (
                  <div className="admin">
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
                  </div>
                )}
                {edit === "description" && (
                  <div className="admin">
                    <textarea
                      placeholder="Nova Descrição"
                      name="new description"
                      type="text"
                      value={newValue}
                      onChange={(e) => {
                        setNewValue(e.target.value);
                      }}
                    ></textarea>
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
              <div className="tags-container">
                {tags.map((tag, key) => {
                  return (
                    <span key={key} className="tag">
                      {tag}
                    </span>
                  );
                })}
              </div>
              {props.admin && (
                <div className="admin">
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
                <div className="admin">
                  <textarea
                    placeholder="Novas Tags"
                    value={newTags}
                    name="new price"
                    onChange={(e) => {
                      setNewTags(e.target.value);
                    }}
                    type="text"
                  ></textarea>
                  <button
                    onClick={(e) => editProduct(e, product.id, "tags", newTags)}
                  >
                    Salvar
                  </button>
                </div>
              )}
              {!props.admin && (
                <div className="add-btn">
                  <button onClick={props.addToCart}>Add to cart</button>
                </div>
              )}
            </div>
          </section>
          {props.admin && (
            <div className="admin">
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
