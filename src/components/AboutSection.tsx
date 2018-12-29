import React from 'react';
import { Flex, Heading, Text } from 'rebass';
import Container from './Container';
import List from './List';
import ListItem from './ListItem';
import Paragraph from './Paragraph';
import Section, { Props } from './Section';

const AboutSection = (props: Props) => (
  <Section {...props}>
    <Flex flexDirection={['column', null, 'row']} alignItems="center">
      <Container flex={5} my={3}>
        <Heading textAlign={['center', null, 'left']}>Rólunk</Heading>

        <Paragraph>
          A Schönherz Design Stúdió a Simonyi Károly Szakkollégium kreatív
          alkotóműhelye.
        </Paragraph>

        <Paragraph>
          Bármilyen designnal, arculattervezéssel kapcsolatos feladattal
          szívesen foglalkozunk, legyen az egy weboldal, egy plakát vagy akár
          egy mobilalkalmazás megtervezése.
        </Paragraph>

        <Paragraph>
          Keress minket projektmunkákkal, vagy nyerj betekintést a világunkba
          workshopjaink alkalmával!
        </Paragraph>
      </Container>

      <Container
        as={Text}
        flex={7}
        textAlign="center"
        fontSize="1.5rem"
        lineHeight={3}
        bg="red"
        color="white"
      >
        <List
          p={0}
          css={`
            text-transform: lowercase;
            opacity: 0.8;
            > * {
              display: block;
            }
          `}
        >
          <ListItem>Grafikai tervezés</ListItem>
          <ListItem>Web design</ListItem>
          <ListItem>User experience</ListItem>
          <ListItem>3D</ListItem>
        </List>
      </Container>
    </Flex>
  </Section>
);

export default AboutSection;
