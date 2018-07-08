import React from 'react';
import Container from './Container';
import SectionTitle from './SectionTitle';

const WorksSection = ({ ...props }) => (
  <section {...props}>
    <Container>
      <SectionTitle id="works" mdUpCentered>
        Munkáink
      </SectionTitle>
    </Container>
  </section>
);

export default WorksSection;
