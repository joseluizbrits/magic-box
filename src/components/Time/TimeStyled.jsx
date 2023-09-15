import styled from 'styled-components';

export const Section = styled.section`
  background: var(--w);
  padding-bottom: 240px;

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
    padding-top: 40px;
    padding-bottom: 120px;
  }

  h1 #text-1 {
    color: var(--p3);
    display: flex;
    align-items: center;
    gap: 16px;

    &::after {
      content: '';
      display: inline-block;
      width: 240px;
      height: 2px;
      background: var(--p2);
    }
  }

  h1 #text-2 {
    color: var(--p6);
    display: flex;
    align-items: center;
    gap: 16px;

    &::before {
      content: '';
      display: inline-block;
      width: 170px;
      height: 2px;
      background: var(--p2);
    }
  }

  .team {
    padding: 0 40px 0 40px;
  }

  .team .list {
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
  }

  .team .list .item {
    flex: 1 0 240px;
    border-radius: 3px;
    display: grid;
    cursor: pointer;
    overflow: hidden;

    &::before {
      content: '';
      display: block;
      position: relative; // só para que não seja static
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.3);
      grid-area: 1/-1;
      z-index: 1;
      transition: 0.3s;
    }
  }

  .team .list .item h2 {
    grid-area: 1/-1;
    justify-self: center;
    align-self: center;
    color: var(--p1);
    font-family: var(--title);
    font-weight: 500;
    font-size: 2rem;
    letter-spacing: 0.05rem;
    text-transform: capitalize;
    z-index: 2;
    transition: 0.3s;
  }

  .team .list .item .label {
    grid-area: 1/-1;
    justify-self: end;
    align-self: end;
    width: 30%;
    height: 12.5%;
    background: linear-gradient(to right, rgba(0, 0, 0, 0) 5%, #4d3baf);
    display: flex;
    justify-content: end;
    align-items: center;
    border-radius: 0 0 3px 3px;
    z-index: 2;
    transition: 0.3s;
  }

  .team .list .item .label p {
    color: var(--p3);
    font-family: var(--text);
    font-weight: 400;
    font-size: 1rem;
    padding-right: 16px;
  }

  .team .list .item img {
    grid-area: 1/-1;
    width: 100%;
    max-height: 460px;
    object-fit: cover;
    object-position: top;
    border-radius: 3px;
    transition: 0.3s;
  }

  .team .list .item:hover {
    &::before {
      background: rgba(0, 0, 0, 0.05);
    }

    h2 {
      font-size: 3rem;
      opacity: 0.6;
    }

    .label {
      width: 100%;
    }

    .label p {
      color: var(--p2);
    }

    img {
      transform: scale(1.1);
    }
  }

  @media (max-width: 1000px) {
    h1 {
      font-size: 2.5rem;
    }
  }

  @media (max-width: 700px) {
    h1 {
      font-size: 1.75rem;

      #text-1::after {
        display: none;
      }

      #text-2::before {
        display: none;
      }
    }
  }

  @keyframes label {
    from {
      background: linear-gradient(to right, rgba(0, 0, 0, 0) 99%, #4d3baf);
    }
  }
`;
