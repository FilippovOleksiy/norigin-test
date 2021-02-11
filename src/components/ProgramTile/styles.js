import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: ${({ width }) => width}px;
  border-right: 1px solid #393939;
  padding: 10px 0 0 10px;
  flex-direction: column;

  color: white;
  background-color: #111111;
`;
