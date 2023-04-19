import styled from 'styled-components';

export const NewsList = styled.ul`
  list-style: none;
  display: flex;
  /* align-items: center; */
  justify-content: center;
  margin-right: -32px;
  margin-bottom: -60px;
  flex-wrap: wrap;
`;

export const NewsListItem = styled.li`
  flex-basis: calc(100% / 3 - 32px);
  margin-right: 32px;
  margin-bottom: 60px;
`;

export const Img = styled.img`
  width: 100%;
  height: 252px;
`;
