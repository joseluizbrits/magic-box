import styled from 'styled-components';
import arrowCircle from '../../assets/icons/arrow-circle-light.svg';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  transition: .3s;
  opacity: 0;

  &.show {
    opacity: 1;
  }

  .gallery.right {
    display: grid;
    align-items: center;
    max-width: 760px;

    // Todas imagens
    & :nth-child(n) {
      grid-area: 1/1;
      width: 100%;
      border-radius: 3px;
    }

    /* Imagem 1 */
    & :nth-child(1) {
      filter: drop-shadow(-1px 1px 10px rgba(0, 0, 0, 0.3));
      animation: fromLastToOne ease 0.3s forwards;
      z-index: 3;
    }

    /* Imagem 2 */
    & :nth-child(2) {
      filter: grayscale(50%) blur(2px);
      animation: fromOneToTwo ease 0.3s forwards;
      z-index: 2;
    }

    /* Imagem 3 */
    & :nth-child(3) {
      filter: grayscale(50%) blur(2px);
      animation: fromTwoToThree ease 0.3s forwards;
      z-index: 1;
    }

    /* Da imagem 4 adiante */
    & :nth-child(n + 4) {
      animation: animeRestRight ease 10s forwards;
    }
  }

  /* +-+-+-+-+-+-+-+ ANIMAÇÃO RIGHT +-+-+-+-+-+-+-+ */
  @keyframes fromLastToOne {
    from {
      transform: translateX(0) scale(0);
    }
    50% {
      transform: translateX(-340px) scale(0.8);
    }
    to {
      transform: translateX(0) scale(1);
    }
  }

  @keyframes fromOneToTwo {
    from {
      transform: translateX(0) scale(1);
    }
    to {
      transform: translateX(340px) scale(0.8);
    }
  }

  @keyframes fromTwoToThree {
    from {
      transform: translateX(340px) scale(0.8);
    }
    to {
      transform: translateX(580px) scale(0.6);
    }
  }

  @keyframes animeRestRight {
    from {
      transform: translateX(0) scale(0);
    }
    to {
      transform: scale(0);
    }
  }

  /* +-+-+-+-+-+-+-+ MOVE LEFT +-+-+-+-+-+-+-+ */
  .gallery.left {
    display: grid;
    align-items: center;
    max-width: 760px;

    // Todas imagens
    & :nth-child(n) {
      grid-area: 1/1;
      width: 100%;
      border-radius: 3px;
    }

    /* Imagem 1 */
    & :nth-child(1) {
      filter: drop-shadow(-1px 1px 10px rgba(0, 0, 0, 0.3));
      animation: fromTwoToOne ease 0.3s forwards;
      z-index: 3;
    }

    /* Imagem 2 */
    & :nth-child(2) {
      filter: grayscale(50%) blur(2px);
      animation: fromThreeToTwo ease 0.3s forwards;
      z-index: 2;
    }

    /* Imagem 3 */
    & :nth-child(3) {
      filter: grayscale(50%) blur(2px);
      animation: fromRestToThree ease 0.4s forwards;
      z-index: 1;
    }

    /* Da imagem 4 adiante */
    & :nth-child(n + 4) {
      animation: animeRestLeft ease 0.3s forwards;
    }
  }

  /* +-+-+-+-+-+-+-+ ANIMAÇÃO LEFT +-+-+-+-+-+-+-+ */
  @keyframes fromTwoToOne {
    from {
      transform: translateX(340px) scale(0.8);
    }
    to {
      transform: translateX(0) scale(1);
    }
  }

  @keyframes fromThreeToTwo {
    from {
      transform: translateX(580px) scale(0.6);
    }
    to {
      transform: translateX(340px) scale(0.8);
    }
  }

  @keyframes fromRestToThree {
    from {
      transform: translateX(340px) scale(0);
    }
    to {
      transform: translateX(580px) scale(0.6);
    }
  }
  @keyframes animeRestLeft {
    from {
      transform: translateX(0) scale(1);
    }
    50% {
      transform: translateX(-340px) scale(0.1);
    }
    to {
      transform: translateX(580px) scale(0);
    }
  }

  /* +-+-+-+-+-+-+-+ BUTTONS +-+-+-+-+-+-+-+ */
  .button-group {
    display: flex;
    gap: 4px;
    position: absolute;
    bottom: -36px;
    right: -200px;

    transition: 0.3s;
    transform: scale(0);

    &.show {
      transform: scale(1);
    }
  }

  .button-group button {
    width: 50px;
    height: 50px;
    background: url(${arrowCircle});
    cursor: pointer;

    &#btn-right {
      transform: rotate(180deg);
    }

    &:hover {
      opacity: 0.8;
    }
  }

  /* +-+-+-+-+-+-+-+ RESPONSIVE +-+-+-+-+-+-+-+ */
  @media (max-width: 1300px) {
    .gallery.left,
    .gallery.right {
      max-width: 600px;
    }
  }

  @media (max-width: 1080px) {
    .gallery.left,
    .gallery.right {
      max-width: 760px;
      overflow: hidden;
    }

    .button-group {
      bottom: -90px;
      right: 32px;
    }
  }
`;
