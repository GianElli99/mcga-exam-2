import React from 'react';
import PropTypes from 'prop-types';
import Alert from '@mui/material/Alert';

export const ErrorContainer = ({ message }) => {
  const errorFormatted = message.join(' \n ');
  return (
    <Alert style={{ whiteSpace: 'pre-line' }} severity="error">
      {errorFormatted}
    </Alert>
  );
};

ErrorContainer.propTypes = {
  message: PropTypes.array.isRequired,
};
