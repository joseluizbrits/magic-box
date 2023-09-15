import React from 'react';

const Field = ({ name, label, type, value, onChange, onBlur, error }) => {
  return (
    <div className={'field-' + name}>
      <label htmlFor={name}>{label}</label>
      {type !== 'textarea' ? (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      ) : (
        <textarea
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      )}
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Field;
