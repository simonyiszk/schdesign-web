import React from 'react';
import AboutSection from '../components/AboutSection';
import Layout from '../components/Layout';
import styles from './index.module.scss';

const IndexPage = () => (
  <Layout>
    <AboutSection className={styles.aboutSection} />
  </Layout>
);

export default IndexPage;
