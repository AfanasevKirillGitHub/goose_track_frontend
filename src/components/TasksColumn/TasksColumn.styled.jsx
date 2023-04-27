import styled from 'styled-components';

export const Column = styled.li`
  display: flex;
  flex-direction: column;
  padding: 18px 23px 28px 20px;
  width: 100%;
  margin-top: 16px;
  list-style: none;

  border: 1px solid rgba(220, 227, 229, 0.8);
  border-radius: 8px;

  background-color: ${p => p.theme.colors.white};
`;
