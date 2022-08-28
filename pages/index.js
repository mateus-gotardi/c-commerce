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
  const [allTags, setAllTags] = useState();
  const [tagsFilter, setTagsFilter] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const getAllTags = (products) => {
    let tmpAll = [];
    products.map((item) => {
      let tags = getTags(item.tags);
      tmpAll.push(...tags);
    });
    let noRepeat = tmpAll.filter((x, i) => tmpAll.indexOf(x) === i);
    noRepeat.sort()
    setAllTags(noRepeat);
  };
  const getAllProducts = () => {
    axios
      .get("/api/products/getall")
      .then((response) => {
        setProductImages(response.data.productImages);
        setProducts(response.data.products);
        setTimeout(getAllTags(response.data.products), 100);
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
      {allTags && (
        <Filters
          allTags={allTags}
          tagsFilter={tagsFilter}
          setTagsFilter={setTagsFilter}
          setRefresh={setRefresh}
        />
      )}
      <ShowProducts
        products={products}
        productImages={productImages}
        tagsFilter={tagsFilter}
        refresh={refresh}
      />
    </HomeStyle>
  );
}
