import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import { Heading, Link, Text } from 'rebass';
import { Behance, Facebook, Instagram } from 'styled-icons/fa-brands';

const ContactSection = () => (
  <Text as="section" textAlign="center">
    <Heading>Kapcsolat</Heading>

    <StaticQuery
      query={graphql`
        {
          site {
            siteMetadata {
              email
              siteBehanceURL
              siteFacebookURL
              siteInstagramURL
            }
          }
        }
      `}
      render={data => (
        <>
          <Text my={4} lineHeight={0}>
            <Link href={data.site.siteMetadata.siteFacebookURL}>
              <Facebook title="Facebook" size="2em" />
            </Link>

            <Link href={data.site.siteMetadata.siteInstagramURL} mx={4}>
              <Instagram title="Instagram" size="2em" />
            </Link>

            <Link href={data.site.siteMetadata.siteBehanceURL}>
              <Behance title="Behance" size="2em" />
            </Link>
          </Text>

          <Text as="p">
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
        </>
      )}
    />
  </Text>
);

export default ContactSection;
