import Head from "next/head";
import React, { useState, useEffect, useContext } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import {
  Header,
  ShowProducts,
  ProductRegister,
  ProductDetails,
  Colors,
} from "../src/components";
import axios from "axios";
import styled from "styled-components";
import AppContext from "../AppContext";

const AdminStyles = styled.div`
  .top-buttons {
    padding: 1rem 1rem 0.5rem 1rem;
  }
  .button {
    border: none;
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.1);
    background-color: ${(props) =>
      props.darkMode ? props.Colors.White : props.Colors.DarkBlue};
    border-radius: 5px;
    padding: 0.3rem 0.7rem;
    color: ${(props) =>
      props.darkMode ? props.Colors.MuchDarkBlue : props.Colors.White};
    margin: 0.5rem 1rem;
  }
`;

export default function Admin() {
  const value = useContext(AppContext);
  let { darkMode } = value.state;
  const router = useRouter();
  const [admin, setAdmin] = useState(false);
  const [stage, setStage] = useState(0);
  const [showAll, setShowAll] = useState(true);
  const [registeredProduct, setRegisteredProduct] = useState(null);
  const [products, setProducts] = useState(null);
  const [productImages, setProductImages] = useState(null);
  const [refresh, setRefresh] = useState(false);

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

  useEffect(() => {
    let token = Cookies.get("token");
    let user = Cookies.get("user");
    if (user) {
      let objUser = JSON.parse(user);
      objUser.admin && token ? setAdmin(true) : router.push("/");
    } else {
      router.push("/");
    }
  }, []);
  const showFunction = (id) => {
    axios
      .post("/api/products/getone", { id: id })
      .then((response) => {
        setRegisteredProduct(response.data.product);
        setStage(0);
        setTimeout(() => {
          setStage(1);
        }, 50);
        router.push("#start");
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const backToRegister = () => {
    setStage(0);
    setRegisteredProduct(null);
  };

  return (
    <>
      {admin && (
        <AdminStyles Colors={Colors} darkMode={darkMode}>
          <Head>
            <title>Painel Admin</title>
            <meta name="description" content="Admin Panel" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Header admin />
          <section className="top-buttons" id="start">
            <button className="button" onClick={() => setShowAll(!showAll)}>
              Mostrar todos os produtos
            </button>
            {stage !== 0 && (
              <button className="button" onClick={backToRegister}>
                Registrar novo produto
              </button>
            )}
          </section>
          {stage === 0 && (
            <ProductRegister
              setStage={setStage}
              setShowAll={setShowAll}
              showAll={showAll}
              setRegisteredProduct={setRegisteredProduct}
            />
          )}
          {stage === 1 && (
            <>
              <ProductDetails
                setStage={setStage}
                productid={registeredProduct.id}
                admin
                setShowAll={setShowAll}
                showAll={showAll}
                getAllProducts={getAllProducts}
              />
            </>
          )}
          {showAll && (
            <ShowProducts
              admin
              showFunction={showFunction}
              setShowAll={setShowAll}
              showAll={showAll}
              products={products}
              productImages={productImages}
              setRefresh={setRefresh}
            />
          )}
        </AdminStyles>
      )}
    </>
  );
}
