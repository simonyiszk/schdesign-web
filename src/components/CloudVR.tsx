import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import { Heading, Box, Flex, Image } from 'rebass';
import Paragraph from './Paragraph';
import Container from './Container';
import List from './List';
import ListItem from './ListItem';
import Gallery from './Gallery';
import Section, { Props } from './Section';

const CloudVR = (props: Props) => (
  <Section {...props}>
    <Container>
      <Heading id="cloudvr" mt={4} py={2}>
        Cloud Management VR
      </Heading>

      <Flex flexWrap="wrap" pb={4}>
        <Box width={[ 1, 1/2 ]} >
          <Paragraph>
            The VR platform concept is designed for monitoring, trouble shooting, and managing system architecture and resources of Cloud applications. A service manager can enter the VR experience to do root cause investigation of a reported issue, and drill down to a specific virtual machine or router on a large network topology.
          </Paragraph>
          <Paragraph>
          This is an explorative project and aimed to identify if VR held potential business value for IBM. Cloud management is selected as a use case after a period of research across company's offerings.
          </Paragraph>
          <Paragraph>
          The actual project evolved from a 3D visualization of the architecture and relationships of cloud services and infrastructure, to a more manageable scope that's simple data visualizations. I believe there is potential in both ends of the spectrum. This prototype uses data from Dec 2016. The hope is to pipe in live data to enable real time network monitoring capabilities.
          </Paragraph>
        </Box>

        <Box width={[ 1, 1/2 ]}>
          <List width={[ .95, .75 ]}>
            <ListItem>Creative direction: Adam Cutler</ListItem>
            <ListItem>Research: Chris Hammond</ListItem>
            <ListItem>Design lead: Shixie</ListItem>
            <ListItem>Partner agency: Idean </ListItem>
            <ListItem>Agency leads: Matthew Robinson, Jordan Winick, Matthew Wells</ListItem>
            <ListItem>Development: Fox Buchele </ListItem>
            <ListItem>Internal collaberation teams: IBM Design, IBM Cloud Platform, Softlayer, Bluebox, Mobile Innovation Lab</ListItem>
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

    <Container>
      <Heading>
        Video
      </Heading>
      <iframe src="https://player.vimeo.com/video/234614700" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
    </Container>
  </Section>
);

export default CloudVR;
