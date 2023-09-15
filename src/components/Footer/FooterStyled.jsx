import styled from 'styled-components';
import insta from '../../assets/icons/instagram.svg';
import face from '../../assets/icons/facebook.svg';
import whats from '../../assets/icons/whatsapp.svg';
import map from '../../assets/imgs/map.jpg';

export const Container = styled.footer`
  background: var(--p8);

  p,
  h2,
  h3,
  a {
    letter-spacing: 0.05rem;
  }

  h2 {
    color: var(--p1);
    font-family: var(--title);
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 16px;
  }

  h3 {
    color: var(--p2);
    font-family: var(--text);
    font-size: 1rem;
    font-weight: 500;
    margin-top: 8px;
  }

  p {
    color: var(--p5);
    font-family: var(--text);
    font-size: 0.875rem;
    line-height: 1.5rem;
  }

  a {
    color: var(--p2);
    font-family: var(--text);
    font-size: 0.875rem;
    width: max-content;
    transition: 0.3s;

    & + a {
      padding-top: 12px;
    }

    &:hover {
      color: var(--p3);
    }
  }

  span {
    display: inline-block;
    width: 32px;
    height: 32px;
    margin-top: 8px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      transform: scale(1.5);
    }
  }

  .content {
    padding: 80px 80px 40px 80px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  .brand {
    margin-right: 60px;
  }

  .brand #logo {
    color: var(--p1);
    font-family: var(--title);
    font-size: 3rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 4px;

    svg {
      width: 56px;
      height: 56px;
    }
  }

  .brand p {
    max-width: 35ch;
    margin-top: 4px;
  }

  .brand #instagram {
    background: url(${insta}) no-repeat center center;
    margin-left: -8px;
    transition: 0.3s;
  }

  .brand #facebook {
    background: url(${face}) no-repeat center center;
  }

  .brand #whatsapp {
    background: url(${whats}) no-repeat center center;
  }

  .links {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .links div {
    display: flex;
    flex-direction: column;
  }

  .location .map {
    background: url(${map});
    width: 316px;
    height: 200px;
    border-radius: 3px;
    margin-bottom: 16px;

    iframe {
      border-radius: 3px;
      filter: grayscale(0.6);
    }
  }

  .copyright {
    grid-column: span 2;
    margin-top: -23px;
  }

  /* +-+-+-+-+ RESPONSIVE +-+-+-+-+ */
  @media (max-width: 1180px) {
    h3 {
      display: none;
    }

    p {
      font-size: 0.75rem;
    }

    .content {
      grid-template-columns: 1fr 1fr;
      padding: 80px 80px 40px 120px;
    }

    .brand #logo {
      font-size: 2.25rem;

      svg {
        width: 36px;
        height: 36px;
      }
    }

    .brand p {
      font-size: 0.75rem;
      line-height: 1.25rem;
    }

    .links {
      grid-area: 2;
      margin-top: 40px;
    }

    .location {
      grid-row: span 2;
      justify-self: center;
      align-self: center;
    }

    .location .map {
      margin-bottom: 8px;
    }

    .copyright {
      margin-top: 48px;
      text-align: center;
    }
  }

  @media (max-width: 880px) {
    .content {
      padding: 80px 40px 40px 40px;
    }

    .brand {
      margin: 0;
    }

    .location {
      justify-self: end;
    }
  }

  @media (max-width: 680px) {
    .content {
      padding: 80px 20px 20px 20px;
    }

    .content div {
      grid-column: span 2;
    }

    .brand {
      justify-self: center;
    }

    .brand #logo {
      font-size: 3rem;

      svg {
        width: 56px;
        height: 56px;
      }
    }

    .links {
      justify-self: center;
      margin-top: 60px;
      display: flex;
      gap: 110px;
    }

    .location {
      justify-self: center;
      margin: 60px 0 0 16px;
    }

    .location .map {
      margin-left: -12px;
    }

    .copyright {
      margin-top: 48px;
    }
  }
`;
