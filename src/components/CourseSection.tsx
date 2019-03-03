import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import { Box, Heading, Link, Text } from 'rebass';
import Container from './Container';
import Section from './Section';
import Course from './Course';
import Paragraph from './Paragraph';

const CourseSection = () => {
  return (
    <Section>
      <Container as={Text} textAlign="center" mb={3}>
        <Heading id="courses" mt={4} mb={4}>
          Tanfolyamok
        </Heading>

        <Paragraph css="font-size: 1.2rem;" mb={4}>
          Jelentkezni{' '}
          <Text
            as={Link}
            href="mailto:balazs.frey@schdesign.hu"
            fontWeight="bold"
          >
            balazs.frey@schdesign.hu
          </Text>{' '}
          e-mail címen tudtok. Várunk mindenkit sok szeretettel.
        </Paragraph>
        <Box
          as="div"
          css="
            display: flex;
            flex-wrap: wrap;
            list-style-type: none;
            justify-content: center;
          "
        >
          <StaticQuery
            query={graphql`
              {
                allCoursesYaml {
                  edges {
                    node {
                      name
                      dates {
                        date
                        room
                        start
                        end
                      }
                      image {
                        id
                        childImageSharp {
                          fluid {
                            ...GatsbyImageSharpFluid
                            originalImg
                          }
                        }
                      }
                    }
                  }
                }
              }
            `}
            render={data => {
              return data.allCoursesYaml.edges.map(({ node }: any) => (
                <Course
                  key={node.name}
                  course={{
                    name: node.name,
                    dates: node.dates,
                    ...node.image.childImageSharp.fluid,
                  }}
                />
              ));
            }}
          />
        </Box>
      </Container>
    </Section>
  );
};

export default CourseSection;
