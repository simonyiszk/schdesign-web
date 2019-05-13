import React from 'react';
import { Helmet } from 'react-helmet';
import { Heading } from 'rebass';
import Container from '../components/Container';
import Layout from '../components/Layout';
import Paragraph from '../components/Paragraph';
import TextLink from '../components/TextLink'
import { Box,  } from 'rebass';


const NotFoundPage = () => (
  <Layout>
    <Container>
      <Box width={[ 1, 2/5 ]} >

        <Helmet>
          <title>404</title>
        </Helmet>

        <Heading mt={3}>Oops. Page not found. </Heading>
        <Paragraph>Perhaps you intended to check out one of my recent projects in the navigation on top.</Paragraph>

        <Paragraph>Or checkout my portfolio site at <TextLink href={"http://www.shixie.org/"}>www.shixie.org</TextLink></Paragraph>

      </Box>
    </Container>
  </Layout>
);

export default NotFoundPage;
