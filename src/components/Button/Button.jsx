import React from 'react';
import { Style } from './ButtonStyled';

function Button({ text, color }) {
  return <Style style={{ background: color }}>{text}</Style>;
}

export default Button;
