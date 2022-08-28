import styled from "styled-components";

export const HeaderStyles = styled.div`
  button {
    background: transparent;
    border: none;
    color: ${(props) =>
      props.darkMode ? props.Colors.White : props.Colors.MuchDarkBlue};
    font-family: "Rubik", sans-serif;
  }
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: ${(props) =>
    props.darkMode ? props.Colors.DarkBlue : props.Colors.White};
  box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.1);
  button{
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .cart {
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
  }
  .span-link{
    font-size: .9rem;
  }
  #menu {
    display: none;
  }
  #menuActive {
    top: 0;
    display: grid;
    grid-template-columns: auto;
    width: 100%;
    gap: 0.5rem;
  }
  .burgerButton {
    display: block;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
  }
  .menuItem {
    cursor:pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: .9rem;
    a {
      padding: 1px 6px 1px 6px;
    }
  }
  #navmenuActive {
    z-index: 10000;
    position: fixed;
    top: 0;
    right: 0;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    background-color: ${(props) =>
      props.darkMode ? props.Colors.DarkBlue : props.Colors.White};
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.1);
  }
  @media (min-width: 800px) {
    nav,
    #menu,
    #menuActive {
      display: flex;
      gap: 1.2rem;
    }
    .burgerButton {
      display: none;
      background: none;
      border: none;
      padding: 1rem;
      svg {
        color: ${(props) =>
          props.darkMode ? props.Colors.White : props.Colors.MuchDarkBlue};
        font-size: 1.5rem;
      }
    }
  }
`;
