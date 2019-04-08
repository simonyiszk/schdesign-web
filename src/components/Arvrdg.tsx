import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import { Heading, Box, Flex, Image, Link } from 'rebass';
import Paragraph from './Paragraph';
import Container from './Container';
import List from './List';
import ListItem from './ListItem';
import Gallery from './Gallery';
import Section, { Props } from './Section';

const Arvrdg = (props: Props) => (
  <Section {...props}>
    <Container>
      <Heading id="arvrdg" mt={4} py={2}>
        AR/VR Design Guidelines
      </Heading>
      <Flex flexWrap="wrap" pb={4}>
        <Box width={[ 1, 1/2 ]} >
          <Paragraph pb={1}>
            Created as a late addition to the original <Link href="https://www.ibm.com/design/v1/language">IBM Design Language V1</Link>, the content consolidate learnings from multiple AR and VR projects big and small across IBM, completed with UX patterns packaged as problem specific solutions. The goal is to provide an easy entry point for people creating enterprise solutions with immersive technology.
          </Paragraph>
          <Paragraph pb={1}>
            From incubating the idea to finally releasing it to the world, this project took nearly two years. Unlike the rest of the design language content, all of the AR/VR chapter is created by volunteers or came as contributions from different parts of IBM.
          </Paragraph>
        </Box>

        <Box width={[ 1, 1/2 ]}>
          <List width={[ .95, .75 ]}>
            <ListItem>Creative direction and production lead: Shixie</ListItem>
            <ListItem>Collaborator & AR lead: Alfredo Ruiz </ListItem>
            <ListItem>Design: Shixie, Brianna Benson, Jenna Goldberg</ListItem>
            <ListItem>Development: Benjamin Resnick</ListItem>
            <ListItem>Content: Benjamin Resnick, Jenna Goldberg </ListItem>
            <ListItem>Contribution: Kris Schults, Aldis Sipolins, Mbiyimoh Ghogomu, Ramiro Galan, Daniel Shust, Emma Tucker, Adam Cutler, Glenn Jones, Rose M. Peng, Ryan Anderson, Taiji Hagino, Kyle Craig, Jack Mason, Hayley Hughes, Joe Pavitt, Scott M. Harris, James Griffin, Chris Hammond</ListItem>
          </List>
        </Box>
      </Flex>

    </Container>

    <StaticQuery
      query={graphql`
        {
          allWorksYaml {
            edges {
              node {
                title
                author
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
          images={data.allWorksYaml.edges.map(({ node }: any) => ({
            id: node.image.id,
            ...node.image.childImageSharp.fluid,
            caption: `${node.title}`,
          }))}
          itemsPerRow={[1, 2]}
        />
      )}
    />
  </Section>
);

export default Arvrdg;
