import { StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import schdesignLogoSrc from '../assets/schdesign-logo.svg';
import Header from './Header';
import styles from './Layout.module.scss';

const Layout = ({ children }) => (
  <React.Fragment>
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          site {
            siteMetadata {
              title
              language
            }
          }
        }
      `}
      render={staticData => (
        <Helmet
          titleTemplate={`%s | ${staticData.site.siteMetadata.title}`}
          defaultTitle={staticData.site.siteMetadata.title}
        >
          <html lang={staticData.site.siteMetadata.language} />

          <link
            href="https://fonts.googleapis.com/css?family=Montserrat|Roboto+Mono:500"
            rel="stylesheet"
          />
        </Helmet>
      )}
    />

    <Header
      brand={
        <img
          src={schdesignLogoSrc}
          alt="schdesign"
          className={styles.headerBrandLogo}
        />
      }
    />

    <main className={styles.content}>{children}</main>
  </React.Fragment>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
