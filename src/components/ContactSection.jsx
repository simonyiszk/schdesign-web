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
  <section className={styles.root} {...props}>
    <Container>
      <SectionTitle id="contact" className={styles.contactTitle}>
        Kapcsolat
      </SectionTitle>

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

            <p className={`${styles.textCenter} ${styles.projectRequest}`}>
              Van egy projekted számunkra?
              <br />
              Küldj egy e-mailt a{' '}
              <a
                href={`mailto:${data.site.siteMetadata.email}`}
                className={styles.email}
              >
                {data.site.siteMetadata.email}
              </a>{' '}
              címre!
            </p>
          </>
        )}
      />
    </Container>
  </section>
);

export default ContactSection;
