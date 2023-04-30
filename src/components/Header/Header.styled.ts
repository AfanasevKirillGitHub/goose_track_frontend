import styled from 'styled-components';

export const Header = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 20px 64px 20px;

  @media (min-width: 768px) {
    padding: 24px 32px 64px 32px;
  }

  @media (min-width: 1440px) {
    padding: 40px 32px 16px 32px;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;
