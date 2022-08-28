import styled from "styled-components";

export const FiltersStyle = styled.div`
  display: flex;
  gap: 1rem;
  margin: 1rem;
  align-items: center;
  .selected-tag {
    font-size: 0.8rem;
    background-color: ${(props) =>
      props.darkMode ? props.Colors.White : props.Colors.DarkBlue};
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.1);
    padding: 0.25rem;
    border-radius: 5px;
    color: ${(props) =>
      props.darkMode ? props.Colors.DarkBlue : props.Colors.White};
  }
  .filters {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
  .tag {
    font-size: 0.8rem;
    background-color: ${(props) =>
      props.darkMode ? props.Colors.DarkBlue : props.Colors.White};
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.1);
    padding: 0.25rem;
    border-radius: 5px;
  }
`;
