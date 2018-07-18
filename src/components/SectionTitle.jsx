import PropTypes from 'prop-types';
import React from 'react';
import styles from './SectionTitle.module.scss';

const SectionTitle = ({ children, mdUpAlignLeft, className, ...props }) => (
  <h1
    className={`${styles.root} ${
      mdUpAlignLeft ? styles.mdUpTextLeft : ''
    } ${className}`}
    {...props}
  >
    {children}
  </h1>
);

SectionTitle.propTypes = {
  children: PropTypes.node.isRequired,
  mdUpAlignLeft: PropTypes.bool,
  className: PropTypes.string,
};

SectionTitle.defaultProps = {
  mdUpAlignLeft: false,
  className: '',
};

export default SectionTitle;
