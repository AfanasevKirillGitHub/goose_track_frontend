import styled from 'styled-components';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import { IScroll } from '../../helpers/scrollbars';

interface IOverlayProps {
  element: string;
  options: { scrollbars: IScroll };
}

export const TaskList = styled(OverlayScrollbarsComponent)<IOverlayProps>`
  max-height: 290px;

  margin-bottom: 8;

  @media screen and (min-width: 768px) {
    max-height: 378px;
    margin-bottom: ${p => p.theme.space[5]}px;

    background-color: ${p => p.theme.colors.white};
  }
`;

export const TaskElement = styled.li`
  list-style: none;
  :not(:last-child) {
    margin-bottom: 14px;
  }

  @media screen and (min-width: 768px) {
    :not(:last-child) {
      margin-bottom: 18px;
    }
  }
`;
