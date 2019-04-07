import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import { Box, Flex } from 'rebass';
import smoothscroll from 'smoothscroll-polyfill';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import defaultTheme from '../utils/theme';
import Footer from './Footer';
import Header from './Header';

if (typeof window !== 'undefined') {
  smoothscroll.polyfill();
}

const GlobalStyle = createGlobalStyle`
  html {
    color: ${({ theme }: any) => theme.colors.darkgray};
    font-family: ${({ theme }: any) => theme.fonts.sans};
    scroll-behavior: smooth;

    @media (min-width: ${({ theme }: any) => theme.breakpoints[1]}px) {
    }

    @media (min-width: ${({ theme }: any) => theme.breakpoints[3]}px) {
      font-size: 125%;
    }
  }

  body {
    margin: 0;

    /* Prevent adjustments of font size after orientation changes in iOS */
    text-size-adjust: 100%;
  }

  p {
    line-height: 1.5;
  }
`;

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => (
  <ThemeProvider theme={defaultTheme}>
    <Flex flexDirection="column" css="min-height: 100vh;">
      <GlobalStyle />

      <StaticQuery
        query={graphql`
          {
            site {
              siteMetadata {
                title
                description
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
            <meta
              name="description"
              content={data.site.siteMetadata.description}
            />

            <link rel="stylesheet" href="https://use.typekit.net/pew7dup.css" />

          </Helmet>
        )}
      />

      <Header />

      <Box as="main" flex={1}>
        {children}
      </Box>

      <Footer />
    </Flex>
  </ThemeProvider>
);

export default Layout;
