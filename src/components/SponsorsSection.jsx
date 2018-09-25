import React from 'react';
import Container from './Container';
import styles from './SponsorsSection.module.scss';
import SchönherzLogoSrc from '../assets/schönherz-logo.svg';
import SimonyiLogoSrc from '../assets/simonyi-logo.svg';
import VIKLogoSrc from '../assets/vik-logo.svg';

const SponsorsSection = ({ className, ...props }) => (
  <section className={`${styles.root} ${className}`} {...props}>
    <Container className={styles.sponsorsContainer}>
      <a href="//simonyi.bme.hu">
        <img
          src={SimonyiLogoSrc}
          alt="Simonyi Károly Szakkollégium"
          className={styles.sponsorLogo}
        />
      </a>
      <a href="//vik.bme.hu">
        <img src={VIKLogoSrc} alt="BME VIK" className={styles.sponsorLogo} />
      </a>
      <a href="//sch.bme.hu">
        <img
          src={SchönherzLogoSrc}
          alt="Schönherz Kollégium"
          className={styles.sponsorLogo}
        />
      </a>
    </Container>
  </section>
);

export default SponsorsSection;
