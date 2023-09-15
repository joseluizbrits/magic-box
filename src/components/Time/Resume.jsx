import React from 'react';
import { Container } from './ResumeStyled';

function Resume({ resumeName, setResumeName, resumeList }) {
  function handleClick({ target }) {
    if (target.classList.contains('out')) setResumeName('');
  }

  return (
    <Container onClick={handleClick} className="out">
      <div>
        <h2>{resumeName}</h2>
        <ul>
          {resumeList[resumeName].map((item) => (
            <li>
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </div>
      <button className="out"></button>
    </Container>
  );
}

export default Resume;
