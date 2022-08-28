import { AuthStyle } from "./styles";
import AppContext from "../../../AppContext";
import { useContext } from "react";
import { Colors } from "..";
import Link from "next/link";

const Auth = (props) => {
  const value = useContext(AppContext);
  let { darkMode } = value.state;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.login) {
      props.loginUser(e);
    } else if (props.register) {
      props.registerNewUser(e);
    }
  };
  return (
    <AuthStyle Colors={Colors} darkMode={darkMode}>
      <section className='auth-container'>
        <form onSubmit={(e) => handleSubmit(e)}>
          {props.register && (
            <input
              required
              type="text"
              name="name"
              value={props.name}
              onChange={(e) => props.setName(e.target.value)}
              placeholder="Nome"
            ></input>
          )}
          <input
            required
            type="email"
            name="email"
            value={props.email}
            onChange={(e) => props.setEmail(e.target.value)}
            placeholder="email@email.com"
          ></input>
          <input
            required
            type="password"
            name="password"
            value={props.password}
            onChange={(e) => props.setPassword(e.target.value)}
            placeholder="**********"
          ></input>
          <button type="submit">
            {props.login ? <>Login</> : <>Registrar</>}
          </button>
        </form>
        {props.error && <p>{props.error}</p>}
        {props.login ? (
          <Link href="/register">Não tem uma conta? Registrar</Link>
        ) : (
          <Link href="/login">Já possui uma conta? Login</Link>
        )}
      </section>
    </AuthStyle>
  );
};
export default Auth;
