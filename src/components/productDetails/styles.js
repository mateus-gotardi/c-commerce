import styled from "styled-components";

export const DetailsStyle = styled.div`
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  .admin {
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
    input {
      padding: 0.3rem 0.7rem;
      margin-right: 1rem;
      width: 100%;
      border-radius: 5px;
      box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.1);
      border: none;
    }
    textarea {
      width: 100%;
      height: 7rem;
    }
  }
  .details {
    width: 100%;
  }
  .images {
    margin-top: 1rem;
    display: flex;
    width: 100%;
    gap: 0.5rem;
    justify-content: flex-start;
  }
  .image-container {
    cursor: pointer;
    width: 30%;
    img {
      width: 100%;
      border-radius: 5px;
    }
  }
  .bigImage-container {
    width: 100%;
    img {
      width: 100%;
      border-radius: 5px;
    }
  }
  .price {
    font-weight: 600;
    font-size: 1.5rem;
    margin: 0;
  }
  .tags-container {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    justify-content: center;
    .tag {
      font-size: 0.8rem;
      background-color: ${(props) =>
        props.darkMode ? props.Colors.DarkBlue : props.Colors.White};
      box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.1);
      padding: 0.25rem;
      border-radius: 5px;
      color: ${(props) =>
        props.darkMode ? props.Colors.White : props.Colors.MuchDarkBlue};
    }
  }
  .showCompleteDescription {
    cursor: pointer;
    background-color: ${(props) => props.Colors.VeryLightGray};
    font-size: 0.8rem;
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.1);
    padding: 0.25rem;
    border-radius: 5px;
    color: ${(props) => props.Colors.MuchDarkBlue};
  }
  .details {
    padding: 1rem;
  }
  .add-btn {
    display: flex;
    justify-content: center;
    margin: 2rem 0 2rem 0;
    button {
      border: none;
      box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.1);
      background-color: ${(props) =>
        props.darkMode ? props.Colors.White : props.Colors.DarkBlue};
      border-radius: 5px;
      padding: 0.3rem 0.7rem;
      color: ${(props) =>
        props.darkMode ? props.Colors.MuchDarkBlue : props.Colors.White};
    }
  }
  .product-name {
    font-weight: 400;

    margin: 0 0 1rem 0;
    h2 {
      margin: 0;
      font-size: 1.1rem;
    }
  }
  .product-description {
    margin-bottom: 1rem;
    p {
      font-size: 0.9rem;
    }
  }
  @media (min-width: 450px) {
    .image-container {
      width: 20%;
    }
  }
  @media (min-width: 700px) {
    .allImages {
      width: 50%;
    }
    .details {
      width: 50%;
    }
    .newNameInput {
      input {
        width: 50%;
      }
    }
    padding: 1.7rem;
    .images-and-description {
      display: flex;
    }
    .add-btn {
      justify-content: flex-start;
    }
    .tags-container {
      justify-content: flex-start;
    }
    .product-name {
      h2 {
        margin: 0;
        font-size: 1.3rem;
      }
    }
  }
  @media (min-width: 1080px) {
  }
`;
