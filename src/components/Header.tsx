import { graphql, Link as GatsbyLink, StaticQuery } from 'gatsby';
import React from 'react';
import { Box, Flex, Image, Text } from 'rebass';
import Container from './Container';
import List from './List';
import ListItem from './ListItem';
import NavLink from './NavLink';


import logo from '../assets/logo.svg';

const Header = () => (
  <Box as="header" mb={5}>
    <Flex
      as={Container}
      flexDirection={['column', 'row']}
      justifyContent="space-between"
      py={2}
      css={`
        background: #F6F6F6;
        position: fixed;
        right: 0;
        left: 0;
        margin-right: auto;
        margin-left: auto;
        z-index: 1;
      `}
    >
      {/*
      <GatsbyLink my={2} to="/">
        <Image
          src={logo}
          alt="Shixie"
          height=".75em"
          my={2}
          css="display: block;"
        />
      </GatsbyLink>
      */}

      <Text
        width={[ 1, 2/5 ]}
        my={2}
        css={`
        color: darkgray;
        font-size: .9rem;
        font-weight: 700;
        :not(:hover) {
          }
        `}>
        Shixie's selected projects
      </Text>

      <Box as="nav" my={2} width={[ 1, 3/5 ]}>
        <List p={0} m={0}>
          <StaticQuery
            query={graphql`
              {
                allHeaderMenuItemsYaml {
                  edges {
                    node {
                      id
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
                    key={node.id}
                    m={-2}
                    ml={i !== 0 ? [2, 3] : null}
                    css="display: inline-block;"
                  >
                    <NavLink as={GatsbyLink} to={node.url} pr={4}>
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
