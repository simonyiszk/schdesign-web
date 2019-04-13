import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import { Heading, Box, Flex, Image, Link } from 'rebass';
import Paragraph from './Paragraph';
import H2 from './H2';
import Container from './Container';
import List from './List';
import ListItem from './ListItem';
import Gallery from './Gallery';
import Vimeo from './Vimeo';
import Section, { Props } from './Section';

const Arvrdg = (props: Props) => (
  <Section {...props}>
    <Container>
    <Flex flexWrap="wrap" mt={4}>
      <Box width={[ 1, 2/5 ]} >
        <Heading id="arvrdg" py={2}>
          AR/VR Design Guidelines
        </Heading>

        <List width={[ .95, .75 ]}>
          <ListItem>Creative direction and production lead: Shixie</ListItem>
          <ListItem>Collaborator & AR lead: Alfredo Ruiz </ListItem>
          <ListItem>Design: Shixie, Brianna Benson, Jenna Goldberg</ListItem>
          <ListItem>Development: Benjamin Resnick</ListItem>
          <ListItem>Content: Benjamin Resnick, Jenna Goldberg </ListItem>
          <ListItem>Contribution: Kris Schults, Aldis Sipolins, Mbiyimoh Ghogomu, Ramiro Galan, Daniel Shust, Emma Tucker, Adam Cutler, Glenn Jones, Rose M. Peng, Ryan Anderson, Taiji Hagino, Kyle Craig, Jack Mason, Hayley Hughes, Joe Pavitt, Scott M. Harris, James Griffin, Chris Hammond</ListItem>
        </List>
      </Box>

      <Box width={[ 1, 3/5 ]} >
        <Paragraph>
          Created as a late addition to the original <Link href="https://www.ibm.com/design/v1/language">IBM Design Language V1</Link>, the guidelines consolidate learnings from multiple AR and VR projects big and small across IBM, completed with UX patterns packaged as problem specific solutions. The goal is to provide an easy entry point for people creating enterprise solutions with immersive technology.
        </Paragraph>

        <Paragraph>
          I initiated the project and led its creation from concept to shipment. 
        </Paragraph>

        <Paragraph>
          From incubating the idea to finally releasing it to the world, this project took nearly two years. Unlike the rest of the design language content, all of the AR/VR chapter is created by volunteers or came as contributions from different parts of IBM.
        </Paragraph>

        <Paragraph>
          Read the full story of the <Link href="https://medium.com/design-ibm/making-of-ar-vr-design-guidelines-5370a0091f7b">Making of AR/VR design guidelines</Link> on Medium.
        </Paragraph>

        <H2> Stills </H2>
        <StaticQuery
          query={graphql`
            {
              allArvrdgYaml {
                edges {
                  node {
                    title
                    image {
                      id
                      childImageSharp {
                        fluid {
                          ...GatsbyImageSharpFluid
                          originalImg
                        }
                      }
                    }
                  }
                }
              }
            }
          `}
          render={data => (
            <Gallery
              images={data.allArvrdgYaml.edges.map(({ node }: any) => ({
                id: node.image.id,
                ...node.image.childImageSharp.fluid,
                caption: `${node.title}`,
              }))}
              itemsPerRow={[1, 2]}
            />
          )}
        />
      </Box>
    </Flex>

    </Container>

  </Section>
);

export default Arvrdg;
