import React from 'react';
import { createStructuredSelector } from 'reselect';
import { errorMessageSelector } from '../../redux/selectors';
import { connect } from 'react-redux';


function Error({errorMessage}) {
  return (
    <div>
      <h1>Страница ошибки </h1>
      <div>{errorMessage}</div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  errorMessage: errorMessageSelector,
});

export default connect(mapStateToProps)(Error);