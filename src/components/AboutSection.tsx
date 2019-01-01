import React from 'react';
import { Flex, Heading, Text } from 'rebass';
import { ThemeConsumer } from 'styled-components';
import Container from './Container';
import List from './List';
import ListItem from './ListItem';
import Paragraph from './Paragraph';
import Section, { Props } from './Section';

import aboutSectionBackgroundSrc from '../assets/about-section-background.svg';

const AboutSection = (props: Props) => (
  <ThemeConsumer>
    {theme => (
      <Section
        {...props}
        bg={[null, null, 'red']}
        py={[null, null, 3, 5]}
        css={`
          @media (min-width: ${theme.breakpoints[1]}px) {
            background-image: ${`url(${aboutSectionBackgroundSrc});`};
            background-size: 100% 100%;
          }
        `}
      >
        <Container
          as={Flex}
          flexDirection={['column', null, 'row']}
          alignItems="center"
          px={null}
        >
          <Container flex={1} my={3}>
            <Heading textAlign={['center', null, 'left']}>Rólunk</Heading>

            <Paragraph>
              A Schönherz Design Stúdió a Simonyi Károly Szakkollégium kreatív
              alkotóműhelye.
            </Paragraph>

            <Paragraph>
              Bármilyen designnal, arculattervezéssel kapcsolatos feladattal
              szívesen foglalkozunk, legyen az egy weboldal, egy plakát vagy
              akár egy mobilalkalmazás megtervezése.
            </Paragraph>

            <Paragraph>
              Keress minket projektmunkákkal, vagy nyerj betekintést a
              világunkba workshopjaink alkalmával!
            </Paragraph>
          </Container>

          <Container
            as={Text}
            flex={1}
            textAlign={['center', null, 'right']}
            fontSize="1.5rem"
            lineHeight={3}
            bg={['red', null, 'unset']}
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
        </Container>
      </Section>
    )}
  </ThemeConsumer>
);

export default AboutSection;
