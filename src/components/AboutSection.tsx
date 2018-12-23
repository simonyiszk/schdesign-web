import React from 'react';
import { Heading, Text } from 'rebass';
import Container from './Container';
import Section, { Props } from './Section';

const AboutSection = (props: Props) => (
  <Section {...props}>
    <Container>
      <Heading>Rólunk</Heading>

      <Text as="p">
        A Schönherz Design Stúdió a Simonyi Károly Szakkollégium kreatív
        alkotóműhelye.
      </Text>

      <Text as="p">
        Bármilyen designnal, arculattervezéssel kapcsolatos feladattal szívesen
        foglalkozunk, legyen az egy weboldal, egy plakát vagy akár egy
        mobilalkalmazás megtervezése.
      </Text>

      <Text as="p">
        Keress minket projektmunkákkal, vagy nyerj betekintést a világunkba
        workshopjaink alkalmával!
      </Text>
    </Container>
  </Section>
);

export default AboutSection;
