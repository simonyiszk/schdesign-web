import React from 'react';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import Container from '../components/Container';
import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout>
    <Container>
      <AboutSection />
      <ContactSection />
    </Container>
  </Layout>
);

export default IndexPage;
