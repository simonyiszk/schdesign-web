import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import Measure from 'react-measure';
import Gallery from 'react-photo-gallery';
import Container from './Container';
import Lightbox from './Lightbox';
import SectionTitle from './SectionTitle';
import styles from './WorksSection.module.scss';

export default class WorksSection extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLightboxOpen: false,
      initialLightboxImage: 0,
      width: 0,
    };

    this.openLightbox = this.openLightbox.bind(this);
    this.closeLightbox = this.closeLightbox.bind(this);
  }

  openLightbox(event, obj) {
    this.setState({
      isLightboxOpen: true,
      initialLightboxImage: obj.index,
    });
  }

  closeLightbox() {
    this.setState({
      isLightboxOpen: false,
    });
  }

  render() {
    const { ...props } = this.props;
    const { isLightboxOpen, initialLightboxImage, width } = this.state;

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
                    .map(({ aspectRatio, ...rest }) => ({
                      ...rest,
                      width: aspectRatio,
                      height: 1,
                    }));

                  return (
                    <div ref={measureRef} className={styles.galleryContainer}>
                      <Gallery
                        photos={images}
                        columns={columns}
                        margin={0}
                        onClick={this.openLightbox}
                      />

                      <Lightbox
                        images={images}
                        isOpen={isLightboxOpen}
                        initialImage={initialLightboxImage}
                        onClose={this.closeLightbox}
                      />
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
