import styled from "styled-components";
const SvgStyles = styled.div``;
const NoResults = (props) => {
  return (
    <SvgStyles>
      <svg
        version="1.1"
        viewBox="-58 -58 116 116"
      >
        <g stroke-linecap="round" stroke-width="15">
          <path id="a" d="m0 35 0,14" />
          <use transform="rotate(210)" stroke="#f0f0f0" />
          <use transform="rotate(240)" stroke="#ebebeb" />
          <use transform="rotate(270)" stroke="#d3d3d3" />
          <use transform="rotate(300)" stroke="#bcbcbc" />
          <use transform="rotate(330)" stroke="#a4a4a4" />
          <use transform="rotate(0)" stroke="#8d8d8d" />
          <use transform="rotate(30)" stroke="#757575" />
          <use transform="rotate(60)" stroke="#5e5e5e" />
          <use transform="rotate(90)" stroke="#464646" />
          <use transform="rotate(120)" stroke="#2f2f2f" />
          <use transform="rotate(150)" stroke="#171717" />
          <use transform="rotate(180)" stroke="#000" />
        </g>
      </svg>
    </SvgStyles>
  );
};
export default NoResults;
