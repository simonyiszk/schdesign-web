import React from 'react';
import Container from './Container';
import SectionTitle from './SectionTitle';

const WorksSection = ({ ...props }) => (
  <div {...props}>
    <Container>
      <SectionTitle id="works" mdUpCentered>
        Munkáink
      </SectionTitle>
    </Container>
  </div>
);

export default WorksSection;
