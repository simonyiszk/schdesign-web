import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import { Heading } from 'rebass';
import Paragraph from './Paragraph';
import Container from './Container';
import Gallery from './Gallery';
import Section, { Props } from './Section';

const WorksSection = (props: Props) => (
  <Section {...props}>

    <Container flex={1} >
      <Heading id="works" mt={4} py={2}>
        Cloud Management VR
      </Heading>

      <Paragraph py={2}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Paragraph>
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
