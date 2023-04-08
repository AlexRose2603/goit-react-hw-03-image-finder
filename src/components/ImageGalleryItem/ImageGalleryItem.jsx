import React from 'react';
import PropTypes from 'prop-types';

export const ImageGalleryItem = () => {
  const { webformatURL } = this.props;

  return (
    <li className="gallery-item">
      <img src={webformatURL} alt="" />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
