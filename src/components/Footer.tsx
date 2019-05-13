import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import { Box, Image, Link } from 'rebass';
import Container from './Container';
import Paragraph from './Paragraph';

const Footer = () => (

  <Container>
  <Box as="footer" width={[ 1, 1/2 ]} p={[ 0, 1, 2 ]} mb={5}>
    <Paragraph width={[ 0.95, 0.8 ]}>
    Shixie is a Design Lead at IBM, working on Carbon Design System. She crafts guidelines in <Link href={'https://www.carbondesignsystem.com/guidelines/motion/basics'}>motion</Link>, data visualization, and <Link href={'https://www.ibm.com/design/v1/language/experience/vrar/'}>AR/VR</Link>. Outside work, she enjoys cooking and a good cup of tea.
    </Paragraph>
  </Box>
  </Container>
);

export default Footer;
