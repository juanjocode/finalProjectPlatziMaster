import React from 'react';

const Input = ({ value, type, label, placeholder, name, id, onChange, onKeyPress }) => (
  <div className="form__input">
    <label>
      *
      {label || 'Label'}
    </label>
    <input
      placeholder={placeholder || label || 'Placeholder'}
      type={type || 'text'}
      name={name || label || null}
      id={id || null}
      onChange={onChange}
      onKeyPress={onKeyPress}
      defaultValue={value || ''}
    />
  </div>
);

export default Input;
