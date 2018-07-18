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
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faBehance} />
            </div>
          </React.Fragment>
        )}
      />
    </Container>
  </section>
);

export default ContactSection;
