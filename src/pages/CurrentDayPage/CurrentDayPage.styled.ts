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
`;

export const CurrDayWrapper = styled.div`
  padding-top: 16px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;

  @media screen and (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
  }
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
  color: ${props => props.theme.colors.black};
`;

export const CurrentDay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.currentDay};
  color: ${props => props.theme.colors.white3};
  border-radius: ${props => props.theme.radii.normal};

  width: 100%;
  height: 100%;
`;

export const WeekWrapper = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 14px 18px;
  border: 1px solid rgba(220, 227, 229, 0.8);
  border-radius: 8px;

  font-weight: 600;
  font-size: 14px;
  line-height: 1.286;

  background-color: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.grey3};

  @media screen and (min-width: 768px) {
    padding: 10px 46px;
  }
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
