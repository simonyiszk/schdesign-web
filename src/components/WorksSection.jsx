import React from 'react';
import Container from './Container';
import SectionTitle from './SectionTitle';

const WorksSection = ({ ...props }) => (
  <div {...props}>
    <Container>
      <SectionTitle mdUpCentered>Munkáink</SectionTitle>
    </Container>
  </div>
);

export default WorksSection;
