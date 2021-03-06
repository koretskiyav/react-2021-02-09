import React from 'react';
import { connect } from 'react-redux';
import { errorSelector } from '../../redux/selectors';
import { createStructuredSelector } from 'reselect';

const Error = ({ errors }) => {
  return <p>{error?.message ? error.message : 'There is a error.'}</p>;
};

const mapStateToProps = createStructuredSelector({
  error: errorSelector,
});
export default connect(mapStateToProps, null)(Error);
