import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import { Box, Flex } from 'rebass';
import { ThemeProvider } from 'styled-components';
import theme from '../utils/theme';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => (
  <ThemeProvider theme={theme}>
    <Flex flexDirection="column" css="min-height: 100vh;">
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
          </Helmet>
        )}
      />

      <header>{/* TODO */}</header>

      <Box as="main" flex={1}>
        {children}
      </Box>

      <footer>{/* TODO */}</footer>
    </Flex>
  </ThemeProvider>
);

export default Layout;
