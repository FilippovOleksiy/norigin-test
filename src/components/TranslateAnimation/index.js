import React from 'react';

import { keyframes } from 'styled-components';

import { Container } from './styles';

const translateXKeyframes = (startPosition, endPosition) => keyframes`
  from {
    transform: translateX(${startPosition}px);
  }

  to {
    transform: translateX(${endPosition}px);
  }
`;

export default ({ children, startPosition, endPosition, time }) => {
  return (
    <Container
      {...{
        keyframes: translateXKeyframes(startPosition, endPosition),
        animationLength: time,
      }}
    >
      {children}
    </Container>
  );
};
