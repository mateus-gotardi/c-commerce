import Head from "next/head";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Header, ShowProducts, Filters } from "../src/components";
import { getTags } from "../src/utils/showProductsHelpers";
import styled from "styled-components";

const HomeStyle = styled.div``;

export default function Home() {
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

  return (
    <HomeStyle>
      <Head>
        <title>Organizações Tabajara</title>
        <meta
          name="description"
          content="homepage for the e-commerce website"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <ShowProducts
        products={products}
        productImages={productImages}
        refresh={refresh}
        setRefresh={setRefresh}
      />
    </HomeStyle>
  );
}
