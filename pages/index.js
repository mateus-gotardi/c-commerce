import Head from "next/head";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Header, ShowProducts } from "../src/components";

export default function Home() {
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
    <div>
      <Head>
        <title>Loja Virtual</title>
        <meta
          name="description"
          content="homepage for the e-commerce website"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <ShowProducts/>
    </div>
  );
}
