import React from 'react';
import { Container } from './ZoomGalleryStyled';

function ZoomGallery({ imgs, handleClick, setZoom }) {
  function closeZoom({ target }) {
    if (target.classList.contains('out')) setZoom(false);
  }

  return (
    <Container onClick={closeZoom} className="out">
      <div className="imgs">
        {imgs.map((img) => (
          <img id={img.id} key={img.id} src={img.url} />
        ))}
      </div>
      <button id="btn-left" onClick={handleClick}></button>
      <button id="btn-right" onClick={handleClick}></button>
      <button id="btn-close" className="out" onClick={closeZoom}></button>
    </Container>
  );
}

export default ZoomGallery;
