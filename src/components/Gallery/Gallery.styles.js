import styled from "styled-components";

const StyledGallery = styled.ul`
  display: grid;
  max-width: 1440px;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-left: auto;
  margin-right: auto;
  list-style: none;
`;

export default StyledGallery;
