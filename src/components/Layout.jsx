import 'modern-normalize/modern-normalize.css';
import { graphql, Link, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import schdesignLogoSrc from '../assets/schdesign-logo.svg';
import Header from './Header';
import styles from './Layout.module.scss';

const Layout = ({ dark, children }) => (
  <>
    <StaticQuery
      query={graphql`
        {
          site {
            siteMetadata {
              title
              language
            }
          }
        }
      `}
      render={data => (
        <Helmet
          titleTemplate={`%s | ${data.site.siteMetadata.title}`}
          defaultTitle={data.site.siteMetadata.title}
        >
          <html lang={data.site.siteMetadata.language} />

          {dark && <body className={styles.dark} />}

          <link
            href="https://fonts.googleapis.com/css?family=Montserrat|Roboto+Mono"
            rel="stylesheet"
          />
        </Helmet>
      )}
    />

    <Header
      brand={
        <Link to="/">
          <img
            src={schdesignLogoSrc}
            alt="schdesign"
            className={styles.headerBrandLogo}
          />
        </Link>
      }
    />

    <main className={styles.main}>{children}</main>
  </>
);

Layout.propTypes = {
  dark: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Layout.defaultProps = {
  dark: false,
};

export default Layout;
