import React from 'react';
import './text-field.scss';

const TextField = ({ value, placeholder, onChange }: any) => (
  <input
    className="text-field"
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
);

export default TextField;
