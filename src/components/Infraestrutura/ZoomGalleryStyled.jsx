import styled from 'styled-components';
import arrowCircle from '../../assets/icons/arrow-circle-light.svg';
import closeCircle from '../../assets/icons/close-circle.svg';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  justify-content: center;
  background: rgba(7, 0, 47, 0.99);
  z-index: 1000;

  div.imgs {
    display: grid;
    z-index: 1;
    animation: zoom ease 0.3s forwards;
  }

  /* TODAS AS IMAGENS */
  .imgs :nth-child(n) {
    grid-area: 1/-1;
    width: 80vw;
    height: 90vh;
    object-fit: cover;
  }

  /* IMAGEM 1 */
  .imgs :nth-child(1) {
    z-index: 10;
    animation: fade ease 1s forwards;
  }

  /* DA IMAGEM 2 EM DIANTE  */
  .imgs :nth-child(n + 2) {
    opacity: 0;
  }

  button {
    position: fixed;
    opacity: 0.3;
    z-index: 10;
    transition: 0.3s;

    &:hover {
      opacity: 0.6;
    }
  }

  #btn-left {
    top: 50%;
    left: 3%;
    width: 50px;
    height: 50px;
    background: url(${arrowCircle}) center center no-repeat;
  }

  #btn-right {
    top: 50%;
    right: 3%;
    width: 50px;
    height: 50px;
    background: url(${arrowCircle}) center center no-repeat;
    transform: rotate(180deg);
  }

  #btn-close {
    top: 3%;
    right: 3%;
    width: 50px;
    height: 50px;
    background: url(${closeCircle}) center center no-repeat;
  }
`;
