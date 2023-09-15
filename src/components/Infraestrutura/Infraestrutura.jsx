import React from 'react';
import { Section } from './InfraestruturaStyled';
import { ReactComponent as Fold } from '../../assets/icons/fold.svg';
import Gallery from './Gallery';
import img1 from '../../assets/imgs/img-gallery-1.jpg';
import img2 from '../../assets/imgs/img-gallery-2.jpg';
import img3 from '../../assets/imgs/img-gallery-3.jpg';
import img4 from '../../assets/imgs/img-gallery-4.jpg';
import img5 from '../../assets/imgs/img-gallery-5.jpg';

function Infraestrutura() {
  const [imgs, setImgs] = React.useState([
    { id: 1, url: img1 },
    { id: 2, url: img2 },
    { id: 3, url: img3 },
    { id: 4, url: img4 },
    { id: 5, url: img5 },
  ]);

  return (
    <Section id="infraestrutura">
      <Fold className="fold anime" />
      <div className="content">
        <h1 className="anime">
          <span id="text-1">Ambiente</span>{' '}
          <span id="text-2">voltado para</span>
          <br />
          <span id="text-3">sua</span> <strong>performance</strong>
        </h1>
        <Gallery imgs={imgs} setImgs={setImgs} />
      </div>
    </Section>
  );
}

export default Infraestrutura;
