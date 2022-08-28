import styled from "styled-components";

export const CartStyles = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .products-container {
    width: fit-content;
    display: grid;
    grid-template-columns: auto;
    justify-items: center;
    gap: 3rem 1rem;
    .product {
      border-radius: 5px;
      box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.1);
      background-color: ${(props) =>
        props.darkMode ? props.Colors.DarkBlue : props.Colors.White};
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      cursor: pointer;
      width: 90%;
      .image {
        width: 100%;
        img {
          border-radius: 5px 5px 0 0;
          width: 100%;
        }
      }
      .details {
        padding: 1rem;
      }
    }
  }
  .headers {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.5rem;
    button {
      p {
        font-size:.9rem;
        padding: 0;
        margin: 0;
        font-weight: 600;
      }

      padding: 0.3rem .7rem .3rem .7rem;
      background-color: ${(props) =>
        props.darkMode ? props.Colors.White : props.Colors.MuchDarkBlue};
      border-radius: 5px;
      border: none;
      color: ${(props) =>
        props.darkMode ? props.Colors.MuchDarkBlue : props.Colors.White};
    }
    h3 {
      margin: 0;
      font-weight: 400;
      span{
        font-weight: 600;
      }
    }
  }
  .price {
    font-weight: 600;
    font-size: 1.5rem;
    margin: 0;
  }
  .product-name {
    font-weight: 400;
    font-size: 1rem;
    margin: 1rem 0 1rem 0;
  }
  .remove-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.1rem;
    padding: 5px 0 5px 0;
    background-color: ${(props) =>
      props.darkMode ? props.Colors.White : props.Colors.MuchDarkBlue};
    border-radius: 0 0 5px 5px;
    border: none;
    color: ${(props) =>
      props.darkMode ? props.Colors.MuchDarkBlue : props.Colors.White};
    span{
        font-weight: 600;
    }
  }
  @media (min-width: 800px) {
    .products-container {
      grid-template-columns: auto auto;
    }
    .headers {
        width:95%;
    }
  }
  @media (min-width: 1080px) {
    .products-container {
      grid-template-columns: auto auto auto;
    }
  }
`;
