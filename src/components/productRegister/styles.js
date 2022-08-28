import styled from "styled-components";

export const RegisterProdStyle = styled.div`
  padding: 1rem;
  background-color: ${(props) =>
    props.darkMode ? props.Colors.DarkBlue : props.Colors.White};
  border-radius: 5px;
  box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.1);
  margin: 0 2rem;
  button {
    border: none;
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.1);
    background-color: ${(props) =>
      props.darkMode ? props.Colors.White : props.Colors.DarkBlue};
    border-radius: 5px;
    padding: 0.3rem 0.7rem;
    color: ${(props) =>
      props.darkMode ? props.Colors.MuchDarkBlue : props.Colors.White};
    margin: 0.5rem 0;
  }
  input {
    padding: 0.3rem 0.7rem;
    margin: 0.5rem 0;
    width: 100%;
    border-radius: 5px;
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.1);
    border: none;
  }
  textarea {
    width: 100%;
    height: 7rem;
  }
`;
