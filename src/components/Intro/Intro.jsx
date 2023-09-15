import React from 'react';
import { Section } from './IntroStyled';
import img from '../../assets/imgs/img-intro.png';
import Button from '../Button/Button';
import { ReactComponent as Circles } from '../../assets/icons/circle-group.svg';
import { ReactComponent as ArrowDown } from '../../assets/icons/arrow-down.svg';

function Intro() {
  return (
    <Section>
      <div className="content">
        <Circles className="circles" />
        <div className="img-box">
          <img
            src={img}
            alt="Mulher agaixada com as mãos apoiadas em anilhas de uma barra"
          />
        </div>
        <div className="title">
          <h1>
            Espaço sagrado onde se molda o shape dos <span>deuses</span>
          </h1>
          <a href="#planos">
            <Button
              text="Ver planos"
              color="linear-gradient(to right, #09002f, #24175e)"
            />
          </a>
        </div>
        <ArrowDown id="arrow-down" />
      </div>
    </Section>
  );
}

export default Intro;
