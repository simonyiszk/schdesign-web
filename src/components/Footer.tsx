import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import { Box, Flex, Image, Link } from 'rebass';
import Container from './Container';

const Footer = () => (
  <Box as="footer" bg="darkgray" color="white">
    <Flex
      as={Container}
      flexDirection={['column', 'row']}
      justifyContent="space-evenly"
      alignItems="center"
      my={2}
      css="max-width: 768px;"
    >
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
              p={2}
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
                css="display: inline-block;"
              />
            </Link>
          ))
        }
      />
    </Flex>
  </Box>
);

export default Footer;
