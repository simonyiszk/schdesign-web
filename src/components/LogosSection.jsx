import React from 'react';
import Container from './Container';
import styles from './LogosSection.module.scss';
import SectionTitle from './SectionTitle';

const LogosSection = ({ className, ...props }) => (
  <section className={`${styles.root} ${className}`} {...props}>
    <Container className={styles.logosContainer}>
      <SectionTitle id="logos" className={styles.sectionTitle}>
        Logótár
      </SectionTitle>
      <p>
        A logótár ideiglenesen{' '}
        <a href="https://drive.google.com/drive/folders/0BxwW6AssIdI4ZWtTVzZzOHNVX3M">
          itt
        </a>{' '}
        érhető el.
      </p>
    </Container>
  </section>
);

export default LogosSection;
