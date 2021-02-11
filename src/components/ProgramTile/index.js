import React from 'react';

import { Container } from './styles';

export default ({ title, start, end, containerWidth }) => {
  return (
    <Container width={containerWidth}>
      <div>{title}</div>
      <div>
        {start} - {end}
      </div>
    </Container>
  );
};
