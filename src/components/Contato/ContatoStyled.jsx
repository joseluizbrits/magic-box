import styled from 'styled-components';
import img from '../../assets/imgs/img-contato.jpg';

export const Section = styled.section`
  background: var(--p8);
  display: grid;

  &::before {
    content: '';
    display: block;
    height: 730px;
    background: url(${img}) bottom left no-repeat fixed;
    background-size: cover;
    opacity: 0.3;
    grid-area: 1/-1;
  }

  .content {
    margin: 0 80px;
    display: grid;
    grid-template-columns: 5fr 7fr;
    grid-area: 1/-1;
    align-self: center;
    z-index: 1;
  }

  .content .title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8px;
  }

  .content .title h1 {
    color: var(--p1);
    font-family: var(--title);
    font-weight: 700;
    font-size: 2rem;
    line-height: 2.5rem;
    letter-spacing: 0.05rem;
    text-transform: uppercase;
  }

  .content .title p {
    color: var(--p2);
    font-family: var(--text);
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5rem;
    max-width: 40ch;
  }

  .content .title a {
    color: var(--p3);
    font-family: var(--title);
    font-weight: 400;
    font-size: 1rem;
    margin-top: 8px;
  }

  form {
    background: var(--p8);
    border-radius: 3px;
    transition: 0.3s;
    opacity: 0.8;

    &:hover {
      opacity: 1;
    }
  }

  form .fields {
    margin: 40px;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  form .fields label {
    color: var(--p1);
    font-family: var(--title);
    font-weight: 400;
    font-size: 1rem;
  }

  form .fields input[type='text'],
  form .fields input[type='email'] {
    width: 100%;
    height: 40px;
    border-radius: 3px;
    border: none;
    margin-top: 8px;
    padding: 0 16px;
    background: var(--p7);
    color: var(--p3);
    transition: 0.3s;
  }

  form .fields textarea {
    width: 100%;
    height: 140px;
    border-radius: 3px;
    border: none;
    resize: none;
    margin-top: 8px;
    padding: 8px 16px;
    background: var(--p7);
    color: var(--p3);
    transition: 0.3s;
  }

  form .fields input[type='text']:hover,
  form .fields input[type='email']:hover,
  form .fields textarea:hover {
    background: var(--p6);
  }

  form .fields input[type='text']:focus,
  form .fields input[type='email']:focus,
  form .fields textarea:focus {
    background: var(--p6);
    border: 1px solid var(--p5);
    box-shadow: 0px 0px 4px 1px var(--p6);
  }

  form .fields button {
    border: none;
    width: 100%;
    height: 46px;
    border-radius: 3px;
    background: var(--p4);
    color: var(--p8);
    font-family: var(--title);
    font-weight: 700;
    font-size: 1rem;
    letter-spacing: 0.05rem;
    text-transform: uppercase;
    transition: 0.3s;

    &:hover {
      opacity: 0.7;
    }
  }

  form .fields p.success,
  form .fields p.error {
    font-family: var(--text);
    font-weight: 400;
    font-size: 0.75rem;
  }

  form .fields p.success {
    color: #6bbf59;
  }

  form .fields p.error {
    color: #ed4337;
    margin-top: 4px;
  }

  /* +-+-+-+-+ RESPONSIVE +-+-+-+-+ */
  @media (max-width: 1300px) {
    .content {
      margin: 0 40px;
    }
  }

  @media (max-width: 1080px) {
    &::before {
      height: 860px;
    }

    .content {
      height: auto;
      grid-template-columns: auto;
    }

    .content .title {
      margin-bottom: 40px;

      p {
        max-width: max-content;
        opacity: 0.5;
      }

      a {
        display: none;
      }
    }

    form .fields {
      margin: 40px;
    }
  }

  @media (max-width: 600px) {
    .content {
      margin: 0 20px;
    }

    .content .title p {
      font-size: 0.75rem;
      line-height: 1.25rem;
    }

    form .fields {
      margin: 20px;
      gap: 16px;

      label,
      button {
        font-size: 0.875rem;
      }

      p.success,
      p.error {
        font-size: 0.5rem;
      }
    }
  }

  @media (max-width: 390px) {
    .content .title h1 {
      font-size: 1.75rem;
    }
  }
`;
