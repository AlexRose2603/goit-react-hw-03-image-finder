import React from 'react';
import { GalleryList } from './ImageGallery.styled';

import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images, onEnlargingImage, onClick }) => {
  console.log(images);
  return (
    <GalleryList>
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          images={image}
          onShowhingLargeImg={onEnlargingImage}
          onClick={onClick}
        />
      ))}
    </GalleryList>
  );
};


