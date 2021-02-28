import React from 'react';
import PropTypes from 'prop-types';

export default function ErrorComponent({ reload }) {
  return (
    <div className="error">
      <p>Error has occured</p>
      <button onClick={reload}>Reload</button>
    </div>
  );
}

ErrorComponent.propTypes = {
  reload: PropTypes.func.isRequired,
};
