import React from 'react';
import { Section } from './PlanosStyled';
import { ReactComponent as Fold } from '../../assets/icons/fold.svg';
import Button from '../Button/Button';

const plans = [
  {
    id: 1,
    name: 'semestral',
    desc: [
      'Com cartão de crédito',
      'Acesso a todas modalidades',
      'Plan plus e clube de vantagens',
      'Fidelidade de 6 meses',
    ],
    btnColor: 'linear-gradient(to right, #281367, #4C3495)',
    price: '69,90',
  },
  {
    id: 2,
    name: 'trimestral',
    desc: [
      'Com cartão de crédito',
      'Acesso a todas modalidades',
      'Clube de vantagens',
      'Fidelidade de 6 meses',
    ],
    btnColor: 'linear-gradient(to right, #09002F, #24175E)',
    price: '79,90',
  },
  {
    id: 3,
    name: 'mensal',
    desc: ['À vista no débito', 'Acesso a 1 modalidade', 'Sem fidelidade'],
    btnColor: 'linear-gradient(to right, #1E125B, #39269A)',
    price: '99,90',
  },
];

function Planos() {
  const [planActive, setPlanActive] = React.useState('');
  const [itemActive, setItemActive] = React.useState(null);

  function handleClick(event) {
    const itemId = event.currentTarget.id;
    const planId = itemId.slice(0, itemId.length - 1);

    setPlanActive(planId);

    if (itemActive === itemId) {
      setPlanActive(null);
      setItemActive(null);
    } else {
      setItemActive(itemId);
    }
  }
  return (
    <Section id="planos">
      <Fold className="fold anime" />
      <h1 className="anime">Escolha o seu plano</h1>
      <div className="box">
        {plans.map((plan) => (
          <div
            key={plan.id}
            id={plan.name}
            className={
              plan.name === planActive ? 'plan plan-active anime' : 'plan anime'
            }
          >
            <div className="name">
              <h2>{plan.name}</h2>
            </div>
            <ul>
              {plan.desc.map((text, index) => (
                <li key={text}>
                  <p
                    id={plan.name + index}
                    className={
                      itemActive === plan.name + index ? 'item-active' : ''
                    }
                    onClick={handleClick}
                  >
                    {text}
                  </p>
                  <div
                    className={
                      itemActive === plan.name + index
                        ? 'desc desc-active'
                        : 'desc'
                    }
                  >
                    <span>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Et rerum quidem vitae veritatis quos necessitatibus
                      voluptatem iure possimus
                    </span>
                  </div>
                </li>
              ))}
            </ul>
            <Button text="matricule-se" color={plan.btnColor} />
            <div className="price">
              <span id="text-1">R$</span>
              <span id="text-2">{plan.price}</span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Planos;
