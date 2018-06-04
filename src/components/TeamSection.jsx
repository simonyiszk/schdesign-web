import React from 'react';
import Container from './Container';
import SectionTitle from './SectionTitle';

const TeamSection = ({ ...props }) => (
  <div {...props}>
    <Container>
      <SectionTitle mdUpCentered>Csapatunk</SectionTitle>
    </Container>
  </div>
);

export default TeamSection;
