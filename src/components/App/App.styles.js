import styled from "styled-components";

export const StyledApp = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 24px;
`;

export const StyledButton = styled.button`
  padding: 8px 16px;
  border-radius: 3px;
  background-color: #3884ff;
  transition: all 200ms ease;
  text-align: center;
  display: inline-block;
  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 16px;
  line-height: 24px;
  font-style: normal;
  min-width: 180px;
  margin-left: auto;
  margin-right: auto;

  :hover,
  :focused {
    background-color: #1f65d6;
  }
`;
