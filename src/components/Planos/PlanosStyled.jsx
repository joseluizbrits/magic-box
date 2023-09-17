import styled from 'styled-components';
import circleP5 from '../../assets/icons/circle-p5.svg';
import circleP8 from '../../assets/icons/circle-p8.svg';
import arrowP3 from '../../assets/icons/arrow-p3.svg';
import arrowP7 from '../../assets/icons/arrow-p7.svg';
import arrowP8 from '../../assets/icons/arrow-p8.svg';

export const Section = styled.section`
  background: var(--p8);
  padding-bottom: 160px;
  position: relative;

  .fold {
    position: absolute;
    top: -136px;
    transform: rotate(180deg);
    
    transition: 0.3s;
    left: 200px;

    &.show {
      left: 0;
    }
  }

  h1 {
    font-family: var(--title);
    font-weight: 700;
    font-size: 3rem;
    letter-spacing: 0.05rem;
    text-transform: uppercase;
    color: var(--p1);
    max-width: 1160px;
    margin: 0 auto;
    padding: 120px 0 120px 56px;
    display: flex;
    align-items: center;
    gap: 16px;

    transition: 0.3s;
    transition-delay: 0.3s;
    transform: translateY(-100px);
    opacity: 0;

    &.show {
      opacity: 1;
      transform: translateY(0);
    }

    &::after {
      content: '';
      display: block;
      width: 30%;
      height: 2px;
      background: var(--p7);
    }
  }

  .box {
    max-width: 1160px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;
  }

  .box .plan {
    flex: 0 0 360px;
    height: 537px;
    border-radius: 3px;
    background: var(--p4);
    display: flex;
    flex-direction: column;

    transition: 0.1s;
    transform: translateY(-100px);
    opacity: 0;

    &.show {
      transform: translateY(0);
      opacity: 1;
    }
    
    &.plan-active {
      height: 100%;
    }

    &:hover {
      filter: brightness(125%);
    }
  }

  .box .plan#semestral.show {
    transition-delay: 0.4s;
  }

  .box .plan#trimestral.show {
    transition-delay: 0.2s;
  }

  .box .plan .name {
    height: 72px;
    border-radius: 3px 3px 0 0;
    background: linear-gradient(135deg, rgba(0, 0, 0, 0) 10%, #4d3baf);
    display: flex;
    align-items: center;

    h2 {
      font-family: var(--title);
      font-weight: 700;
      font-size: 2rem;
      letter-spacing: 0.05rem;
      text-transform: lowercase;
      color: var(--p6);
      padding: 20px 0 20px 56px;
    }
  }

  .box .plan ul {
    margin: 16px 40px 0 40px;
    min-height: 240px;
  }

  .box .plan ul li + li {
    border-top: 1px solid var(--p5);
  }

  .box .plan ul li p {
    color: var(--p2);
    font-family: var(--text);
    font-weight: 400;
    font-size: 0.875rem;
    padding: 20px 0 20px 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    position: relative;
    transition: 0.1s;

    &:hover {
      background: rgba(0, 0, 0, 0.05);
    }

    &::before {
      content: '';
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-right: 8px;
      background: url(${circleP5});
    }

    &::after {
      content: '';
      display: inline-block;
      width: 20px;
      height: 20px;
      background: url(${arrowP3});
      position: absolute;
      right: 0;
      transition: 0.3s;
    }
  }

  /* SPIN ARROW */
  .box .plan ul li p.item-active::after {
    transform: rotate(180deg);
  }

  .box .plan ul li .desc {
    color: var(--p2);
    font-family: var(--text);
    font-weight: 400;
    font-size: 0.725rem;
    line-height: 1.25rem;
    max-width: 35ch;
    height: 0;
    margin-left: 20px;
    overflow-y: hidden;
    pointer-events: none;
    transition: 0.3s;

    &.desc-active {
      height: 100px;
      pointer-events: auto;
    }
  }

  .box .plan button {
    margin: 28px 0 40px 40px;
    width: max-content;
  }

  .box .plan .price {
    height: 100px;
    border-radius: 0 0 3px 3px;
    background: linear-gradient(to right, rgba(0, 0, 0, 0) 10%, #4d3baf);
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: var(--title);
    font-weight: 700;

    #text-1 {
      font-size: 1rem;
      color: var(--p7);
      margin: -16px 4px 0 0;
    }

    #text-2 {
      font-size: 3rem;
      color: var(--p1);
    }
  }

  /* +-+-+-+-+-+ PLANO TRIMESTRAL +-+-+-+-+-+ */
  .box #trimestral {
    background: var(--p6);

    h2 {
      color: var(--p7);
    }

    li + li {
      border-top: 1px solid var(--p7);
    }

    li .desc {
      color: var(--p2);
    }

    p {
      color: var(--p3);

      &::after {
        background: url(${arrowP7});
      }
    }

    .price #text-2 {
      color: var(--p3);
    }
  }

  /* +-+-+-+-+-+ PLANO MENSAL +-+-+-+-+-+ */
  .box #mensal {
    background: var(--p7);

    h2 {
      color: var(--p8);
    }

    li + li {
      border-top: 1px solid var(--p8);
    }

    li .desc {
      color: var(--p3);
    }

    p {
      color: var(--p4);

      &::before {
        background: url(${circleP8});
      }

      &::after {
        background: url(${arrowP8});
      }
    }

    .price #text-2 {
      color: var(--p3);
    }
  }

  /* +-+-+-+-+-+ RESPONSIVE +-+-+-+-+-+ */
  @media (max-width: 1080px) {
    .fold {
      width: 440px;
      height: 68px;
      top: -68px;
    }

    h1::after {
      width: 15%;
    }
  }

  @media (max-width: 760px) {
    h1::after {
      display: none;
    }

    .box .plan#semestral.show {
      transition-delay: 0s;
    }

    .box .plan#trimestral.show {
      transition-delay: 0s;
    }
  }

  @media (max-width: 520px) {
    .fold {
      width: 220px;
      height: 34px;
      top: -34px;
    }
  }

  @keyframes grow {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
