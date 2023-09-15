import styled from 'styled-components';
import arrow from '../../assets/icons/arrow.svg';
import closeCircle from '../../assets/icons/close-circle.svg';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(7, 0, 47, 0.95);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  div {
    width: 60vw;
    animation: zoom ease 0.3s forwards;
  }

  h2 {
    color: var(--p1);
    font-family: var(--title);
    font-weight: 700;
    font-size: 3rem;
    letter-spacing: 0.05rem;
    text-transform: capitalize;

    &::after {
      content: '';
      display: block;
      width: 100%;
      height: 2px;
      margin: 12px 0 24px 0;
      background: var(--p5);
    }
  }

  li + li {
    margin-top: 16px;
  }

  li {
    display: flex;
    align-items: center;

    &::before {
      content: '';
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-right: 12px;
      background: url(${arrow});
    }
  }

  p {
    color: var(--p1);
    font-family: var(--text);
    font-weight: 400;
    font-size: 1.25rem;
  }

  button {
    position: fixed;
    top: 10%;
    right: 5%;
    width: 50px;
    height: 50px;
    opacity: 0.3;
    background: url(${closeCircle});
    transition: 0.3s;

    &:hover {
      opacity: 0.6;
    }
  }

  @media (max-width: 880px) {
    div {
      width: 80vw;
    }

    p {
      font-size: 1rem;
    }
  }

  @media (max-width: 620px) {
    div {
      width: 90vw;
    }

    h2 {
      font-size: 2.5rem;
    }

    p {
      font-size: 0.875rem;
    }
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 2rem;
    }

    p {
      font-size: 0.75rem;
    }
  }
`;
