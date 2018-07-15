import React from 'react';
import Gallery from 'react-photo-gallery';
import Container from './Container';
import SectionTitle from './SectionTitle';
import styles from './WorksSection.module.scss';

const WorksSection = ({ ...props }) => (
  <section {...props}>
    <Container>
      <SectionTitle id="works" mdUpCentered>
        Munkáink
      </SectionTitle>
    </Container>

    <div className={styles.galleryContainer}>
      <Gallery
        photos={[
          {
            src: 'https://source.unsplash.com/2ShvY8Lf6l0/800x599',
            width: 4,
            height: 3,
          },
          {
            src: 'https://source.unsplash.com/Dm-qxdynoEc/800x799',
            width: 1,
            height: 1,
          },
          {
            src: 'https://source.unsplash.com/qDkso9nvCg0/600x799',
            width: 3,
            height: 4,
          },
          {
            src: 'https://source.unsplash.com/iecJiKe_RNg/600x799',
            width: 3,
            height: 4,
          },
          {
            src: 'https://source.unsplash.com/epcsn8Ed8kY/600x799',
            width: 3,
            height: 4,
          },
          {
            src: 'https://source.unsplash.com/NQSWvyVRIJk/800x599',
            width: 4,
            height: 3,
          },
          {
            src: 'https://source.unsplash.com/zh7GEuORbUw/600x799',
            width: 3,
            height: 4,
          },
          {
            src: 'https://source.unsplash.com/PpOHJezOalU/800x599',
            width: 4,
            height: 3,
          },
          {
            src: 'https://source.unsplash.com/I1ASdgphUH4/800x599',
            width: 4,
            height: 3,
          },
        ]}
        margin={0}
      />
    </div>
  </section>
);

export default WorksSection;
