import styled from "styled-components";

export const UploadStyle = styled.div`
  background-color: ${(props) =>
    props.darkMode ? props.Colors.DarkBlue : props.Colors.White};
  padding: 0 1rem 1rem 1rem;
  border-radius: 5px;
  box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.1);
  h2 {
    font-size: 1.2rem;
  }
  #file {
    display: none;
  }
  .imageLabel {
    cursor: pointer;
    background-color: ${(props) =>
      props.darkMode ? props.Colors.White : props.Colors.DarkBlue};
    color: ${(props) =>
      props.darkMode ? props.Colors.MuchDarkBlue : props.Colors.White};
    padding: 0.2rem 1rem;
    border-radius: 5px;
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.1);
  }
  .upload-div{
    margin-bottom: 1rem;
  }
`;
