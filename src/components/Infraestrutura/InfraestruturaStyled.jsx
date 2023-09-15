import styled from 'styled-components';

export const Section = styled.section`
  height: 1000px;
  background: linear-gradient(to bottom, #d6cdff 20%, #0a0034);
  display: flex;
  justify-content: center;
  position: relative;

  .fold {
    position: absolute;
    top: 0;
    /* right: 0; */
    /* animation: fold ease-in 0.3s forwards; */

    transition: 0.3s;
    right: 30%;

    &.show {
      right: 0;
    }
  }

  .content {
    margin: 120px 0 0 -430px;
  }

  .content h1 {
    font-family: var(--title);
    font-weight: 700;
    letter-spacing: 0.05rem;
    text-transform: uppercase;
    margin-bottom: 120px;

    transition: 0.3s;
    opacity: 0;

    &.show {
      opacity: 1;
    }

    #text-1 {
      font-size: 2rem;
      color: var(--p8);
    }
    #text-2 {
      font-size: 2rem;
      color: var(--p3);
    }

    #text-3 {
      font-size: 3rem;
      color: var(--p3);
    }

    strong {
      font-size: 4rem;
      color: var(--p8);
    }
  }

  /* +-+-+-+-+ RESPONSIVE +-+-+-+-+ */
  @media (max-width: 1300px) {
    & {
      height: 880px;
    }

    .content {
      margin-left: -460px;
    }
  }

  @media (max-width: 1080px) {
    & {
      height: 1000px;
    }

    .fold {
      width: 440px;
      height: 68px;
    }

    .content {
      margin-left: 0;
    }
  }

  @media (max-width: 880px) {
    .content h1 {
      padding-left: 60px;

      #text-1,
      #text-2 {
        font-size: 1.5rem;
      }

      #text-3 {
        font-size: 2.5rem;
      }

      strong {
        font-size: 3.5rem;
      }
    }
  }

  @media (max-width: 650px) {
    & {
      height: 770px;
    }

    .content {
      margin-top: 60px;
    }

    .content h1 {
      margin-bottom: 80px;

      #text-1,
      #text-2 {
        font-size: 1rem;
      }

      #text-3 {
        font-size: 2rem;
      }

      strong {
        font-size: 2.5rem;
      }
    }
  }

  @media (max-width: 520px) {
    & {
      height: 660px;
    }

    .fold {
      width: 220px;
      height: 34px;
    }

    .content h1 {
      padding-left: 32px;

      #text-3 {
        font-size: 1.5rem;
      }

      strong {
        font-size: 2rem;
      }
    }
  }

  @keyframes fold {
    from {
      right: 30%;
    }
    to {
      right: 0;
    }
  }
`;
