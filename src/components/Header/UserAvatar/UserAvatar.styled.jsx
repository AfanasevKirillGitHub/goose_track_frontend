import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;
export const UserAvatar = styled.div`
  border-radius: 50%;
  border: 2px solid #3e85f3;
  width: 32px;
  height: 32px;
  cursor: pointer;

  @media (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
`;

export const Text = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  color: #343434;
`;

export const AvatarDefault = styled.div`
  border-radius: 50%;
  border: 2px solid #3e85f3;
  padding: 2px;
  width: 32px;
  height: 32px;
  cursor: pointer;

  @media (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
`;

export const Avatar = styled.img`
  border-radius: 50%;
`;
