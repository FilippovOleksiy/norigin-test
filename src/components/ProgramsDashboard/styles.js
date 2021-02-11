import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  flex: 1;
  overflow-x: hidden;
`;

export const TimePointer = styled.div`
  height: 100%;
  border: 1px solid red;
  left: 50%;
  position: absolute;
  z-index: 1100;
`;
