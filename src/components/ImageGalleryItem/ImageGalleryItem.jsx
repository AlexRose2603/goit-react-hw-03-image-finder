import React from 'react';
// import PropTypes from 'prop-types';
import { ImageItem, Image } from './ImageGalleryItem.styled';
export const ImageGalleryItem = ({ images, onShowhingLargeImg, onClick }) => {
  return (
    <ImageItem>
      <Image
        src={images.webformatURL}
        alt={images.tags}
        onClick={() => {
          onShowhingLargeImg(images);
          onClick();
        }}
      />
    </ImageItem>
  );
};

// ImageGalleryItem.propTypes = {
//   webformatURL: PropTypes.string.isRequired,
//   // largeImageURL: PropTypes.string.isRequired,
// };
