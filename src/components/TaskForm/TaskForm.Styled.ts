import styled from 'styled-components';

interface ICustomRadioButton {
  name: string;
}

export const Form = styled.form`
  width: 303px;
  padding-top: 8px;

  font-family: ${p => p.theme.fontFamily.main};

  @media screen and (min-width: 768px) {
    width: 396px;
    padding-top: 0px;
  }
`;

export const Field = styled.span`
  display: block;
  width: 100%;
`;

export const Label = styled.span`
  display: block;
  margin-bottom: ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.black};
  font-size: ${p => p.theme.fontSizes.xs};
`;

export const Input = styled.input`
  display: block;
  width: 100%;

  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 14px;
  padding-right: 14px;

  margin-bottom: ${p => {
    return p.type === 'time' ? p.theme.space[0] : p.theme.space[4];
  }}px;

  @media screen and (min-width: 768px) {
    margin-bottom: ${p => {
      return p.type === 'time' ? p.theme.space[0] : 18;
    }}px;
  }

  font-family: ${p => p.theme.fontFamily.main};
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.semiBold};
  line-height: ${props => props.theme.lineHeights.xl};

  color: ${p => p.theme.colors.grey};
  background-color: ${p => p.theme.colors.grey8};
  outline: ${p => p.theme.borders.modalInput};

  border: none;
  border-radius: ${props => props.theme.radii.normal};

  &::placeholder {
    font-size: ${p => p.theme.fontSizes.s};
    font-weight: ${p => p.theme.fontWeights.semiBold};
    line-height: ${props => props.theme.lineHeights.xl};

    color: ${p => p.theme.colors.grey};
    background-color: ${p => p.theme.colors.grey8};
  }

  &::-webkit-calendar-picker-indicator {
    display: none;
  }

  &:disabled {
    color: ${p => p.theme.colors.disabled};
  }
`;

export const Time = styled.div`
  display: flex;
  gap: 15px;

  width: 100%;

  margin-bottom: 18px;

  @media screen and (min-width: 768px) {
    margin-bottom: 28px;
  }
`;

export const PriorityList = styled.ul`
  display: flex;
  gap: 15px;
  align-items: center;

  width: 100%;

  margin-bottom: ${p => p.theme.space[5]}px;
`;

export const PriorityItem = styled.li`
  list-style: none;
`;

export const RadioButton = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;

  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;

  &:disabled {
    color: ${p => p.theme.colors.disabled};
  }
`;

export const CustomRadioButton = styled.span<ICustomRadioButton>`
  display: flex;
  align-items: center;
  justify-content: start;

  color: ${p => {
    switch (p.name) {
      case 'low':
        return p.theme.colors.blue5;
      case 'medium':
        return p.theme.colors.yellow;
      case 'high':
        return p.theme.colors.pink;
      default:
        return p.theme.colors.grey4;
    }
  }};

  svg {
    width: 12px;
    height: 12px;
  }

  border-radius: ${p => p.theme.radii.round};
`;

export const PriorityLabel = styled.label`
  display: flex;
  gap: 6px;
  align-items: center;

  font-family: ${p => p.theme.fontFamily.main};
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.semiBold};
  line-height: ${p => p.theme.lineHeights.s};
  text-transform: capitalize;

  color: ${p => p.theme.colors.grey};

  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 14px;
  width: 100%;
`;
