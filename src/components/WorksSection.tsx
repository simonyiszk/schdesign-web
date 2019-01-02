import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import { Heading } from 'rebass';
import Gallery from './Gallery';
import Section, { Props } from './Section';

const WorksSection = (props: Props) => (
  <Section {...props}>
    <Heading id="works" textAlign="center" py={4}>
      Munkáink
    </Heading>

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
          itemsPerRow={[2, 3]}
        />
      )}
    />
  </Section>
);

export default WorksSection;
