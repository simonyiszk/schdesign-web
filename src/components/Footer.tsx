import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import { Box, Image, Link } from 'rebass';
import Container from './Container';
import Paragraph from './Paragraph';

const Footer = () => (

  <Container>
  <Box as="footer" width={[ 1, 1/2 ]} p={[ 0, 1, 2 ]} mb={5}>
    <Paragraph width={[ 0.95, 0.8 ]}>
    Hello, I'm Shixie, a Senior Visual Designer at IBM, currently working on the future vision of IBM[dot]com. I've spend 4 of the past 5 years at IBM crafting IBM Design Language and Carbon Design System, publishing company wide guidelines in <Link href={'https://www.ibm.com/design/language/color'}>color</Link>, <Link href={'https://www.carbondesignsystem.com/guidelines/motion/basics'}>motion</Link>, <Link href={'https://www.carbondesignsystem.com/data-visualization/chart-types'}>data visualization</Link>, and <Link href={'https://www.ibm.com/design/v1/language/experience/vrar/'}>AR/VR</Link>.
    </Paragraph><Paragraph width={[ 0.95, 0.8 ]}>
    Outside work, I enjoys cooking, coding, drawing, gaming, and parenting a baby boy.
    </Paragraph>

    {/*
       <StaticQuery
        query={graphql`
          {
            allSponsorsYaml {
              edges {
                node {
                  id
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
          data.allSponsorsYaml.edges.map(({ node }: any, i: number) => (
            <Link
              key={node.id}
              href={node.website}
              ml={i !== 0 ? [4, 5] : null}
              css={`
                :not(:hover) {
                  opacity: 0.75;
                }
              `}
            >
              <Image src={node.logo.publicURL} alt={node.name} height="3em" />
            </Link>
          ))
        }
      />
      */}

  </Box>
  </Container>
);

export default Footer;
