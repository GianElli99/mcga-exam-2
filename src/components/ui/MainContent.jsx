import React from 'react';
import PropTypes from 'prop-types';

export const MainContent = ({ children }) => {
  return <main>MainContent{children}</main>;
};

MainContent.propTypes = {
  children: PropTypes.object.isRequired,
};
