import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { Header } from "../src/components";
import Head from "next/head";

const Register = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, serError] = useState(false);

  useEffect(() => {
    let token = Cookies.get("token");
    if (token) {
      router.push("/");
    }
  }, []);
  const registerNewUser = (e) => {
    e.preventDefault();
    let data = { name, email, password };
    axios
      .post("/api/users/register", data)
      .then((response) => {
        console.log(response);
        if (response.data.success) {
          router.push("/login");
        }
      })
      .catch((e) => {
        let errorString = e.request.response;
        let errorObj = JSON.parse(errorString);
        serError(errorObj.message);
      });
  };
  return (
    <>
      <Head>
        <title>Loja Virtual</title>
        <meta
          name="description"
          content="homepage for the e-commerce website"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <form onSubmit={registerNewUser}>
        <input
          required
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nome"
        ></input>
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
        <button type="submit">Registrar</button>
      </form>
      {error&&<p>{error}</p>}
    </>
  );
};
export default Register;
