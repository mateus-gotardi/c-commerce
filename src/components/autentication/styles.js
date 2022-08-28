import styled from "styled-components";
export const AuthStyle = styled.div`
  padding: 1.3rem;
  justify-content: center;
  display: flex;
  align-items: center;
  height: 65vh;
  input {
    padding: 0.3rem 0.7rem;
    margin-right: 1rem;
    width: 100%;
    border-radius: 5px;
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.1);
    border: none;
  }
  button {
    border: none;
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.1);
    background-color: ${(props) =>
      props.darkMode ? props.Colors.White : props.Colors.DarkBlue};
    border-radius: 5px;
    padding: 0.3rem 0.7rem;
    color: ${(props) =>
      props.darkMode ? props.Colors.MuchDarkBlue : props.Colors.White};
    margin: 0.5rem 0 0.5rem 0;
  }
  .auth-container {
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5rem 1rem;
    gap: 0.6rem;
    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.6rem;
    }
    background-color: ${(props) =>
      props.darkMode ? props.Colors.DarkBlue : props.Colors.White};
  }
  @media (min-width: 420px) {
    .auth-container {
      width: 20rem;
    }
  }
`;
