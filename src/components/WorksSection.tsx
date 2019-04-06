import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import { Heading, Box, Flex, Image } from 'rebass';
import Paragraph from './Paragraph';
import Container from './Container';
import List from './List';
import ListItem from './ListItem';
import Gallery from './Gallery';
import Section, { Props } from './Section';

const WorksSection = (props: Props) => (
  <Section {...props}>

    <Container>

      <Heading id="works" mt={4} py={2}>
        Cloud Management VR
      </Heading>

      <Flex flexWrap="wrap">
        <Box width={[ 1, 1/2 ]} pb={4}>
          <Paragraph pb={1}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </Paragraph>
          <Paragraph pb={1}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </Paragraph>
        </Box>

        <Box width={[ 1, 1/2 ]} pl={4} pb={4}>
        <List>
          <ListItem>Grafikai tervezés</ListItem>
          <ListItem>Web design</ListItem>
          <ListItem>User experience</ListItem>
          <ListItem>3D</ListItem>
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
            caption: `${node.title} – ${node.author}`,
          }))}
          itemsPerRow={[1, 2]}
        />
      )}
    />
  </Section>
);

export default WorksSection;
