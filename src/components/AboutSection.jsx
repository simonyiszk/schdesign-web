import PropTypes from 'prop-types';
import React from 'react';
import Container from './Container';
import styles from './AboutSection.module.scss';

const AboutSection = ({ className, ...props }) => (
  <div className={`${styles.root} ${className}`} {...props}>
    <div className={styles.divisionsBackground} />

    <Container className={`${styles.contentContainer} ${className}`}>
      <div className={styles.introductionContainer}>
        <h1 className={styles.sectionTitle}>Rólunk</h1>

        <p>
          A Schönherz Design Stúdió a Simonyi Károly Szakkollégium kreatív
          alkotóműhelye.
        </p>

        <p>
          Bármilyen designnal, arculattervezéssel kapcsolatos feladattal
          szívesen foglalkozunk, legyen az egy weboldal, egy plakát vagy akár
          egy mobil alkalmazás megtervezése.
        </p>

        <p>
          Keress minket projektmunkákkal, vagy nyerj betekintést a világunkba
          workshopjaink alkalmával!
        </p>
      </div>

      <ul className={styles.divisionsList}>
        <li>
          <span className={styles.divisionLabel}>Grafikai tervezés</span>
        </li>
        <li>
          <span className={styles.divisionLabel}>Web design</span>
        </li>
        <li>
          <span className={styles.divisionLabel}>User experience</span>
        </li>
        <li>
          <span className={styles.divisionLabel}>3D</span>
        </li>
      </ul>
    </Container>
  </div>
);

AboutSection.propTypes = {
  className: PropTypes.string,
};

AboutSection.defaultProps = {
  className: '',
};

export default AboutSection;
