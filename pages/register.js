import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { Header, Auth } from "../src/components";
import Head from "next/head";

const Register = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

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
        setError(errorObj.message);
      });
  };
  return (
    <>
      <Head>
        <title>Registrar - Organizações Tabajara</title>
        <meta
          name="description"
          content="homepage for the e-commerce website"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <Auth
        register
        setEmail={setEmail}
        setPassword={setPassword}
        password={password}
        email={email}
        name={name}
        setName={setName}
        registerNewUser={registerNewUser}
        error={error}
      ></Auth>
    </>
  );
};
export default Register;
