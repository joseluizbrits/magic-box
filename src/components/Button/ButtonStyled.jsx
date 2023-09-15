import styled from 'styled-components';
import arrow from '../../assets/icons/arrow-button.svg';

export const Style = styled.button`
  font-family: var(--title);
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  color: var(--p1);
  padding: 12px 48px 12px 20px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all ease 0.3s;

  &::after {
    content: '';
    display: inline;
    width: 16px;
    height: 16px;
    background: url(${arrow});
    transform: scale(0.6);
  }
`;
