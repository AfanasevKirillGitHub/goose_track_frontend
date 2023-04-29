import styled from 'styled-components';

export const HeaderTitle = styled.h1`
  display: none;

  @media (min-width: 1440px) {
    display: block;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 32px;
    color: ${p => p.theme.colors.columnHeader};
  }
`;

export const MotivationWrapper = styled.div`
  display: none;
  @media (min-width: 1440px) {
    display: flex;
    gap: 8px;
  }
`;

export const WrapperText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const MotivationText = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: ${p => p.theme.colors.columnHeader};
`;

export const Accent = styled.span`
  color: ${p => p.theme.colors.currentDay};
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
`;
