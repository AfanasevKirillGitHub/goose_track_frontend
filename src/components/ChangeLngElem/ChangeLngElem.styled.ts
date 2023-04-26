import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  align-items: center;
`;

export const Btn = styled.button`
  padding: 0;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: transform 300ms linear;

  :hover {
    transform: scale(1.1);
  }
`;
