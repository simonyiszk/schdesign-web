import React from 'react';
import { Box, Flex, Image } from 'rebass';
import Container from './Container';
import List from './List';
import ListItem from './ListItem';

import schdesignLogoSrc from '../assets/schdesign-logo.svg';

const Header = () => (
  <Box bg="darkgray" color="white">
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
          {/* TODO: Load menu items from a YAML file */}
          {['Munkáink', 'Kapcsolat'].map((menuItem, i) => (
            <ListItem m={0} ml={i !== 0 && [4, 5]} css="display: inline-block;">
              {menuItem}
            </ListItem>
          ))}
        </List>
      </Box>
    </Flex>
  </Box>
);

export default Header;
