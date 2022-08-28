import { useContext, useEffect, useState } from "react";
import AppContext from "../../../AppContext";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import Link from "next/link";
import { HeaderStyles } from "./styles";
import { Colors } from "..";
import {
  AiOutlineClose,
  AiOutlineShoppingCart,
  AiOutlineLogin,
  AiOutlineLogout,
} from "react-icons/ai";
import { RiMenu3Fill } from "react-icons/ri";
import { FaRegAddressBook } from "react-icons/fa";
import { GiMoon } from "react-icons/gi";
import { MdAdminPanelSettings } from "react-icons/md";
import ShopLogo from "../../SVG/icon";

const Header = (props) => {
  const [burger, setBurger] = useState("menu");
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
  const handleBurger = () => {
    if (burger === "menu") {
      setBurger("menuActive");
    } else {
      setBurger("menu");
    }
  };
  const logout = () => {
    Cookies.remove("user");
    Cookies.remove("token");
    setUserLogged(false);
    if (props.admin || props.cart) {
      router.push("/");
    }
  };

  return (
    <HeaderStyles Colors={Colors} darkMode={darkMode}>
      <button onClick={() => router.push("/")} className="menuItem">
        <ShopLogo size="30" darkMode={darkMode} Colors={Colors} />
      </button>
      <nav id={`nav${burger}`} className={burger}>
        <div id={burger}>
          <div className="menuItem">
            <button className="menuItem" onClick={() => setDarkMode(!darkMode)}>
              <GiMoon /> Dark Mode
            </button>
          </div>
          {userLogged ? (
            <div className="menuItem">
              <button onClick={logout} className="menuItem">
                <AiOutlineLogout /> Sair
              </button>
            </div>
          ) : (
            <>
              <div className="menuItem">
                <button
                  className="menuItem"
                  onClick={() => router.push("/login")}
                >
                  <AiOutlineLogin /> Entrar
                </button>
              </div>
              <div className="menuItem">
                <button
                  className="menuItem"
                  onClick={() => router.push("/register")}
                >
                  <FaRegAddressBook /> Registrar
                </button>
              </div>
            </>
          )}
          <div className="menuItem">
            <Link href="/cart">
              <div className="cart">
                <AiOutlineShoppingCart /> <span>Carrinho</span>
              </div>
            </Link>
          </div>
          {userLogged.admin && (
            <Link href="/admin">
              <div className="cart menuItem">
                <MdAdminPanelSettings />
                <span>Painel de Administrador</span>
              </div>
            </Link>
          )}
        </div>
        <button className="burgerButton" onClick={handleBurger}>
          {burger === "menu" ? (
            <RiMenu3Fill className="bIcon" />
          ) : (
            <AiOutlineClose className="bIcon" />
          )}
        </button>
      </nav>
    </HeaderStyles>
  );
};
export default Header;
