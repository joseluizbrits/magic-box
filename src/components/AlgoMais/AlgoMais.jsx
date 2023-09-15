import React from 'react';
import { Section } from './AlgoMaisStyled';
import Button from '../Button/Button';

function AlgoMais() {
  return (
    <Section id="algomais">
      <div className="content">
        <h1 className="anime">
          <span id="text-1">
            Na <strong>Magic Box</strong> sempre há
          </span>
          <br />
          <span id="text-2">algo a mais</span>
        </h1>
        <ul className="cards">
          <li id="magic-club" className="anime">
            <h2>Magic Club</h2>
            <p>
              Temos um clube de vantagens que garante as melhores ofertas e
              oportunidades
            </p>
            <button aria-label="Saiba mais"></button>
          </li>
          <li id="plan-plus" className="anime">
            <h2>Plan Plus</h2>
            <p>
              Performance em primeiro lugar. Temos um plano especial para os
              amantes do esporte
            </p>
            <Button
              text="saiba mais"
              color="linear-gradient(to right, #34248E, #5F4FB8)"
            />
          </li>
        </ul>
      </div>
    </Section>
  );
}

export default AlgoMais;
