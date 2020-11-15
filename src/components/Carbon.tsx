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
          Carbon Design System
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
          Carbon Design System is an open source design system for all IBM digital products and experiences. On April 2, Carbon V10 is released, a complete redesign of all elements and components with the new<Link href="https://www.ibm.com/design/language"> IBM Design Language</Link> as its foundation. The system consists of working code, design tools and resources, human interface guidelines, and a vibrant community of contributors.
        </Paragraph>
        <H2><Link href="https://www.carbondesignsystem.com">↳ Go to: Carbon Design System</Link></H2>

        <H2>Motion design</H2>
        <Paragraph>
          I was fortunate to be a part of the Design Language team before joining Carbon, specializing on defining the <Link href="https://www.carbondesignsystem.com/guidelines/motion/basics"> motion guidelines</Link>. After transition from the Design Language team to Design System team, I assisted with implementing the new guidelines throughout the elements and components that Carbon delivers. This include craft UI motion guidelines, implementing motion in Carbon components, and work with developers to create the code package that facilitates adoption.
        </Paragraph>

        <Vimeo vimeoid={325231776} caption={"Introduction to Motion. Video created in partnership with external agency Buck."}/>
        <Vimeo vimeoid={330274406} caption={"Motion in UI demo with Watson Conversation."}/>

        <H2>Data visualization</H2>
        <Paragraph>
          In addition to motion, I was tasked with redesigning the data visualization section of the system. While Carbon as a system aims to be highly accessible (meeting and exceeding WCAG recommendations), the standard for accessibility around data visualization is less well defined. I reworked the color palette to improve overall accessibility, and stylized the chart designs to better express the philosophy of the new design language.
        </Paragraph>
        <Paragraph>
          This work is still in progress, but some of the latest explorations are included as stills below.
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
