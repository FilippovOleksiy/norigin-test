import styled from 'styled-components';

export const HoursTile = styled.div`
  display: flex;
  width: ${({ width }) => width}px;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  color: white;
  background-color: #202020;
`;

export const Pointer = styled.div`
  height: 10px;
  position: absolute;
  border: 1px solid white;

  left: 50%;
  bottom: 0px;
`;
