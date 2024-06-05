import React from 'react';
import Photo from './Photo';

const photos = [
  { id: 1, src: 'path/to/photo1.jpg', alt: 'Photo 1' },
  { id: 2, src: 'path/to/photo2.jpg', alt: 'Photo 2' },
  // 他の写真もここに追加
];

const Gallery = () => (
  <section id="gallery">
    <h2>Gallery</h2>
    <div className="gallery">
      {photos.map(photo => (
        <Photo key={photo.id} src={photo.src} alt={photo.alt} />
      ))}
    </div>
  </section>
);

export default Gallery;
