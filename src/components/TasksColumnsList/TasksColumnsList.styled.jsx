import styled from 'styled-components';

export const ColumnList = styled.ul`
  display: flex;
  list-style: none;
  width: 100%;
  gap: 16px;
  min-height: 100%;
  overflow: hidden;
  overflow-x: scroll;

  scroll-snap-type: x mandatory;

  @media screen and (min-width: 1440px) {
    gap: 27px;
  }
`;
