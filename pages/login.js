import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { Header } from "../src/components";
import Head from "next/head";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    let token = Cookies.get("token");
    if (token) {
      router.push("/");
    }
  }, []);
  const verifyLocalCart = (token) => {
    let cart = localStorage.getItem("cart");
    if (cart) {
      cart = JSON.parse(cart);
      cart.map((item) => {
        console.log(item);
        let data = { productid: item };
        axios
          .post("/api/users/cart", data, {
            headers: { "x-access-token": token },
          })
          .then((response) => {
            console.log(response);
            if (response.data.success) {
              router.push("/login");
            }
          })
          .catch((e) => {
            console.log(e);
          });
      });
      localStorage.removeItem("cart");
    }
  };
  const loginUser = (e) => {
    e.preventDefault();
    let data = { email, password };
    axios
      .post("/api/users/login", data)
      .then((response) => {
        console.log(response.data);
        if (response.data.success) {
          let user = response.data.user;
          let userString = JSON.stringify(user);
          Cookies.set("token", response.data.token, { expires: 2 });
          Cookies.set("user", userString, { expires: 2 });
          verifyLocalCart(response.data.token);
          router.push("/");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <>
      <Head>
        <title>Login - Organizações Tabajara</title>
        <meta
          name="description"
          content="homepage for the e-commerce website"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <form onSubmit={loginUser}>
        <input
          required
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email@email.com"
        ></input>
        <input
          required
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="**********"
        ></input>
        <button type="submit">Login</button>
      </form>
    </>
  );
};
export default Login;
