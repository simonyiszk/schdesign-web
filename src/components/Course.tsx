import Img from 'gatsby-image';
import React from 'react';
import { Box, Text } from 'rebass';

type Props = {
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
};

const Course = ({ course }: Props) => (
  <Box
    as="li"
    p="2"
    flexDirection={['column', 'row']}
    css="
        flex-basis: 50%;
        "
  >
    <Box
      as="div"
      css="
        display: flex;
        @media (max-width: 710px) {
          flex-direction: column;
        }"
    >
      <Box
        as={Img}
        fluid={course}
        title={course.name}
        m={1}
        css="width: 10rem; min-width: 100px; flex-shrink: 0; margin: auto;"
      />
      <Box
        as="div"
        css="
            flex-grow: 1;
            text-align: center;
            margin-left: 1rem;
          "
      >
        <Text
          as="div"
          css="font-weight: bold; font-size: 1.5rem; margin: 1rem 0;"
        >
          {course.name}
        </Text>
        {course.dates.map(date => (
          <Text
            as="div"
            css={`
              display: flex;
              flex-wrap: wrap;
              @media (max-width: 1170px) and (min-width: 1024px) {
                flex-direction: column;
              }
              @media (max-width: 805px) and (min-width: 711px) {
                flex-direction: column;
              }
              justify-content: center;
              margin-bottom: 0.5rem;
              color: inherit;
              :hover {
                color: ${({ theme }: any) => theme.colors.red};
              }
            `}
          >
            <Text as="span" css="font-weight: bold;margin-right: 0.2rem;">
              {date.date}
            </Text>{' '}
            <Text as="span">
              {date.start}-{date.end}
            </Text>
          </Text>
        ))}
      </Box>
    </Box>
  </Box>
);

export default Course;
