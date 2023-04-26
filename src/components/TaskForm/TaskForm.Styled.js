import styled from 'styled-components';

export const Form = styled.form`
  width: 303px;
  padding-top: 48px;

  font-family: ${p => p.theme.fontFamily.main};
`;

export const Field = styled.span`
  display: block;
  width: 100%;
`;

export const Label = styled.span`
  display: block;
  margin-bottom: ${p => p.theme.space[3]}px;
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
    return p.type === 'time' ? p.theme.space[0] : p.theme.space[3];
  }}px;

  font-family: ${p => p.theme.fontFamily.main};
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.semiBold};
  line-height: ${props => props.theme.lineHeights.xl};

  color: ${p => p.theme.colors.grey};
  background-color: ${p => p.theme.colors.grey8};

  border: none;
  border-radius: ${props => props.theme.radii.normal};

  &:focus {
    outline: none;
  }

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
`;

export const Time = styled.div`
  display: flex;
  gap: 15px;

  width: 100%;

  margin-bottom: 18px;
`;

export const PriorityList = styled.ul`
  display: flex;
  gap: 15px;

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
`;
export const CustomRadioButton = styled.span`
  display: inline-block;
  width: 12px;
  height: 12px;
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

  border-radius: ${p => p.theme.radii.round};
`;

export const PriorityLabel = styled.label`
  display: flex;
  gap: 6px;

  font-family: ${p => p.theme.fontFamily.main};
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.semiBold};
  line-height: ${p => p.theme.lineHeights.s};
  text-transform: capitalize;

  color: ${p => p.theme.colors.grey};
`;

export const Buttons = styled.div`
  display: flex;
  gap: 14px;
  width: 100%;
`;
