import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
`;
export const ModalUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: absolute;
  width: 197px;
  height: 203px;
  background: #ffffff;
  box-shadow: 0px 4px 16px rgba(17, 17, 17, 0.1);
  border-radius: 8px;
  top: 15px;
  right: 0;
  padding: 14px 0;
`;

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: baseline;
  padding: 10px 0 10px 16px;
  text-decoration: none;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;

  color: #84828a;
  border-radius: ${props => props.theme.radii.normal};
  transition: background-color 0.25s ease-in-out, color 0.25s ease-in-out,
    border-color 0.25s ease-in-out, transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  svg {
    margin-right: ${props => props.theme.space[3]}px;
  }

  :hover,
  :focus-visible {
    background: gold;
    color: #3e85f3;
  }

  @media screen and (min-width: 768px) {
    padding: 10px 0 10px 16px;

    font-size: ${props => props.theme.fontSizes.m};
  }
`;
