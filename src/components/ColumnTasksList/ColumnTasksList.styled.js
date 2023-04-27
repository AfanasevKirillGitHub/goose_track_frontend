import styled from 'styled-components';

export const TaskList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;

  margin-bottom: 0;

  @media screen and (min-width: 768px) {
    gap: 18px;

    margin-bottom: ${p => p.theme.space[5]}px;

    background-color: white;
  }
`;

export const TaskElement = styled.li`
  list-style: none;
`;
