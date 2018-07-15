import { graphql, StaticQuery } from 'gatsby';
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
              // TODO: Always display the latest 12 works
              /*
              if (width >= 1024) {
                columns = 4;
              }
              */
            }

            return (
              <div ref={measureRef} className={styles.galleryContainer}>
                <StaticQuery
                  query={graphql`
                    query WorksSectionQuery {
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
                  render={data => (
                    <Gallery
                      photos={data.allWorksYaml.edges
                        .map(({ node }) => node.image.childImageSharp.fluid)
                        .map(({ aspectRatio, ...rest }) => ({
                          width: aspectRatio,
                          height: 1,
                          ...rest,
                        }))}
                      columns={columns}
                      margin={0}
                    />
                  )}
                />
              </div>
            );
          }}
        </Measure>
      </section>
    );
  }
}
