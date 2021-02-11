import styled, { css } from 'styled-components';

const animation = (props) =>
  css`
    ${props.keyframes} ${props.animationLength}s linear 1;
  `;

export const Container = styled.div`
  width: 100%;
  will-change: transform;
  animation: ${animation};
`;
