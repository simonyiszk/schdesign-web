import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import Container from './Container';
import SectionTitle from './SectionTitle';
import styles from './TeamSection.module.scss';

const TeamSection = ({ ...props }) => (
  <section {...props}>
    <Container>
      <SectionTitle id="team" mdUpCentered className={styles.sectionTitle}>
        Csapatunk
      </SectionTitle>
    </Container>

    <div className={styles.membersContainer}>
      <StaticQuery
        query={graphql`
          query TeamSectionQuery {
            allMembersYaml {
              edges {
                node {
                  id
                  name
                  picture {
                    childImageSharp {
                      fluid(maxWidth: 256, quality: 92) {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                      }
                    }
                  }
                }
              }
            }
          }
        `}
        render={staticData =>
          staticData.allMembersYaml.edges.map(({ node }) => (
            <Img
              key={node.id}
              fluid={node.picture.childImageSharp.fluid}
              alt={node.name}
            />
          ))
        }
      />
    </div>
  </section>
);

export default TeamSection;
