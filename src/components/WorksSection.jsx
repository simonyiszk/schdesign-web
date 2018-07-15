import React from 'react';
import Measure from 'react-measure';
import Gallery from 'react-photo-gallery';
import Container from './Container';
import SectionTitle from './SectionTitle';
import styles from './WorksSection.module.scss';

export default class WorksSection extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      width: 0,
    };
  }

  render() {
    const { ...props } = this.props;
    const { width } = this.state;

    return (
      <section {...props}>
        <Container>
          <SectionTitle id="works" mdUpCentered>
            Munkáink
          </SectionTitle>
        </Container>

        <Measure
          bounds
          onResize={contentRect =>
            this.setState({ width: contentRect.bounds.width })
          }
        >
          {({ measureRef }) => {
            let columns = 2;
            if (width >= 600) {
              columns = 3;
              if (width >= 1024) {
                columns = 4;
              }
            }

            return (
              <div ref={measureRef} className={styles.galleryContainer}>
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
                  columns={columns}
                  margin={0}
                />
              </div>
            );
          }}
        </Measure>
      </section>
    );
  }
}
