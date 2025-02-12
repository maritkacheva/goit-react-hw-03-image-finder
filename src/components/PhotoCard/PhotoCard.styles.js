import styled from "styled-components";

export const StyledPhotoCard = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const StyledPhotoCardImg = styled.img`
  height: 260px;
  object-fit: cover;
`;

export const StyledStats = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #fff;
  user-select: none;
  color: #414141;
  padding: 4px;
`;

export const StyledStatsItem = styled.p`
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;

  .materialIcons {
    font-size: 15px;
  }
`;

export const StyledFullScreenButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  font: inherit;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 50%;
  width: 56px;
  height: 56px;
  color: #fff;
  cursor: pointer;
  transition: background-color 200ms linear, opacity 200ms linear;
  opacity: 0;
  outline: none;

  :hover,
  :focus {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;
