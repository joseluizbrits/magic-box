import React from 'react';
import { Section } from './ModalidadesStyled';
import img1 from '../../assets/imgs/img-musculacao.jpg';
import img2 from '../../assets/imgs/img-funcional.jpg';
import img3 from '../../assets/imgs/img-pilates.jpg';

const imgs = [
  {
    id: 1,
    url: img1,
    desc: 'Homem sem camisa fazendo tríceps corda',
    name: 'Musculação',
    text: 'Box com maquinário diverso e de altissíma qualidade escolhido a dedo para aumentar a perfomance do seu treino ',
  },
  {
    id: 2,
    url: img2,
    desc: 'Homem de frente para uma barra de levantamento de peso',
    name: 'Funcional',
    text: 'Box reservado com amplo espaço para fazer aquele treinamento de força e resistência sem preocupação',
  },
  {
    id: 3,
    url: img3,
    desc: 'Mulher fazendo uma posição de pilates',
    name: 'Pilates',
    text: 'Box ambientado num estilo que te forneçe tranquilidade na hora de fazer a manutenção do seu corpo',
  },
];

function Modalidades() {
  return (
    <Section id="modalidades">
      <h1 className="anime">
        <span id="text-1">Conheça nossas</span>{' '}
        <span id="text-2">modalidades</span>
      </h1>
      <ul className="grid anime">
        {imgs.map((img) => (
          <li key={img.id} id={`img${img.id}`} className="img-box">
            <img src={img.url} alt={img.desc} />
            <h2>{img.name}</h2>
            <p>{img.text}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default Modalidades;
