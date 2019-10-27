import React from "react";
import PropTypes from "prop-types";
import {
  StyledPhotoCard,
  StyledPhotoCardImg,
  StyledStats,
  StyledStatsItem,
  StyledFullScreenButton
} from "./PhotoCard.styles";

const PhotoCard = ({
  imageItem: { webformatURL, likes, views, comments, downloads, largeImageURL },
  modalOpened
}) => (
  <StyledPhotoCard>
    <StyledPhotoCardImg src={webformatURL} alt="Images not found" />

    <StyledStats>
      <StyledStatsItem>
        <i className="materialIcons">thumb_up</i>
        {likes}
      </StyledStatsItem>
      <StyledStatsItem>
        <i className="materialIcons">visibility</i>
        {views}
      </StyledStatsItem>
      <StyledStatsItem>
        <i className="materialIcons">comment</i>
        {comments}
      </StyledStatsItem>
      <StyledStatsItem>
        <i className="materialIcons">cloud_download</i>
        {downloads}
      </StyledStatsItem>
    </StyledStats>

    <StyledFullScreenButton
      type="button"
      onClick={() => modalOpened(largeImageURL)}
    >
      <i className="materialIcons">zoom_out_map</i>
    </StyledFullScreenButton>
  </StyledPhotoCard>
);

PhotoCard.propTypes = {
  imageItem: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired,
    downloads: PropTypes.number.isRequired
  }).isRequired,
  modalOpened: PropTypes.func.isRequired
};

export default PhotoCard;
