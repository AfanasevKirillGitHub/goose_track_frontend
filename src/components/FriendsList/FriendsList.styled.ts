import styled from 'styled-components';

export const FriendsList = styled.ul`
  list-style: none;
@media screen and (min-width: 768px) {
  display: flex;
  flex-wrap: wrap;
  margin-right: -32px;
  }
`;

export const FriendItem = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
  padding: 12px 4px;
  background-color: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.shadows.main};
  border-radius: ${props => props.theme.radii.medium};

  @media screen and (min-width: 320px) {
    width: 280px;
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    padding: 16px 4px;
    min-height: 246px;
    flex-basis: calc(100% / 2 - 32px);
    border-radius: ${props => props.theme.radii.big};
    &:not(:last-child) {
    margin-bottom: ${props => props.theme.space[5]}px;
    margin-right: ${props => props.theme.space[5]}px;
    }
  }
  @media screen and (min-width: 1280px) {
    padding: 16px 4px;
    min-height: 287px;
    flex-basis: calc(100% / 3 - 32px);
    border-radius: ${props => props.theme.radii.big};
    &:not(:last-child) {
    margin-bottom: ${props => props.theme.space[5]}px;
    margin-right: ${props => props.theme.space[5]}px;
    }
}
`;

export const FriendNameLink = styled.a`
  text-align: center;
  font-size: ${props => props.theme.fontSizes.xxs};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.accent};
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    font-size: ${props => props.theme.fontSizes.s};
  }
  @media screen and (min-width: 1280px) {
    font-size: ${props => props.theme.fontSizes.l};
  }
`;

export const FriendName = styled.h2`
  color: ${props => props.theme.colors.accent};
  font-size: ${props => props.theme.fontSizes.xxs};
  font-weight: ${props => props.theme.fontWeights.bold};
  margin-bottom: 12px;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    font-size: ${props => props.theme.fontSizes.s};
    margin-bottom: ${props => props.theme.space[4]}px;
  }
  @media screen and (min-width: 1280px) {
    font-size: ${props => props.theme.fontSizes.l};
    margin-bottom: ${props => props.theme.space[4]}px;
  }
`;

export const FriendCard = styled.div`
  display: flex;
  align-items: center;
`;

export const FriendImage = styled.img`
    width: 110px;
    height: 78px;
    margin-right: 12px;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 120px;
    height: 85px;
    margin-right: 14px;
  }
  @media screen and (min-width: 1280px) {
    width: 158px;
    height: 112px;
    margin-right: ${props => props.theme.space[4]}px;
  }
`;

export const FriendDataList = styled.ul`
  list-style: none;
`;

export const FriendDataItem = styled.li`
  margin-bottom: 4px;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
  margin-bottom:  ${props => props.theme.space[3]}px;
  }
  @media screen and (min-width: 1280px) {
  margin-bottom: 12px;
  }
`;

export const Text = styled.p`
  font-size: ${props => props.theme.fontSizes.xxs};
  font-weight: ${props => props.theme.fontWeights.medium};
  color: ${props => props.theme.colors.black};
  line-height: ${props => props.theme.lineHeights.l};
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    font-size: ${props => props.theme.fontSizes.xs};
  }
  @media screen and (min-width: 1280px) {
    font-size: ${props => props.theme.fontSizes.s};
  }
`;

export const FriendDataLink = styled.a`
  text-decoration: none;
  font-size: ${props => props.theme.fontSizes.xxs};
  font-weight: ${props => props.theme.fontWeights.medium};
  line-height: ${props => props.theme.lineHeights.l};
  color: ${props => props.theme.colors.black};
  &:hover,
  &:focus {
    color: ${props => props.theme.colors.accent};
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    font-size: ${props => props.theme.fontSizes.xs};
  }
  @media screen and (min-width: 1280px) {
    font-size: ${props => props.theme.fontSizes.s};
  }
`;

export const WorkTime = styled.p`
  cursor: pointer;
  font-size: ${props => props.theme.fontSizes.xxs};
  font-weight: ${props => props.theme.fontWeights.medium};
  color: ${props => props.theme.colors.mainText};
  &:hover,
  &:focus {
    color: ${props => props.theme.colors.accent};
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    font-size: ${props => props.theme.fontSizes.xs};
  }
  @media screen and (min-width: 1280px) {
    font-size: ${props => props.theme.fontSizes.s};
  }
`;

export const ModalTime = styled.ul`
  list-style: none;
  z-index: 5;
  position: absolute;
  width: 120px;
  padding: 12px;
  color: ${props => props.theme.colors.black};
  background-color: ${props => props.theme.colors.white};
  box-shadow: 4px 4px 8px 0px #00000040;
  border: ${props => props.theme.borders.orangeSmall};
  border-radius: 8px;
`;

export const DaysItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
`;

export const Time = styled.p`
  font-size: ${props => props.theme.fontSizes.xxs};
  font-weight: ${props => props.theme.fontWeights.medium};
`;
