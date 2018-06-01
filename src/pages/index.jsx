import React from 'react';
import Container from '../components/Container';
import Layout from '../components/Layout';
import styles from './index.module.scss';

const IndexPage = () => (
  <Layout>
    <Container>
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
    </Container>
  </Layout>
);

export default IndexPage;
