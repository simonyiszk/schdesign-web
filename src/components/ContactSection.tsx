import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import { Heading, Link, Text } from 'rebass';
import { Behance, Facebook, Instagram } from 'styled-icons/fa-brands';
import IconLink from './IconLink';

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
          <Text my={4} fontSize="2em" lineHeight={0}>
            <IconLink
              icon={Facebook}
              href={data.site.siteMetadata.siteFacebookURL}
              title="Facebook"
            />

            <IconLink
              icon={Instagram}
              href={data.site.siteMetadata.siteInstagramURL}
              title="Instagram"
              mx={4}
            />

            <IconLink
              icon={Behance}
              href={data.site.siteMetadata.siteBehanceURL}
              title="Behance"
            />
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
