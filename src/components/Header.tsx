import { graphql, Link as GatsbyLink, StaticQuery } from 'gatsby';
import React from 'react';
import { Box, Flex, Image } from 'rebass';
import Container from './Container';
import List from './List';
import ListItem from './ListItem';
import NavLink from './NavLink';

import schdesignLogoSrc from '../assets/schdesign-logo.svg';

const Header = () => (
  <Box as="header" bg="darkgray" color="white">
    <Flex
      as={Container}
      flexDirection={['column', 'row']}
      justifyContent="space-between"
      alignItems="center"
      my={2}
    >
      <Image src={schdesignLogoSrc} alt="schdesign" height="2em" my={2} />

      <Box as="nav" my={2}>
        <List m={0}>
          <StaticQuery
            query={graphql`
              {
                allHeaderMenuItemsYaml {
                  edges {
                    node {
                      title
                      url
                    }
                  }
                }
              }
            `}
            render={data =>
              data.allHeaderMenuItemsYaml.edges.map(
                ({ node }: any, i: number) => (
                  <ListItem
                    key={node.url}
                    m={0}
                    ml={i !== 0 ? [4, 5] : null}
                    css="display: inline-block;"
                  >
                    <NavLink as={GatsbyLink} to={node.url}>
                      {node.title}
                    </NavLink>
                  </ListItem>
                ),
              )
            }
          />
        </List>
      </Box>
    </Flex>
  </Box>
);

export default Header;
