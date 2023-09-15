import styled from 'styled-components';

export const Section = styled.section`
  .content {
    height: 100%;
    display: flex;
    position: relative;

    &::before {
      content: '';
      display: block;
      background-color: var(--p4);
      position: absolute;
      top: 64px;
      left: 830px; // largura da imagem
      width: 360px;
      height: 400px;
      border-radius: 0 3px 3px 0;
      animation: fromRight ease-in 0.3s forwards;
    }

    &::after {
      content: '';
      display: block;
      background-color: var(--p5);
      height: 600px; // altura da imagem
      flex: 1;
    }
  }

  .img-box {
    max-width: 830px;
    height: 600px;
    background: var(--p8);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin-top: -1px; //corrigindo a imagem (ela é um print mal tirado)
  }

  .circles {
    position: absolute;
    top: 40px;
    left: 40px;
  }

  .title {
    position: absolute;
    top: 120px;
    left: 600px;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.1) 50%,
      rgba(0, 0, 0, 0)
    );
    opacity: 0;
    animation: fade 0.3s ease-in forwards;
    animation-delay: 0.6s;
  }

  .title h1 {
    font-family: var(--title);
    font-size: 3rem;
    font-weight: 700;
    line-height: 4rem;
    color: var(--p1);
    max-width: 16ch;

    span {
      text-transform: uppercase;
      color: var(--p6);
    }
  }

  .title button {
    position: absolute;
    bottom: -64px;
    right: 0;
    transition: all ease 0.3s;

    &:hover,
    &:focus {
      filter: brightness(150%);
    }
  }

  #arrow-down {
    position: absolute;
    top: 500px;
    left: 1073px;
    animation: fadeInFadeOut 0.5s alternate infinite;
  }

  /* ---------- RESPONSIVO ---------- */
  @media (max-width: 1240px) {
    .content::before {
      left: 730px;
    }

    .img-box {
      max-width: 730px;
    }

    .title {
      left: 540px;

      button {
        right: 36px;
      }
    }

    #arrow-down {
      left: 900px;
    }
  }

  @media (max-width: 1100px) {
    .content::before {
      display: none;
    }

    .img-box {
      max-width: 830px;
    }

    .title {
      left: 600px;

      h1 {
        font-size: 2.5rem;
      }

      button {
        right: 36px;
      }
    }

    #arrow-down {
      top: 460px;
      left: 900px;
    }
  }

  @media (max-width: 940px) {
    .title {
      top: 80px;

      h1 {
        font-size: 2rem;
      }

      button {
        bottom: -56px;
        right: 36px;
      }
    }

    #arrow-down {
      display: none;
    }
  }

  @media (max-width: 830px) {
    .content {
      flex-direction: column;

      &:after {
        display: none;
      }
    }

    .title {
      position: initial;
      margin-top: -240px;
      height: 240px;
      display: flex;
      align-items: center;
      background: linear-gradient(
        to top,
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0.5) 30%,
        rgba(0, 0, 0, 0)
      );

      h1 {
        font-size: 3rem;
        max-width: 30ch;
        padding: 0 40px;

        span {
          color: var(--p3);
        }
      }

      button {
        display: none;
      }
    }
  }

  @media (max-width: 620px) {
    .circles {
      display: none;
    }

    .title {
      margin-top: -300px;

      h1 {
        font-size: 2.5rem;

        span {
          color: var(--p1);
        }
      }
    }
  }

  @keyframes fadeInFadeOut {
    to {
      opacity: 1;
    }
    from {
      opacity: 0.5;
      transform: translateY(-12px);
    }
  }
`;
