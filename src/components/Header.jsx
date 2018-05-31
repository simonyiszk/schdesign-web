import { StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Container from './Container';
import styles from './Header.module.scss';

const Header = ({ brand, className, ...props }) => (
  <header className={`${styles.root} ${className}`} {...props}>
    <Container className={styles.contentContainer}>
      <div className={styles.brandContainer}>{brand}</div>

      <nav>
        <ul>
          <StaticQuery
            query={graphql`
              query HeaderQuery {
                allHeaderMenuItemsYaml {
                  edges {
                    node {
                      label
                      url
                    }
                  }
                }
              }
            `}
            render={staticData =>
              staticData.allHeaderMenuItemsYaml.edges.map(({ node }) => (
                <li key={node.url}>
                  <a href={node.url} className={styles.menuItemLink}>
                    {node.label}
                  </a>
                </li>
              ))
            }
          />
        </ul>
      </nav>
    </Container>
  </header>
);

Header.propTypes = {
  brand: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Header.defaultProps = {
  className: '',
};

export default Header;
