import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import { Heading, Box, Flex, Image } from 'rebass';
import Paragraph from './Paragraph';
import H2 from './H2';
import Container from './Container';
import List from './List';
import ListItem from './ListItem';
import Gallery from './Gallery';
import Vimeo from './Vimeo';
import Section, { Props } from './Section';


const CloudVR = (props: Props) => (
  <Section {...props}>
    <Container>
      <Flex flexWrap="wrap" mt={4}>

        <Box width={[ 1, 2/5 ]} >
          <Heading id="cloudvr" py={2}>
            Cloud Management VR
          </Heading>

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

        <Box width={[ 1, 3/5 ]} >
          <Paragraph>
          The VR platform concept is designed for monitoring, trouble shooting, and managing system architecture and resources of Cloud applications. A service manager can enter the VR experience to do root cause investigation of a reported issue, and drill down to a specific virtual machine or router on a large network topology.
          </Paragraph>

          <Paragraph>
          This is an explorative project and aimed to identify if VR held potential business value for IBM. Cloud management is selected as a use case after research across company's offerings.
          </Paragraph>



          <H2> VR demo </H2>

          <Vimeo vimeoid={329030713} />

          <Paragraph>
          The project evolved from an spatial mapping of the objects throughout the stack and their relationships, to a simple 3D scatter plot with a world of resources hidden inside each data point. This prototype uses data from Dec 2016. The hope is to pipe in live data to enable real time network monitoring capabilities.
          </Paragraph>

          <H2> Concept & design </H2>
          <Paragraph>
          I designed the nodes to express their data via shape, light and motion. This makes data "glancible" and intuitive while avoiding explicit numbers and graphs, which work well on a screen, but in VR are difficult to interactive with, and easily overwhelm users. These nodes may denote an app, a server, or a bare metal machine.
          </Paragraph>

          <Vimeo vimeoid={234614700} caption={"Design mockups and spec videos created to assist development."} />

          <Vimeo vimeoid={329957785} caption={"An early concept done in TiltBrush."}/>
          <Paragraph>
          My original vision of the project is best explained in above TiltBrush sketch. Picturing healthy, running services and aplications floating in the air, while databases and containers sit on the ground. All layers in the stack are connected. By monitoring the health of objects and their relationships in the system, maintainance workers can quickly diagnose the root cause and search for a solution.
          </Paragraph>

          <H2> Stills </H2>
          <StaticQuery
            query={graphql`
              {
                allCloudvrYaml {
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
                images={data.allCloudvrYaml.edges.map(({ node }: any) => ({
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

export default CloudVR;
