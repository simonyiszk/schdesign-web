import React from 'react';
import AboutSection from '../components/AboutSection';
import Layout from '../components/Layout';
import TeamSection from '../components/TeamSection';
import styles from './index.module.scss';

const IndexPage = () => (
  <Layout>
    <AboutSection className={styles.aboutSection} />
    <TeamSection />
  </Layout>
);

export default IndexPage;
