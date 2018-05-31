import React from 'react';
import Container from '../components/Container';
import Layout from '../components/Layout';

const NotFoundPage = () => (
  <Layout>
    <Container>
      <h1>Az oldal nem található</h1>
      <p>A kért oldal nem érhető el.</p>
    </Container>
  </Layout>
);

export default NotFoundPage;
