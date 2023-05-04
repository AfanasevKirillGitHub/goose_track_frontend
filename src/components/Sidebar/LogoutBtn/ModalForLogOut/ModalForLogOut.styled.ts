import styled from 'styled-components';

export const CloseBtn = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: transparent;
  color: ${p => p.theme.colors.navBcg};
  border: none;
  outline: none;
  cursor: pointer;
  transition: color 0.25s ease-in-out,
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    color: ${p => p.theme.colors.blue};
    transform: scale(1.3);
  }
`;

export const ModalTitle = styled.h3`
  text-align: center;
  margin-bottom: 24px;
  font-family: 'Inter';
  font-weight: ${props => props.theme.fontWeights.semiBold};
  font-size: ${props => props.theme.fontSizes.m};
  line-height: ${props => props.theme.lineHeights.m};
  color: ${p => p.theme.colors.grey3};

  @media screen and (min-width: 768px) {
    margin-bottom: ${props => props.theme.space[5]}px;
  }
`;

export const ModalList = styled.div`
  display: flex;
  justify-content: space-evenly;
  list-style: none;
`;

export const ItemBtn = styled.button`
  width: ${props => props.theme.space[8]}px;
  height: ${props => props.theme.space[6]}px;
  padding: ${props => props.theme.space[0]}px;
  border-radius: ${props => props.theme.radii.normal};
  border: ${props => props.theme.borders.none};
  color: ${p => p.theme.colors.white3};
  background-color: ${p => p.theme.colors.blue};
  cursor: pointer;
  font-size: ${props => props.theme.fontSizes.m};
  line-height: ${props => props.theme.lineHeights.xl};
  font-weight: ${props => props.theme.fontWeights.semiBold};
  transition: background-color 0.25s ease-in-out, color 0.25s ease-in-out,
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    color: ${p => p.theme.colors.blue};
    background-color: ${p => p.theme.colors.hoverBackground};
  }
`;

export const SecondaryItemBtn = styled(ItemBtn)`
  background-color: ${p => p.theme.colors.grey2};
  color: ${p => p.theme.colors.black4};
`;
