import React from 'react';
import Container from './Container';
import SectionTitle from './SectionTitle';

const ContactSection = ({ ...props }) => (
  <div {...props}>
    <Container>
      <SectionTitle mdUpCentered>Kapcsolat</SectionTitle>
    </Container>
  </div>
);

export default ContactSection;
