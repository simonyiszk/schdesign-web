import React from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import AboutSection from '../components/AboutSection';
import Layout from '../components/Layout';
import ContactSection from '../components/ContactSection';
// import TeamSection from '../components/TeamSection';
import LogosSection from '../components/LogosSection';
import WorksSection from '../components/WorksSection';
import SponsorsSection from '../components/SponsorsSection';
import styles from './index.module.scss';

if (typeof window !== 'undefined') {
  smoothscroll.polyfill();
}

const IndexPage = () => (
  <Layout dark>
    <AboutSection className={styles.aboutSection} />
    <WorksSection />
    {/* <TeamSection className={styles.teamSection} /> */}
    <LogosSection />
    <ContactSection />
    <SponsorsSection />
  </Layout>
);

export default IndexPage;
