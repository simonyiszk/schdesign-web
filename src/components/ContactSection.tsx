import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import { Heading, Link, Text } from 'rebass';
import { Behance, FacebookSquare, Instagram } from 'styled-icons/fa-brands';
import Container from './Container';
import IconLink from './IconLink';
import Paragraph from './Paragraph';
import Section, { Props } from './Section';

const ContactSection = (props: Props) => (
  <Section {...props}>
    <Container as={Text} textAlign="center">
      <Heading id="contact">Kapcsolat</Heading>

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
            <Text my={4} fontSize="2em">
              <IconLink
                icon={FacebookSquare}
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

            <Paragraph pb={2}>
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
            </Paragraph>
          </>
        )}
      />
    </Container>
  </Section>
);

export default ContactSection;
