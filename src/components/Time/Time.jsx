import React from 'react';
import { Section } from './TimeStyled';
import daniel from '../../assets/imgs/daniel.jpg';
import gustavo from '../../assets/imgs/gustavo.jpg';
import sheila from '../../assets/imgs/sheila.jpg';
import thiago from '../../assets/imgs/thiago.jpg';
import natalia from '../../assets/imgs/natalia.jpg';
import carlos from '../../assets/imgs/carlos.jpg';
import Resume from './Resume';

const team = [
  {
    name: 'daniel',
    role: 'personal',
    url: daniel,
    desc: 'Homem de braços cruzados com várias luvas de box na parede de fundo',
    resume: [
      'Formado em educação física pela UniFap',
      'Mestre em condicionamento físico pela Enfasema',
      'Especialista em rendimento físico de alta durabilidade',
      '10 anos de experiência com treinamento de alta performance',
    ],
  },
  {
    name: 'gustavo',
    role: 'personal',
    url: gustavo,
    desc: 'Homem em pé de boné com três luzes de neon verde na parede de fundo',
    resume: [
      'Formado em educação física pela UFDERJ',
      'Pós graduado pela Camsa em manutenção do corpo',
      'Ex atleta do Ironman Triathlon',
      'Amplo conhecimento de técnicas do atletismo',
      'Vasta experiência com atletas de alta resistência',
    ],
  },
  {
    name: 'sheila',
    role: 'coach',
    url: sheila,
    desc: 'Mulher de pernas grossas com as mãos na cintura em pé numa academia',
    resume: [
      'Formada em educação física pelo Instituto Ventilar',
      'Doutora em reconhecimento muscular pela Mugida Tech',
      'Especialista em atletas de musculação e estética',
      'Grande experiência no cenário de concursos estéticos',
      '2x campeã do Body Contest como coach da Ana Vizza',
    ],
  },
  {
    name: 'thiago',
    role: 'coach',
    url: thiago,
    desc: 'Homem forte com a cara fechada sentado num banco de academia',
    resume: [
      'Formado em educação física pela FESP',
      'Ex atleta profissional de fisiculturismo',
      'Campeão do Mega Shape Campinas',
      'Campeão do Body Festival como coach do Bruno Paz',
      'Especialista em treinos para crescimento muscular acelerado',
    ],
  },
  {
    name: 'natália',
    role: 'nutricionista',
    url: natalia,
    desc: 'Mulher esguia e estilosa de braços cruzados',
    resume: [
      'Formada em Nutrição pela FFBEMT',
      'Pós graduada em alimentação minimalista pela PCA',
      'Criadora do método VASS para emagrecimento saudável',
      'Especialista em variação de dietas de baixa caloria',
      'Amplo conhecimento em preditivos alimentares',
    ],
  },
  {
    name: 'carlos',
    role: 'nutricionista',
    url: carlos,
    desc: "Homem careca fazendo um comprimento de 'hang loose'",
    resume: [
      'Formado em nutrição pela Faculdade Castelo Branco',
      'Especialista em dietas para ganho de massa muscular',
      'Vasta experiência com atletas de levantamento de peso',
      'Preparador físico alimentar de atletas de grande porte',
    ],
  },
];

function Time() {
  const [resumeName, setResumeName] = React.useState('');

  const resumeList = team.reduce((acc, professional) => {
    return { ...acc, [professional.name]: professional.resume };
  }, {});

  return (
    <Section id="time">
      <h1 className="anime">
        <span id="text-1">Conheça o nosso</span>{' '}
        <span id="text-2">time de profissionais</span>
      </h1>
      <div className="team">
        <ul className="list">
          {team.map((professional) => (
            <li
              key={professional.name}
              id={professional.name}
              onClick={({ target }) => setResumeName(target.id)}
              className="item anime"
            >
              <h2>{professional.name}</h2>
              <div className="label">
                <p>{professional.role}</p>
              </div>
              <img src={professional.url} alt={professional.desc} />
            </li>
          ))}
          {resumeName && (
            <Resume
              resumeName={resumeName}
              setResumeName={setResumeName}
              resumeList={resumeList}
            />
          )}
        </ul>
      </div>
    </Section>
  );
}

export default Time;
