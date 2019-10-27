import React from "react";
import PropTypes from "prop-types";
import StyledGallery from "./Gallery.styles";
import PhotoCard from "../PhotoCard/PhotoCard";

const Gallery = ({ images, modalOpened }) => (
  <StyledGallery>
    {images.map(imageItem => (
      <li key={imageItem.id}>
        <PhotoCard imageItem={imageItem} modalOpened={modalOpened} />
      </li>
    ))}
  </StyledGallery>
);

// className={styles.galleryItem}

Gallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      comments: PropTypes.number.isRequired,
      downloads: PropTypes.number.isRequired,
      largeImageURL: PropTypes.string.isRequired
    })
  ).isRequired,
  modalOpened: PropTypes.func.isRequired
};

export default Gallery;
