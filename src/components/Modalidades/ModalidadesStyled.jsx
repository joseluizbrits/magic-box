import styled from 'styled-components';

export const Section = styled.section`
  background: var(--p8);
  padding-bottom: 160px;

  h1 {
    font-family: var(--title);
    font-weight: 700;
    font-size: 4rem;
    letter-spacing: 0.05rem;
    text-transform: uppercase;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 80px 0 80px 0;

    transition: 0.3s;
    transform: translateX(200px);
    opacity: 0;

    &.show {
      transform: translateX(0);
      opacity: 1;
    }
  }

  h1 #text-1 {
    color: var(--p6);
    display: flex;
    align-items: center;
    gap: 16px;

    &::after {
      content: '';
      display: inline-block;
      width: 240px;
      height: 2px;
      background: var(--p7);
    }
  }

  h1 #text-2 {
    color: var(--p1);
    display: flex;
    align-items: center;
    gap: 16px;

    &::before {
      content: '';
      display: inline-block;
      width: 360px;
      height: 2px;
      background: var(--p7);
    }
  }

  .grid {
    display: flex;
    aspect-ratio: 16/8;
  }

  .grid .img-box {
    width: 33.33%;
    height: 100%;
    position: relative;

    transition: 0.3s;
    opacity: 0;

    &::before {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0.3;
      transition: 0.3s;
    }

    &:hover {
      width: 45%;

      &::before {
        opacity: 0.25;
      }

      p {
        opacity: 1;
        transform: translateY(0);
        pointer-events: initial;
      }
    }
  }

  .grid .img-box img {
    max-width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .grid #img1::before {
    background: #5a78e3;
  }

  .grid #img2::before {
    background: #d05ae3;
  }

  .grid #img3::before {
    background: #711c99;
  }

  .grid .img-box h2 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: max-content;
    margin: 0 0 24px 40px;
    padding: 8px 40px 8px 16px;
    font-family: var(--title);
    font-weight: 700;
    font-size: 2.5rem;
    letter-spacing: 0.05rem;
    text-transform: lowercase;
  }

  .grid #img1 h2 {
    color: var(--p2);
    background: rgba(7, 0, 47, 0.3);
  }
  .grid #img2 h2 {
    color: var(--p1);
    background: rgba(79, 59, 195, 0.3);
  }
  .grid #img3 h2 {
    color: var(--p8);
    background: rgba(163, 142, 255, 0.3);
  }

  .grid .img-box p {
    position: absolute;
    bottom: 200px;
    right: 64px;
    font-family: var(--text);
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 2.25rem;
    padding: 8px 4px 8px 12px;
    width: 22ch;
    color: var(--p2);
    background: rgba(7, 0, 47, 0.3);
    transition: 0.6s;
    opacity: 0;
    transform: translateY(-80px);
    pointer-events: none;
  }

   #img1.show {
    opacity: 1;
  }

  #img2.show {
    opacity: 1;
    transition-delay: 0.2s;
  }
    
  #img3.show {
    opacity: 1;
    transition-delay: 0.4s;
  }

  /* +-+-+-+-+ RESPONSIVE +-+-+-+-+ */
  @media (max-width: 960px) {
    h1 {
      font-size: 2.5rem;
    }

    h1 #text-1::after {
      width: 180px;
    }

    h1 #text-2::before {
      width: 200px;
    }

    .grid .img-box h2 {
      font-size: 1.5rem;
      margin: 0 0px 24px 24px;
    }

    .grid .img-box p {
      bottom: 120px;
      right: 32px;
      font-size: 1rem;
      line-height: 1.5rem;
      width: 23ch;
    }
  }

  @media (max-width: 620px) {
    & {
      padding-bottom: 80px;
    }

    h1 {
      font-size: 2.25rem;
      padding-top: 160px;
    }

    h1 #text-1::after {
      width: 80px;
    }

    h1 #text-2::before {
      width: 120px;
    }

    .grid {
      flex-direction: column;
      aspect-ratio: initial;

      #img2.show {
        transition-delay: 0s;
      }

      #img3.show {
        transition-delay: 0s;
      }
    }

    .grid .img-box {
      width: auto;

      &:hover {
        width: auto;

        &::before {
          opacity: 0.3;
        }
      }
    }

    .grid .img-box p {
      bottom: 160px;
      right: 60px;
      font-size: 1.5rem;
      line-height: 2.25rem;
      width: 22ch;
      opacity: 1;
      transform: translateY(0);
      pointer-events: initial;
    }
  }
  @media (max-width: 500px) {
    h1 {
      font-size: 2rem;
    }

    h1 #text-1::after,
    h1 #text-2::before {
      display: none;
    }
  }
`;
