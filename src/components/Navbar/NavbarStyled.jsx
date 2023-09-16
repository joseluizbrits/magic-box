import styled from 'styled-components';

export const Header = styled.header`
  background: var(--p8);

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
  }

  a {
    color: var(--p1);
    font-family: var(--title);
    font-size: 1.5rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 4px;
  }
`;

export const Menu = styled.nav`
  display: flex;
  align-items: center;
  gap: 32px;

  ul {
    display: flex;
    align-items: center;
    gap: 32px;

    a {
      font-family: var(--title);
      font-size: 1rem;
      font-weight: 400;
      color: var(--p2);
      position: relative;

      &:after {
        content: '';
        position: absolute;
        top: 24px;
        left: 0;
        height: 0;
        width: 0;
        background: var(--p1);
        transition: width ease 0.3s;
      }

      &:hover::after {
        height: 2px;
        width: 100%;
      }

      // links mobile
      &.mobile {
        display: none;
      }
    }
  }

  // menu mobile
  &.mobile {
    position: absolute;
    top: 80px;
    left: 0;
    background: var(--p7);
    width: 100%;
    flex-direction: column;
    gap: 0;
    z-index: 1000;
    transition: all ease 0.3s;
    height: 0;
    visibility: hidden;
    overflow-y: hidden;

    ul {
      width: 100%;
      flex-direction: column;
      align-items: center;
      gap: 0;

      a {
        align-items: center;
        justify-content: center;
        width: 100%;
        min-height: 72px;
        text-align: center;
        font-size: 1.5rem;
        text-transform: uppercase;
        letter-spacing: 0.05rem;
        border-bottom: 2px solid var(--p8);
        color: var(--p1);
        transition: all ease 0.3s;

        &:hover,
        &:focus {
          background: var(--p6);
        }

        &::before,
        &::after {
          display: none;
        }
      }

      // links mobile
      a.mobile {
        display: flex;
      }
    }
  }

  #btn {
    font-family: var(--title);
    font-size: 1rem;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.05rem;
    color: var(--p1);
    background: linear-gradient(to right, #09002f, #24175e);
    padding: 12px 24px;
    border-radius: 3px;
    transition: all ease 0.3s;

    &:hover,
    &:focus {
      filter: brightness(150%);
    }

    &.mobile {
      background: var(--p6);
      font-size: 1.5rem;
      margin-top: 20px;
      padding: 16px 32px;
      width: 80%;
    }
  }

  // menu mobile ativo
  &.mobile.active {
    height: 100vh;
    visibility: visible;
    overflow-y: auto;
  }
`;

export const Hamburguer = styled.button`
  background: none;
  padding: 16px;
  margin-right: -16px;
  display: none;

  #hamburguer {
    display: block;
    background: var(--p1);
    height: 2px;
    transition: all ease 0.3s;

    // traço do meio
    &::before,
    &::after {
      content: '';
      display: block;
      width: 24px;
      height: 2px;
      transition: all ease 0.3s;
    }

    // traço de cima
    &::before {
      box-shadow: 0 -8px 0 0 var(--p1);
    }

    // traço de baixo
    &::after {
      box-shadow: 0 6px 0 0 var(--p1);
    }

    // menu ativo (formar o X)
    &.active {
      // traço do meio
      background: none;

      // traço de cima
      &::before {
        box-shadow: 0 -2px 0 0 var(--p1);
        transform: rotate(-135deg) translateY(1px);
      }

      // traço de baixo
      &::after {
        box-shadow: 0 2px 0 0 var(--p1);
        transform: rotate(135deg);
      }
    }
  }

  &.mobile {
    display: block;
  }
`;
