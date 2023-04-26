import styled from 'styled-components';

interface ICellWrapperProps {
  isWeekend?: boolean;
  isHeader?: boolean;
  isSelectedMonth?: boolean;
}

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 32px;
  padding-right: 32px;
`;

export const CellWrapper = styled.div<ICellWrapperProps>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  ${p => p.isHeader && 'text-align:center'}
  width: 27px;
  height: 26px;

  font-weight: 700;
  font-size: 16px;
  line-height: 1.125;
  color: #343434;
`;

export const CurrentDay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.blue};
  color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.radii.normal};

  width: 100%;
  height: 100%;
`;

export const WeekWrapper = styled.ul`
  list-style: none;
  display: flex;

  justify-content: space-between;
  width: 100%;
  border: 1px solid rgba(220, 227, 229, 0.8);
  border-radius: 8px;
  padding: 10px 46px;

  font-weight: 600;
  font-size: 14px;
  line-height: 1.286;
  color: #616161;
`;

export const DayOfWeek = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;

  :nth-last-child(1) > span,
  :nth-last-child(2) > span {
    color: ${props => props.theme.colors.blue};
  }
`;
