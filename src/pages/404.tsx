import React from 'react';
import { Helmet } from 'react-helmet';
import { Heading, Text } from 'rebass';
import Container from '../components/Container';
import Layout from '../components/Layout';

const NotFoundPage = () => (
  <Layout>
    <Container>
      <Helmet>
        <title>404</title>
      </Helmet>

      <Heading mt={3}>404</Heading>
      <Text as="p">A keresett oldal nem található.</Text>
    </Container>
  </Layout>
);

export default NotFoundPage;
