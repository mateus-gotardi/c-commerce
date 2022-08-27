import Head from "next/head";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import {
  Header,
  ShowProducts,
  ProductRegister,
  ProductDetails,
} from "../src/components";
import axios from "axios";

export default function Admin() {
  const router = useRouter();
  const [admin, setAdmin] = useState(false);
  const [stage, setStage] = useState(0);
  const [showAll, setShowAll] = useState(true);
  const [registeredProduct, setRegisteredProduct] = useState(null);

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
        },50)
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
        <div>
          <Head>
            <title>Painel Admin</title>
            <meta name="description" content="Admin Panel" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Header admin />
          <button onClick={() => setShowAll(!showAll)}>
            Mostrar todos os produtos
          </button>
          {stage !== 0 && (
            <button onClick={backToRegister}>Registrar novo produto</button>
          )}
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
              />
            </>
          )}
          {showAll && (
            <ShowProducts
              admin
              showFunction={showFunction}
              setShowAll={setShowAll}
              showAll={showAll}
            />
          )}
        </div>
      )}
    </>
  );
}
