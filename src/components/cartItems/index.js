import { CartStyles } from "./styles";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { getUrl, adjustPrice } from "../../utils/showProductsHelpers";
import { useRouter } from "next/router";

const CartItemsDetails = () => {
  const router = useRouter();
  const [token, setToken] = useState();
  const [allProducts, setAllProducts] = useState();
  const [cartItems, setCartItems] = useState();
  const [localCartItems, setLocalCartItems] = useState();
  const [totalPrice, setTotalPrice] = useState(0);
  const getAllProducts = () => {
    axios
      .get("/api/products/getall")
      .then((response) => {
        setAllProducts(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    getAllProducts();
  }, []);
  const getLocalCartItems = () => {
    let localCart = localStorage.getItem("cart");
    if (localCart) {
      localCart = JSON.parse(localCart);
      setLocalCartItems(localCart);
    } else {
      console.log("no items");
    }
  };
  const getCartItems = (token) => {
    axios
      .get("/api/users/cart", {
        headers: { "x-access-token": token },
      })
      .then((response) => {
        setCartItems(response.data.items);
        console.log(response.data.items);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const removeItemFromDB = (e, id) => {
    e.preventDefault();
    axios
      .post(
        `/api/users/removefromcart/`,
        { id },
        {
          headers: { "x-access-token": token },
        }
      )
      .then((response) => {
        console.log(response.data);
        setTimeout(() => {
          router.push("/refresh?page=cart");
        }, 50);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const removeItemFromLocal = (e, id) => {
    e.preventDefault();
    let cartSTR = localStorage.getItem("cart");
    let cartOBJ = JSON.parse(cartSTR);
    let index = cartOBJ.indexOf(id);
    cartOBJ.splice(index, 1);
    cartSTR = JSON.stringify(cartOBJ);
    localStorage.setItem("cart", cartSTR);
    router.push("/refresh?page=cart");
  };

  useEffect(() => {
    let token = Cookies.get("token");
    if (token) {
      setToken(token);
      getCartItems(token);
    } else {
      getLocalCartItems();
    }
  }, []);

  const getTotal = (cart) => {
    let tempTotal = 0;
    setTimeout(
      () => {
        setTotalPrice(tempTotal);
      },
      cart.map((item, key) => {
        let productToShow = allProducts.products.filter((obj) => {
          if (item.productid) {
            return obj.id == item.productid;
          } else {
            return obj.id == item;
          }
        });
        if (productToShow.length > 0) {
          let price = parseFloat(productToShow[0].price);
          tempTotal += price;
        }
      })
    );
  };
  if (localCartItems && allProducts) {
    getTotal(localCartItems);
  } else if (cartItems && allProducts) {
    getTotal(cartItems);
  }

  const ListOfProducts = (props) => {

    return props.cart.map((item, key) => {
      let productToShow = allProducts.products.filter((obj) => {
        if (item.productid) {
          return obj.id == item.productid;
        } else {
          return obj.id == item;
        }
      });
      let image = allProducts.productImages.filter((obj) => {
        if (item.productid) {
          return obj.productid == item.productid;
        } else {
          return obj.productid == item;
        }
      });
      if (productToShow.length > 0) {
        return (
          <div key={key}>
            <div
              className="cart-product"
              onClick={() =>
                router.push("/product?productid=" + productToShow[0].id)
              }
            >
              <h2>{productToShow[0].name}</h2>
              <div className="image-container">
                {image.length > 0 ? (
                  <img src={getUrl(image[0].link)} alt={image.alt}></img>
                ) : (
                  <img src="/placeholder.png" alt="placeholder"></img>
                )}
              </div>
              {productToShow[0].activePromotion ? (
                <div>
                  <h2>{adjustPrice(productToShow[0].promotionPrice)}</h2>
                  <h3>{adjustPrice(productToShow[0].price)}</h3>
                </div>
              ) : (
                <div>
                  <h2>{adjustPrice(productToShow[0].price)}</h2>
                </div>
              )}
            </div>
            {props.local ? (
              <button
                onClick={(e) => removeItemFromLocal(e, productToShow[0].id)}
              >
                Remover
              </button>
            ) : (
              <button onClick={(e) => removeItemFromDB(e, item.id)}>
                Remover
              </button>
            )}
          </div>
        );
      }
    });
  };
  return (
    <CartStyles>
      {cartItems && allProducts && <ListOfProducts cart={cartItems} />}
      {localCartItems && allProducts && (
        <ListOfProducts cart={localCartItems} local />
      )}
      <h3>Preço Total: R${adjustPrice(totalPrice.toString())}</h3>
    </CartStyles>
  );
};
export default CartItemsDetails;
