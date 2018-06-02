import PropTypes from 'prop-types';
import React from 'react';
import styles from './SectionTitle.module.scss';

const SectionTitle = ({ children, className, ...props }) => (
  <h1 className={`${styles.root} ${className}`} {...props}>
    {children}
  </h1>
);

SectionTitle.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

SectionTitle.defaultProps = {
  className: '',
};

export default SectionTitle;
