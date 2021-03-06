import React from 'react';
import { connect } from 'react-redux';
import { errorsSelector } from '../../redux/selectors';
import { createStructuredSelector } from 'reselect';

const Error = ({ errors }) => {
  const errorsEntries = Object.entries(errors);
  return (
    errorsEntries.length > 0 &&
    errorsEntries.map(([action, error]) => (
      <p>
        There is an exception in {action} action. {error && `${error}.`}
      </p>
    ))
  );
};

const mapStateToProps = createStructuredSelector({
  errors: errorsSelector,
});
export default connect(mapStateToProps, null)(Error);
