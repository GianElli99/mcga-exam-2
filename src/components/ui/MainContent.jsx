import React from 'react';
import PropTypes from 'prop-types';

export const MainContent = ({ children, layoutStyles }) => {
  return <main className={layoutStyles}>MainContent{children}</main>;
};

MainContent.propTypes = {
  children: PropTypes.object.isRequired,
  layoutStyles: PropTypes.string,
};
