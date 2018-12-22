import React from 'react';
import { Heading, Text } from 'rebass';
import Container from '../components/Container';
import Layout from '../components/Layout';

const NotFoundPage = () => (
  <Layout>
    <Container>
      <Heading>Az oldal nem található</Heading>
      <Text as="p">A kért oldal nem érhető el.</Text>
    </Container>
  </Layout>
);

export default NotFoundPage;
