import styled from 'styled-components';
import circleP3 from '../../assets/icons/circle-p3.svg';
import circleP4 from '../../assets/icons/circle-p4.svg';
import arrowCircleDark from '../../assets/icons/arrow-circle-dark.svg';

export const Section = styled.section`
  height: 840px;
  background: linear-gradient(to bottom, #080037 20%, #988ace, var(--w));
  display: flex;
  justify-content: center;

  h2 {
    font-family: var(--title);
    font-size: 2.5rem;
    font-weight: 700;
    text-transform: lowercase;
  }

  p {
    font-family: var(--text);
    font-weight: 400;
    letter-spacing: 0.05rem;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .content h1 {
    color: var(--p1);
    font-family: var(--title);
    font-weight: 700;
    letter-spacing: 0.05rem;
    text-transform: uppercase;

    transition: 0.3s;
    margin: 40px 0 120px -200px;
    opacity: 0;

    &.show {
      margin-left: 0;
      opacity: 1;
    }

    #text-1 {
      font-size: 2rem;

      strong {
        color: var(--p3);
      }
    }

    #text-2 {
      font-size: 4rem;
      padding-left: 160px;
    }
  }

  .content .cards {
    width: 1050px;
    height: 400px;
    position: relative;

    /* CARD TRANSPARENTE SEM CONTEÚDO */
    &::after {
      content: '';
      display: block;
      width: 580px;
      height: 180px;
      background: rgba(7, 0, 47, 0.3);
      border-radius: 3px;
      position: absolute;
      bottom: 0;
      left: 64px;
    }
  }

  /* +-+-+-+-+ MAGIC CLUB +-+-+-+-+ */
  .content .cards #magic-club {
    width: 630px;
    border-radius: 3px;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;

    transition: 0.3s;
    transition-delay: 0.3s;
    background: rgba(230, 223, 255, 0.3);
    opacity: 0;

    &.show {
      opacity: 1;
    }

    &:hover {
      background: var(--p3);

      button {
        transform: scale(1.5);
      }
    }

    &::before {
      content: '';
      display: block;
      width: 12px;
      height: 12px;
      background: url(${circleP3});
      position: absolute;
      top: 24px;
      right: 24px;
    }
  }

  .content .cards #magic-club h2 {
    color: var(--p7);
    padding: 48px 0 0 48px;

    &::after {
      content: '';
      display: block;
      width: 65%;
      height: 2px;
      background: var(--p3);
      margin: 16px 0 16px 0;
    }
  }

  .content .cards #magic-club p {
    font-size: 2rem;
    line-height: 3rem;
    max-width: 30ch;
    padding: 0 0 48px 48px;
    color: var(--p1);
  }

  .content .cards #magic-club button {
    width: 25px;
    height: 25px;
    background: url(${arrowCircleDark});
    position: absolute;
    bottom: 48px;
    right: 48px;
    transition: 0.3s;

    &:hover,
    &focus {
      opacity: 0.8;
    }
  }

  /* +-+-+-+-+ PLAN PLUS +-+-+-+-+ */
  .content .cards #plan-plus {
    width: 500px;
    border-radius: 3px;
    position: absolute;
    top: 36px;
    left: 0;
    z-index: 1;

    transition: 0.3s;
    background: rgba(115, 90, 227, 0.3);
    opacity: 0;

    &.show {
      opacity: 1;
    }

    &:hover {
      background: var(--p3);
      z-index: 10;

      h2 {
        padding-left: 48px;
      }

      p {
        color: var(--p1);
        padding: 0 0 80px 48px;
      }

      button {
        bottom: 40px;
        left: 280px;
      }
    }

    &::before {
      content: '';
      display: block;
      width: 12px;
      height: 12px;
      background: url(${circleP4});
      position: absolute;
      top: 24px;
      left: 24px;
    }
  }

  .content .cards #plan-plus h2 {
    color: var(--p6);
    padding: 48px 0 16px 80px;
  }

  .content .cards #plan-plus p {
    font-size: 1.5rem;
    line-height: 2.25rem;
    max-width: 28ch;
    padding: 0 0 60px 80px;
    color: rgba(230, 223, 250, 0.5);
  }

  .content .cards #plan-plus button {
    position: absolute;
    bottom: -16px;
    left: 80px;

    &:hover,
    &:focus {
      filter: brightness(115%);
    }
  }

  /* +-+-+-+-+ RESPONSIVE +-+-+-+-+ */
  @media (max-width: 1080px) {
    .content .cards {
      width: 864px;

      &::after {
        display: none;
      }
    }
    .content .cards #magic-club {
      width: 500px;
      top: 0;
      right: 0;

      p {
        font-size: 1.5rem;
        line-height: 2.25rem;
      }
    }

    .content .cards #plan-plus {
      top: 36px;
      left: 0;
    }
  }

  @media (max-width: 880px) {
    & {
      height: 1000px;
    }

    .content h1 #text-1 {
      font-size: 1.5rem;
    }

    .content h1 #text-2 {
      font-size: 3.5rem;
      padding-left: 64px;
    }

    .content .cards {
      width: 0;
      height: 0;
      position: initial;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .content .cards #magic-club {
      position: relative;
    }

    .content .cards #plan-plus {
      position: relative;

      h2 {
        padding-left: 48px;
      }

      p {
        padding: 0 0 80px 48px;
        color: var(--p1);
      }

      button {
        bottom: 40px;
        left: 280px;
      }
    }
  }

  @media (max-width: 560px) {
    & {
      height: 1000px;
    }

    .content h1 #text-1 {
      font-size: 1rem;
    }

    .content h1 #text-2 {
      font-size: 2.5rem;
      padding-left: 28px;
    }

    .content .cards #magic-club,
    .content .cards #plan-plus {
      width: 340px;

      h2 {
        font-size: 2rem;
      }

      p {
        font-size: 1rem;
        line-height: 1.75rem;
      }
    }

    .content .cards #plan-plus {
      p {
        padding-bottom: 106px;
      }

      button {
        bottom: 40px;
        left: 110px;
      }

      &:hover {
        p {
          padding-bottom: 106px;
        }

        button {
          left: 110px;
        }
      }
    }
  }
`;
