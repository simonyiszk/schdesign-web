import React from 'react';
import Container from './Container';
import SectionTitle from './SectionTitle';

const ContactSection = ({ ...props }) => (
  <section {...props}>
    <Container>
      <SectionTitle id="contact" mdUpCentered>
        Kapcsolat
      </SectionTitle>
    </Container>
  </section>
);

export default ContactSection;
