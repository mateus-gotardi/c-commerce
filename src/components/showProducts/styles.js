import styled from "styled-components";

export const ShowStyle = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  .product {
    cursor: pointer;
    width: 20rem;
    .image {
      img {
        width: 100%;
      };
    };
  };
`;
