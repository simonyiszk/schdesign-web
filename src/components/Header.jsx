import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Container from './Container';
import styles from './Header.module.scss';

const handleMenuItemClick = (event, targetElementSelector) => {
  event.preventDefault();
  document
    .querySelector(targetElementSelector)
    .scrollIntoView({ behavior: 'smooth' });
};

const Header = ({ brand, className, ...props }) => (
  <header className={`${styles.root} ${className}`} {...props}>
    <Container>
      <div className={styles.contentContainer}>
        <div className={styles.brandContainer}>{brand}</div>

        <nav className={styles.menuContainer}>
          <ul className={styles.menuItemsList}>
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
                    <a
                      href={node.url}
                      onClick={event => handleMenuItemClick(event, node.url)}
                      className={styles.menuItemLink}
                    >
                      {node.label}
                    </a>
                  </li>
                ))
              }
            />
          </ul>
        </nav>
      </div>
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
