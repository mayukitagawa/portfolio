import React from 'react';

const Photo = ({ src, alt }) => (
  <div className="photo">
    <img src={src} alt={alt} />
  </div>
);

export default Photo;
