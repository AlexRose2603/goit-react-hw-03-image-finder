import React from 'react';

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


