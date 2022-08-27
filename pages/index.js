import Head from "next/head";
import React, { useState, useEffect } from "react";
import { Header, ShowProducts } from "../src/components";

export default function Home() {

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
