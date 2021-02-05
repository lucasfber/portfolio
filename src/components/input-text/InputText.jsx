import React from 'react';
import PropTypes from 'prop-types';
import './InputText.css';

function InputText({ type, label, required }) {
  return (
    <div className="input-data">
      <input type={type} required={required} />
      <div className="underline" />
      <span>{label}</span>
    </div>
  );
}

InputText.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
};

export default InputText;
