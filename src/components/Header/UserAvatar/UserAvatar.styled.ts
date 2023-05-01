import styled from 'styled-components';

interface IWrapper {
  invert: boolean;
}

export const Wrapper = styled.div<IWrapper>`
  display: flex;
  align-items: center;
  gap: 14px;
  padding-left: 18px;
  padding-right: 18px;
  flex-direction: ${props => (props.invert ? 'row' : 'row-reverse')};
  justify-content: ${props => (props.invert ? 'none' : 'flex-end')};
`;

export const Text = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  color: ${p => p.theme.colors.black5};

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

export const AvatarUser = styled.div`
  border-radius: 50%;
  border: ${p => p.theme.borders.avatar};
  width: 32px;
  height: 32px;

  @media (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
`;

export const AvatarDefault = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: ${p => p.theme.borders.avatar};
  padding: 2px;
  width: 32px;
  height: 32px;

  @media (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
`;

export const Avatar = styled.img`
  border-radius: 50%;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 16px;
  height: 16px;

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;
