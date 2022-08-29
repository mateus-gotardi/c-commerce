import AppContext from "../../../AppContext";
import React, { useContext, useEffect, useState } from "react";
import { ShowStyle } from "./styles";
import { getUrl, adjustPrice, getTags } from "../../utils/showProductsHelpers";
import { useRouter } from "next/router";
import { Colors, Filters } from "..";
import { AiOutlineSearch } from "react-icons/ai";
import NoResults from "../../SVG/Loading";

const ShowProducts = (props) => {
  const [search, setSearch] = useState("");
  const value = useContext(AppContext);
  let { darkMode } = value.state;
  const router = useRouter();
  const [allTags, setAllTags] = useState();
  const [tagsFilter, setTagsFilter] = useState([]);
  const { products, productImages, refresh } = props;

  const getAllTags = () => {
    let tmpAll = [];
    products.map((item) => {
      let tags = getTags(item.tags);
      tmpAll.push(...tags);
    });
    let noRepeat = tmpAll.filter((x, i) => tmpAll.indexOf(x) === i);
    noRepeat.sort();
    setAllTags(noRepeat);
  };
  useEffect(() => {
    if (props.products) getAllTags();
  }, [props]);
  return (
    <ShowStyle Colors={Colors} darkMode={darkMode}>
      {allTags && (
        <Filters
          allTags={allTags}
          tagsFilter={tagsFilter}
          setTagsFilter={setTagsFilter}
          setRefresh={props.setRefresh}
        />
      )}
      <div className="search">
        <AiOutlineSearch />
        <input
          type="search"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        ></input>
      </div>

      <div className="products-container">
        {products !== null && !refresh ? (
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
            const verifyFilter = () => {
              const verifyTags = () => {
                let conclusion = 0;
                tags.map((tag) => {
                  if (tagsFilter.includes(tag)) {
                    conclusion += 1;
                  }
                });
                return conclusion == tagsFilter.length;
              };
              if (!verifyTags()) return false;
              else if (search.length > 0) {
                let name = product.name.toLowerCase().replace(/ /gm, "");
                let tmpSearch = search.toLowerCase().replace(/ /gm, "");
                if (name.includes(tmpSearch)) {
                  return true;
                } else return false;
              } else {
                return true;
              }
            };
            if (verifyFilter()) {
              return (
                <div key={key} className="product" onClick={loadDetails}>
                  {images.length > 0 ? (
                    <div className="image">
                      <img
                        src={getUrl(images[0].link)}
                        alt={images[0].alt}
                      ></img>
                    </div>
                  ) : (
                    <div className="image">
                      <img src="/placeholder.png" alt="placeholder"></img>
                    </div>
                  )}
                  <div className="details">
                    {product.activePromotion ? (
                      <div>
                        <h2>{adjustPrice(product.promotionPrice)}</h2>
                        <h3>{adjustPrice(product.price)}</h3>
                      </div>
                    ) : (
                      <div>
                        <h2 className="price">{adjustPrice(product.price)}</h2>
                      </div>
                    )}
                    <h3 className="product-name">{product.name}</h3>
                    <div className="tags-container">
                      {tags.map((tag, key) => {
                        return (
                          <span key={key} className="tag">
                            {tag}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            }
          })
        ) : (
          <NoResults></NoResults>
        )}
      </div>
    </ShowStyle>
  );
};

export default ShowProducts;
