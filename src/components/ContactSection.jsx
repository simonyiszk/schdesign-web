import {
  faBehance,
  faFacebook,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import Container from './Container';
import SectionTitle from './SectionTitle';
import styles from './ContactSection.module.scss';

const ContactSection = ({ ...props }) => (
  <section {...props}>
    <Container>
      <SectionTitle id="contact">Kapcsolat</SectionTitle>

      <StaticQuery
        query={graphql`
          query ContactSectionQuery {
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
          <React.Fragment>
            <p className={styles.textCenter}>
              Van egy projekted számunkra?<br />
              Küldj egy e-mailt a{' '}
              <a href={`mailto:${data.site.siteMetadata.email}`}>
                {data.site.siteMetadata.email}
              </a>{' '}
              címre!
            </p>

            <div className={styles.socialMediaIconsContainer}>
              <a
                href={data.site.siteMetadata.siteFacebookURL}
                aria-label="Facebook"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>

              <a
                href={data.site.siteMetadata.siteInstagramURL}
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>

              <a
                href={data.site.siteMetadata.siteBehanceURL}
                aria-label="Behance"
              >
                <FontAwesomeIcon icon={faBehance} />
              </a>
            </div>
          </React.Fragment>
        )}
      />
    </Container>
  </section>
);

export default ContactSection;
