import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import axios from "axios";
import { Header, ProductDetails } from "../src/components";
import { useRouter } from "next/router";
import Head from "next/head";

const ProductPage = () => {
  const router = useRouter();
  const { productid } = router.query;
  const [token, setToken] = useState("");
  useEffect(() => {
    let tkn = Cookies.get("token");
    if (tkn) {
      setToken(tkn);
    }
  }, [setToken]);
  const addToCart = (e) => {
    e.preventDefault();
    console.log(token);
    if (token) {
      let data = { productid };
      axios
        .post("/api/users/cart", data, {
          headers: { "x-access-token": token },
        })
        .then((response) => {
          console.log("item added to cart successfully");
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      let cart = localStorage.getItem("cart");
      console.log(cart);
      if (!cart) {
        let data = JSON.stringify([productid]);
        localStorage.setItem("cart", data);
        console.log("item added to cart successfully");
      } else {
        cart = JSON.parse(cart);
        cart.push(productid);
        localStorage.setItem("cart", JSON.stringify(cart));
        console.log("item added to cart successfully");
      }
    }
  };
  return (
    <div>
      <Head>
        <title> Detalhes do Produto - Organizações Tabajara</title>
        <meta name="description" content="Admin Panel" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      {productid && (
        <>
          <ProductDetails productid={productid} addToCart={addToCart} />
        </>
      )}
    </div>
  );
};
export default ProductPage;
