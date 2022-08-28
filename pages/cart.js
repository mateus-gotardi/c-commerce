import { Header, CartItemsDetails } from "../src/components";
import Head from "next/head";

const Cart = () => {
  return (
    <div>
      <Head>
        <title>Carrinho - Organizações Tabajara</title>
        <meta name="description" content="Admin Panel" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header cart />
      <CartItemsDetails />
    </div>
  );
};
export default Cart;
