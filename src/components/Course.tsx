import Img from 'gatsby-image';
import React from 'react';
import { Box, Flex, Text } from 'rebass';

interface Props {
  course: {
    aspectRatio: number;
    src: string;
    srcSet: string;
    sizes: string;
    originalImg: string;
    name: string;
    dates: {
      date: string;
      room: string;
      start: string;
      end: string;
    }[];
  };
}

const Course = ({ course }: Props) => (
  <Box
    as="li"
    p="2"
    flexDirection={['column', 'row']}
    css="
        flex-basis: 50%;
        "
  >
    <Box as={Flex} flexDirection={['column', null, 'row']}>
      <Box
        as={Img}
        fluid={course}
        title={course.name}
        m={1}
        alignSelf={['center', null, 'flex-start']}
        css="width: 10rem; min-width: 100px; flex-shrink: 0; margin: 0;"
      />
      <Box
        as="div"
        ml={[0, null, 3]}
        css="
            flex-grow: 1;
            text-align: center;
          "
      >
        <Text
          as="div"
          css="font-weight: bold; font-size: 1.5rem; margin: 1rem 0;"
        >
          {course.name}
        </Text>
        {course.dates.map(date => (
          <Box
            as="div"
            css={`
              color: inherit;
              :hover {
                color: ${({ theme }: any) => theme.colors.red};
              }
            `}
          >
            <Box
              as={Flex}
              flexDirection={['column', 'row', 'column', 'row']}
              css="
                flex-wrap: wrap;
                justify-content: center;
              "
            >
              <Text as="span" css="font-weight: bold;margin-right: 0.2rem;">
                {date.date}
              </Text>{' '}
              <Text as="span">
                {date.start}-{date.end}
              </Text>
            </Box>
            <Box as="div" mb={2}>
              <Text as="span">({date.room})</Text>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  </Box>
);

export default Course;
