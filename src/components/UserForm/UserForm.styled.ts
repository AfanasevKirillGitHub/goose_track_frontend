import styled from 'styled-components';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface ICellBirhtDayProps {
  birthDay: boolean;
  selected: Date;
  type: string;
  input: boolean;
}

interface IInput {
  style?: any;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  width: 335px;
  height: 700px;
  background: ${p => p.theme.colors.white};
  border-radius: 16px;
  @media screen and (min-width: 768px) {
    width: 704px;
    height: 880px;
  }
  @media screen and (min-width: 1440px) {
    width: 1087px;
    height: 752px;
  }
`;

export const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 72px;
  border: ${p => p.theme.borders.avatar};
  border-radius: 50%;
  overflow: hidden;

  @media screen and (max-width: 767px) {
    position: absolute;
    top: -36px;
    left: 132px;
    background-color: ${props => props.theme.colors.white};
  }

  @media screen and (min-width: 768px) {
    margin-top: 40px;
    margin-bottom: 20px;
    width: 124px;
    height: 124px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 60px;
    margin-bottom: 20px;
    width: 124px;
    height: 124px;
  }
`;

export const ImgAvatar = styled.img`

`;

export const UserName = styled.h2`
  margin-bottom: 4px;
  font-family: 'Inter';
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.xl};
  color: ${p => p.theme.colors.black5};
  @media screen and (max-width: 767px) {
    margin-top: 59px;
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 8px;
  }
`;

export const UserText = styled.p`
  margin-bottom: 40px;
  font-family: 'Inter';
  font-weight: ${p => p.theme.fontWeights.semiBold};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: ${p => p.theme.lineHeights.m};
  color: ${p => p.theme.colors.grey};

  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.s};
    line-height: ${p => p.theme.lineHeights.xl};
  }
`;

export const AvatarButton = styled.label`
  position: absolute;
  @media screen and (max-width: 767px) {
    left: 177px;
    top: 23px;
  }
  @media screen and (min-width: 768px) {
    left: 200px;
    top: 143px;
  }
  @media screen and (min-width: 1440px) {
    left: 400px;
    top: 160px;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 14px;
  height: 14px;
  background-color: ${props => props.theme.colors.blue};
  border-radius: 50%;
  color: ${props => props.theme.colors.white};

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 767px) {
    width: 8px;
    height: 8px;
  }
  @media screen and (min-width: 768px) {
    width: 18px;
    height: 18px;
  }
`;

export const InputFile = styled.input`
  opacity: 0;
  height: 0;
  width: 0;
  line-height: 0;
  overflow: hidden;
  padding: 0;
  margin: 0;
`;

export const InputList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media screen and (min-width: 768px) {
    width: 354px;
    min-height: 458px;
    justify-content: space-between;
  }
  @media screen and (min-width: 1440px) {
    width: 758px;
    min-height: 264px;
  }
`;

export const DivNotifications = styled.div`
  position: relative;
  @media (max-width: 767px) {
    margin-bottom: 28px;
  }
  @media (min-width: 768px) {
    margin-bottom: 26px;
  }
`;

export const Input = styled.input<IInput>`
  width: 299px;
  height: 42px;
  padding: 12px 14px;
  border: ${p => p.theme.borders.userInput};
  border-radius: 8px;
  background-color: ${p => p.theme.colors.white};
  font-family: 'Inter';
  font-weight: ${p => p.theme.fontWeights.semiBold};
  font-size: ${p => p.theme.fontSizes.s};
  line-height:  ${p => p.theme.lineHeights.xl};
  color: ${p => p.theme.colors.black2};
  margin-top: 8px;
  @media screen and (min-width: 768px) {
    width: 354px;
    height: 46px;
    padding: 14px 18px;
    font-size: ${p => p.theme.fontSizes.m};
    line-height: ${p => p.theme.lineHeights.s};
  }
`;

export const LabelBtn = styled.label`
  display: flex;
  flex-direction: column;
  font-family: 'Inter';
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: ${p => p.theme.lineHeights.m};
  color: ${p => p.theme.colors.black2};
  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.s};
    line-height: ${p => p.theme.lineHeights.xl};
  }
`;

export const DatePick = styled(DatePicker)<ICellBirhtDayProps>`
  width: 299px;
  height: 42px;
  padding-left: 18px;
  margin-top: 8px;
  border: ${p =>
    (!p.birthDay && '1px solid rgba(17, 17, 17, 0.15)') ||
    (p.birthDay && p.selected === null && '1px solid red') ||
    (p.birthDay && p.selected !== null && '1px solid green')};
  border-radius: 8px;
  background-color: ${p => p.theme.colors.white};
  font-family: 'Inter';
  font-weight: ${p => p.theme.fontWeights.semiBold};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.xl};
  color: ${p => p.theme.colors.black5};
  @media screen and (min-width: 768px) {
    width: 354px;
    height: 46px;
    font-size: ${p => p.theme.fontSizes.m};
  }
`;

export const SubmitButton = styled.button`
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  padding: 0;
  width: 195px;
  height: 46px;
  border-radius: 16px;
  border: none;
  cursor: pointer;
  font-family: 'Inter';
  font-weight: ${p => p.theme.fontWeights.semiBold};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.xl};
  background-color: ${p => p.theme.colors.blue};
  color: ${p => p.theme.colors.white};
  &:disabled {
    background-color: rgba(62, 133, 243, 0.5);
  }
  &:disabled:hover {
    background-color: rgba(62, 133, 243, 0.5);
    color: ${p => p.theme.colors.white};
    cursor: not-allowed;
  }
  &:disabled:focus {
    background-color: rgba(62, 133, 243, 0.5);
    color: ${p => p.theme.colors.white};
  }
  :hover,
  :focus {
    background: gold;
    color: ${p => p.theme.colors.blue};
  }
  @media screen and (min-width: 768px) {
    width: 262px;
    height: 48px;
    margin-top: 40px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 88px;
  }
`;

export const Notifications = styled.span`
  position: absolute;
  font-size: 12px;
  left: 20px;
  bottom: -35%;
`;


