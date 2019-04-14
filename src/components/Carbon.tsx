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

const Carbon = (props: Props) => (
  <Section {...props}>
    <Container>
    <Flex flexWrap="wrap" mt={4}>
      <Box width={[ 1, 2/5 ]} >
        <Heading id="carbon" py={2}>
          IBM Design System
        </Heading>

        <List width={[ .95, .75 ]}>
          <ListItem>Exacutive director: Jeoff Wilks</ListItem>
          <ListItem>Creative direction: Todd Simmons, Mike Abbink</ListItem>
          <ListItem>Design lead: Chiu-Ping Chiu, Shixie, Jean a. Servaas</ListItem>
          <ListItem>Design: Anna Gonzolas, Lauren Rice, Tyler Tate, Peter Garvin, Conrad Ennis, Sadek Bazaraa, Wonil Suh</ListItem>
          <ListItem>Development: Josh Black, Akira Sudoh, Alessandra Davila, Alison Joseph, Andrew Wang, TJ Egan, Josefina Mancilla, Audrey Moon, D.A. Kahn, Matt Rosno, Robin Cannon, Mari Johannessen</ListItem>
          <ListItem>Motion design: Shixie, Wonil Suh</ListItem>
          <ListItem>Content: Connor Leech, Clay Crenshaw </ListItem>
          <ListItem>Internal collaberation teams: IBM Brand Experience & Design, IBM Security, IBM Cloud, IBM Watson, IBM Watson Health</ListItem>
        </List>
      </Box>

      <Box width={[ 1, 3/5 ]} >
        <Paragraph>
          IBM Design System, also known as Carbon, is the open source design system for digital products and experiences. On April 2, Carbon V10 is released, a complete redesign of all elements and components with the <Link href="https://www.ibm.com/design/language">new IBM Design Language</Link> as its foundation. The system consists of working code, design tools and resources, human interface guidelines, and a vibrant community of contributors.
        </Paragraph>
        <H2><Link href="https://www.carbondesignsystem.com">↳ Go to: IBM Design System (Carbon)</Link></H2>

        <H2>Motion design</H2>
        <Paragraph>
          I was fortunate to be a part of the Design Language team before joining Carbon, specializing on defining the new motion guidelines. After transition from the Design Language team to Design System team, I assisted with implementing the new guidelines throughout the elements and components that Carbon delivers. This include implementing motion in Carbon components, craft UI motion guidelines, and work with developers to create the <Link href="https://github.com/IBM/carbon-elements/tree/master/packages/motion">Motion package</Link> that facilitate users adopting motion design.
        </Paragraph>

        <Vimeo vimeoid={330279772} />
        <Vimeo vimeoid={330274406} />

        <H2>Data visualization</H2>
        <Paragraph>
          I was tasked with redesigning the data visualization section of the system. This work is still in progress, some of the latest explorations are included below.
        </Paragraph>

        <H2> Stills </H2>
        <StaticQuery
          query={graphql`
            {
              allCarbonYaml {
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
              images={data.allCarbonYaml.edges.map(({ node }: any) => ({
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

export default Carbon;
