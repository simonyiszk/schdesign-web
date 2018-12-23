import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import { Heading } from 'rebass';
import Gallery from './Gallery';
import Section, { Props } from './Section';

const WorksSection = (props: Props) => (
  <Section {...props}>
    <Heading textAlign="center">Munkáink</Heading>

    <StaticQuery
      query={graphql`
        {
          allWorksYaml {
            edges {
              node {
                title
                author
                image {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
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
          images={data.allWorksYaml.edges.map(
            ({ node }: any) => node.image.childImageSharp.fluid,
          )}
          itemsPerRow={3}
        />
      )}
    />
  </Section>
);

export default WorksSection;
