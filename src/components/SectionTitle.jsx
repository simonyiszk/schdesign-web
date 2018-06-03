import PropTypes from 'prop-types';
import React from 'react';
import styles from './SectionTitle.module.scss';

const SectionTitle = ({ children, centered, className, ...props }) => (
  <h1
    className={`${styles.root} ${centered && styles.textCenter} ${className}`}
    {...props}
  >
    {children}
  </h1>
);

SectionTitle.propTypes = {
  children: PropTypes.node.isRequired,
  centered: PropTypes.bool,
  className: PropTypes.string,
};

SectionTitle.defaultProps = {
  centered: false,
  className: '',
};

export default SectionTitle;
