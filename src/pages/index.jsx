import React from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import AboutSection from '../components/AboutSection';
import Layout from '../components/Layout';
import ContactSection from '../components/ContactSection';
import TeamSection from '../components/TeamSection';
import WorksSection from '../components/WorksSection';
import styles from './index.module.scss';

smoothscroll.polyfill();

const IndexPage = () => (
  <Layout>
    <AboutSection className={styles.aboutSection} />
    <WorksSection />
    <TeamSection className={styles.teamSection} />
    <ContactSection />
  </Layout>
);

export default IndexPage;
