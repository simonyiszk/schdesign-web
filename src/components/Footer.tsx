import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import { Box, Image, Link, Text } from 'rebass';
import Container from './Container';

const Footer = () => (
  <Box as="footer" bg="darkgray" color="white">
    <Text as={Container} textAlign="center" pt={1} my={3}>
      <StaticQuery
        query={graphql`
          {
            allSponsorsYaml {
              edges {
                node {
                  name
                  website
                  logo {
                    publicURL
                  }
                }
              }
            }
          }
        `}
        render={data =>
          data.allSponsorsYaml.edges.map(({ node }: any) => (
            <Link
              key={node.website}
              href={node.website}
              css={`
                :not(:hover) {
                  opacity: 0.75;
                }
              `}
            >
              <Image
                src={node.logo.publicURL}
                alt={node.name}
                height="3em"
                mx={3}
              />
            </Link>
          ))
        }
      />
    </Text>
  </Box>
);

export default Footer;
