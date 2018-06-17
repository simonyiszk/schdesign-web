import PropTypes from 'prop-types';
import React from 'react';
import styles from './SectionTitle.module.scss';

const SectionTitle = ({ children, mdUpCentered, className, ...props }) => (
  <h1
    className={`${styles.root} ${mdUpCentered &&
      styles.mdUpTextCenter} ${className}`}
    {...props}
  >
    {children}
  </h1>
);

SectionTitle.propTypes = {
  children: PropTypes.node.isRequired,
  mdUpCentered: PropTypes.bool,
  className: PropTypes.string,
};

SectionTitle.defaultProps = {
  mdUpCentered: false,
  className: '',
};

export default SectionTitle;
