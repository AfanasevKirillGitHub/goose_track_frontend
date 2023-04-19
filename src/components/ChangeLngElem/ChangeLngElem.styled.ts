import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  align-items: center;
`;

export const Btn = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  transition: transform 300ms linear;

  :hover {
    transform: scale(1.4);
  }
`;
