import { useContext, useEffect, useState } from "react";
import AppContext from "../../../AppContext";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import Link from "next/link";

const Header = (props) => {
  const router = useRouter();
  const value = useContext(AppContext);
  let { darkMode, userLogged } = value.state;
  let { setDarkMode, setUserLogged } = value;
  useEffect(() => {
    let user = Cookies.get("user");
    if (user) {
      let objUser = JSON.parse(user);
      user && setUserLogged(objUser);
    }
  }, []);
  const logout = () => {
    Cookies.remove("user");
    Cookies.remove("token");
    setUserLogged(false);
    if (props.admin || props.cart) {
      router.push("/");
    }
  };

  return (
    <div>
      <Link href="/">Loja</Link>
      <button onClick={() => setDarkMode(!darkMode)}>Dark Mode</button>
      {userLogged ? (
        <button onClick={logout}>Sair</button>
      ) : (
        <>
          <button onClick={() => router.push("/login")}>Entrar</button>
          <button onClick={() => router.push("/register")}>Registrar</button>
        </>
      )}
      <Link href='/cart'>Carrinho</Link>
      {userLogged.admin && <Link href="/admin">Painel de Administrador</Link>}
    </div>
  );
};
export default Header;
