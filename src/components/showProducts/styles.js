import styled from "styled-components";

export const ShowStyle = styled.div`
  padding: 1rem;
  .search {
    display: flex;
    align-items: center;
    border-radius: 5px;
    padding: .5rem;
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.1);
    margin-bottom: 1rem;
    background-color: ${(props) =>
      props.darkMode ? props.Colors.DarkBlue : props.Colors.White};
    input {
      background-color: inherit;
      border: none;
      color: ${(props) =>
        props.darkMode ? props.Colors.White : props.Colors.MuchDarkBlue};
      :focus {
        border: none;
        outline: none;
      }
    }
  }
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
  .tags-container {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    justify-content: center;
    .tag {
      font-size: 0.8rem;
      background-color: ${(props) =>
        props.darkMode ? props.Colors.White : props.Colors.DarkBlue};
      box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.1);
      padding: 0.25rem;
      border-radius: 5px;
      color: ${(props) =>
        props.darkMode ? props.Colors.MuchDarkBlue : props.Colors.White};
    }
  }
  .price {
    font-weight: 600;
    font-size: 1.5rem;
    margin: 0;
  }
  .product-name {
    font-weight: 400;
    font-size: 1.1rem;
    margin: 1rem 0 1rem 0;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 800px) {
    .products-container {
      grid-template-columns: auto auto;
    }
  }
  @media (min-width: 1080px) {
    .products-container {
      grid-template-columns: auto auto auto;
    }
  }
`;
