import React from 'react';
import { Heading, Text } from 'rebass';
import Section, { Props } from './Section';

const AboutSection = (props: Props) => (
  <Section {...props}>
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
  </Section>
);

export default AboutSection;
