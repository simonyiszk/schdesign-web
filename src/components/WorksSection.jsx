import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';
import Measure from 'react-measure';
import Gallery from 'react-photo-gallery';
import Container from './Container';
import SectionTitle from './SectionTitle';
import styles from './WorksSection.module.scss';

export default class WorksSection extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      lightboxIsOpen: false,
      selectedIndex: 0,
      width: 0,
    };

    this.toggleLightbox = this.toggleLightbox.bind(this);
  }

  toggleLightbox(selectedIndex) {
    this.setState(prevState => ({
      lightboxIsOpen: !prevState.lightboxIsOpen,
      selectedIndex,
    }));
  }

  render() {
    const { ...props } = this.props;
    const { lightboxIsOpen, selectedIndex, width } = this.state;

    return (
      <section {...props}>
        <Container>
          <SectionTitle id="works">Munkáink</SectionTitle>
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
              // TODO: Always display the latest 12 works
              /*
              if (width >= 1024) {
                columns = 4;
              }
              */
            }

            return (
              <StaticQuery
                query={graphql`
                  {
                    allWorksYaml(limit: 12) {
                      edges {
                        node {
                          name
                          author
                          image {
                            childImageSharp {
                              fluid(maxWidth: 1024, quality: 92) {
                                src
                                srcSet
                                sizes
                                aspectRatio
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                `}
                render={data => {
                  const images = data.allWorksYaml.edges
                    .map(({ node }) => ({
                      ...node.image.childImageSharp.fluid,
                      caption: `${node.name} – ${node.author}`,
                    }))
                    .map(({ src, aspectRatio, ...rest }) => ({
                      ...rest,
                      source: src,
                      width: aspectRatio,
                      height: 1,
                    }));

                  return (
                    <div ref={measureRef} className={styles.galleryContainer}>
                      <Gallery
                        photos={images}
                        columns={columns}
                        margin={0}
                        onClick={(event, { index }) =>
                          this.toggleLightbox(index)
                        }
                      />

                      <ModalGateway>
                        {lightboxIsOpen ? (
                          <Modal onClose={this.toggleLightbox}>
                            <Carousel
                              components={{
                                FooterCount: () => null,
                              }}
                              currentIndex={selectedIndex}
                              frameProps={{ autoSize: 'height' }}
                              formatters={{
                                getAltText: ({ data: imageData }) =>
                                  imageData.caption,
                                getNextLabel: ({ currentIndex }) =>
                                  `${currentIndex + 2}. kép mutatása`,
                                getPrevLabel: ({ currentIndex }) =>
                                  `${currentIndex}. kép mutatása`,
                                getNextTitle: () => 'Következő (jobbra nyíl)',
                                getPrevTitle: () => 'Előző (balra nyíl)',
                                getCloseLabel: () => 'Bezárás (esc)',
                                getFullscreenLabel: ({ isFullscreen }) =>
                                  isFullscreen
                                    ? 'Kilépés teljes képernyős módból (f)'
                                    : 'Teljes képernyős módba lépés (f)',
                              }}
                              views={images}
                            />
                          </Modal>
                        ) : null}
                      </ModalGateway>
                    </div>
                  );
                }}
              />
            );
          }}
        </Measure>
      </section>
    );
  }
}
