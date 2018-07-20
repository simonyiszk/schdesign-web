import PropTypes from 'prop-types';
import React from 'react';
import Container from './Container';
import SectionTitle from './SectionTitle';
import styles from './AboutSection.module.scss';

const AboutSection = ({ className, ...props }) => (
  <section className={`${styles.root} ${className}`} {...props}>
    <Container className={styles.introductionContainer}>
      <div>
        <SectionTitle mdUpAlignLeft>Rólunk</SectionTitle>

        <p>
          A Schönherz Design Stúdió a Simonyi Károly Szakkollégium kreatív
          alkotóműhelye.
        </p>

        <p>
          Bármilyen designnal, arculattervezéssel kapcsolatos feladattal
          szívesen foglalkozunk, legyen az egy weboldal, egy plakát vagy akár
          egy mobilalkalmazás megtervezése.
        </p>

        <p>
          Keress minket projektmunkákkal, vagy nyerj betekintést a világunkba
          workshopjaink alkalmával!
        </p>
      </div>
    </Container>

    <div className={styles.divisionsOuterContainer}>
      <Container className={styles.divisionsInnerContainer}>
        <ul className={styles.divisionsList}>
          <li>Grafikai tervezés</li>
          <li>Web design</li>
          <li>User experience</li>
          <li>3D</li>
        </ul>
      </Container>
    </div>
  </section>
);

AboutSection.propTypes = {
  className: PropTypes.string,
};

AboutSection.defaultProps = {
  className: '',
};

export default AboutSection;
