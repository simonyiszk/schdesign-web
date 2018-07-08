import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import Container from './Container';
import SectionTitle from './SectionTitle';

const TeamSection = ({ ...props }) => (
  <section {...props}>
    <Container>
      <SectionTitle id="team" mdUpCentered>
        Csapatunk
      </SectionTitle>

      <ul>
        <StaticQuery
          query={graphql`
            query TeamSectionQuery {
              allMembersYaml {
                edges {
                  node {
                    id
                    name
                  }
                }
              }
            }
          `}
          render={staticData =>
            staticData.allMembersYaml.edges.map(({ node }) => (
              <li key={node.id}>{node.name}</li>
            ))
          }
        />
      </ul>
    </Container>
  </section>
);

export default TeamSection;
