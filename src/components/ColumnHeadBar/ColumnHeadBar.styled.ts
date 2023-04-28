import styled from 'styled-components';

export const Header = styled.p`
  margin: 7px 0px 28px 0px;
  font-size: ${props => props.theme.fontSizes.xl};
  line-height: ${props => props.theme.lineHeights.m};
  font-family: ${props => props.theme.fontFamily.main};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.columnHeader};
  &:first-letter {
    text-transform: uppercase;
  }
`;
