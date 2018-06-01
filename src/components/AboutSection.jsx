import PropTypes from 'prop-types';
import React from 'react';
import Container from './Container';
import styles from './AboutSection.module.scss';

const AboutSection = ({ className, ...props }) => (
  <Container className={`${styles.contentContainer} ${className}`} {...props}>
    <div className={styles.introductionContainer}>
      <h1 className={styles.sectionTitle}>Rólunk</h1>

      <p>
        A Schönherz Design Stúdió a Simonyi Károly Szakkollégium kreatív
        alkotóműhelye.
      </p>

      <p>
        Bármilyen designnal, arculattervezéssel kapcsolatos feladattal szívesen
        foglalkozunk, legyen az egy weboldal, egy plakát vagy akár egy mobil
        alkalmazás megtervezése.
      </p>

      <p>
        Keress minket projektmunkákkal, vagy nyerj betekintést a világunkba
        workshopjaink alkalmával!
      </p>
    </div>

    <ul className={styles.divisionsList}>
      <li>Grafikai tervezés</li>
      <li>Web design</li>
      <li>User experience</li>
      <li>3D</li>
    </ul>
  </Container>
);

AboutSection.propTypes = {
  className: PropTypes.string,
};

AboutSection.defaultProps = {
  className: '',
};

export default AboutSection;
