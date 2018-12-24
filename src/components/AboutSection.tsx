import React from 'react';
import { Heading } from 'rebass';
import Container from './Container';
import Paragraph from './Paragraph';
import Section, { Props } from './Section';

const AboutSection = (props: Props) => (
  <Section {...props}>
    <Container>
      <Heading>Rólunk</Heading>

      <Paragraph>
        A Schönherz Design Stúdió a Simonyi Károly Szakkollégium kreatív
        alkotóműhelye.
      </Paragraph>

      <Paragraph>
        Bármilyen designnal, arculattervezéssel kapcsolatos feladattal szívesen
        foglalkozunk, legyen az egy weboldal, egy plakát vagy akár egy
        mobilalkalmazás megtervezése.
      </Paragraph>

      <Paragraph>
        Keress minket projektmunkákkal, vagy nyerj betekintést a világunkba
        workshopjaink alkalmával!
      </Paragraph>
    </Container>
  </Section>
);

export default AboutSection;
