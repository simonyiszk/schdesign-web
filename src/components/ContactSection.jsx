import React from 'react';
import Container from './Container';
import SectionTitle from './SectionTitle';

const ContactSection = ({ ...props }) => (
  <div {...props}>
    <Container>
      <SectionTitle id="contact" mdUpCentered>
        Kapcsolat
      </SectionTitle>
    </Container>
  </div>
);

export default ContactSection;
