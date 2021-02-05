import React from 'react';
import PropTypes from 'prop-types';
import './Textarea.css';

function Textarea({ label, cols, rows, required }) {
  return (
    <div className="textarea-data">
      <textarea cols={cols} rows={rows} required={required} />
      <div className="underline" />
      <span>{label}</span>
    </div>
  );
}

Textarea.defaultProps = {
  cols: '30',
  rows: '10',
};

Textarea.propTypes = {
  label: PropTypes.string.isRequired,
  cols: PropTypes.string,
  rows: PropTypes.string,
  required: PropTypes.bool,
};

export default Textarea;
