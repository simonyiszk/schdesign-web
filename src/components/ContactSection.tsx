import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import { Heading, Link, Text } from 'rebass';

const ContactSection = () => (
  <Text as="section" textAlign="center">
    <Heading>Kapcsolat</Heading>

    <StaticQuery
      query={graphql`
        {
          site {
            siteMetadata {
              email
            }
          }
        }
      `}
      render={data => (
        <Text>
          Van egy projekted számunkra?
          <br />
          Küldj egy e-mailt a{' '}
          <Text
            as={Link}
            href={`mailto:${data.site.siteMetadata.email}`}
            fontWeight="bold"
          >
            {data.site.siteMetadata.email}
          </Text>{' '}
          címre!
        </Text>
      )}
    />
  </Text>
);

export default ContactSection;
