import styled from 'styled-components';

export const TaskToolbar = styled.div`
  display: flex;
  align-items: end;
  gap: 10px;
`;

export const TaskToolbarBtn = styled.button`
  display: flex;
  align-items: end;
  justify-content: center;
  padding: 0;
  margin: 0;

  border: none;
  outline: none;
  background-color: transparent;

  cursor: pointer;

  color: ${p => p.theme.colors.black};

  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.blue};
  }

  &:disabled {
    cursor: default;
  }
`;
