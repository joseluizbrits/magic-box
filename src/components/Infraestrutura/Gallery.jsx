import React from 'react';
import { Container } from './GalleryStyled';
import ZoomGallery from './ZoomGallery';

const Gallery = ({ imgs, setImgs }) => {
  const [moveStart, setMoveStart] = React.useState(null);
  const [direction, setDirection] = React.useState('left');
  const [zoom, setZoom] = React.useState(false);

  function changePhoto(moveEnd) {
    const imgsCopy = [...imgs];
    const lastIndex = imgsCopy.length - 1;

    const difference = moveStart - moveEnd;

    if (difference < -60) {
      setDirection('right');

      imgsCopy.unshift(imgs[lastIndex]);
      imgsCopy.pop();

      setImgs(imgsCopy);
    } else if (difference > 60) {
      setDirection('left');

      imgsCopy.shift();
      imgsCopy.push(imgs[0]);

      setImgs(imgsCopy);
    }
  }

  // +-+-+-+-+-+-+ WEB +-+-+-+-+-+-+
  function handleDragStart({ pageX }) {
    setMoveStart(pageX);
  }

  function handleDragEnd({ pageX }) {
    changePhoto(pageX);
  }

  // +-+-+-+-+-+-+ MOBILE +-+-+-+-+-+-+
  function handleTouchStart(event) {
    setMoveStart(event.changedTouches[0].pageX);
  }

  function handleTouchEnd(event) {
    changePhoto(event.changedTouches[0].pageX);
  }

  // +-+-+-+-+-+-+ BUTTONS +-+-+-+-+-+-+
  function handleClick({ target }) {
    if (target.id === 'btn-left') changePhoto(-61);
    if (target.id === 'btn-right') changePhoto(10000);
  }

  return (
    <Container>
      <div
        className={`gallery ${direction}`}
        onClick={() => setZoom(true)}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {imgs.map((img) => (
          <img id={img.id} key={img.id} src={img.url} />
        ))}
      </div>
      <div className="button-group">
        <button id="btn-left" onClick={handleClick}></button>
        <button id="btn-right" onClick={handleClick}></button>
      </div>
      {zoom && (
        <ZoomGallery imgs={imgs} handleClick={handleClick} setZoom={setZoom} />
      )}
    </Container>
  );
};

export default Gallery;
