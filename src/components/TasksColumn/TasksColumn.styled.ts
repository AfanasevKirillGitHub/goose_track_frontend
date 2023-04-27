import styled from 'styled-components';

export const Column = styled.li`
  display: flex;
  flex-direction: column;
  padding: 18px 18px 10px 18px;
  min-width: 335px;
  width: 100%;
  max-height: 432px;
  list-style: none;
  overflow-y: auto;

  border: 1px solid rgba(220, 227, 229, 0.8);
  border-radius: 8px;

  background-color: ${p => p.theme.colors.white};

  scroll-snap-align: start;

  @media screen and (min-width: 768px) {
    min-width: 344px;
    max-height: 568px;
    padding: 18px 20px 28px 20px;
  }
`;
