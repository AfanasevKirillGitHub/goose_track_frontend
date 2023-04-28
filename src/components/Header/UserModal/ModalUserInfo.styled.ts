import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: transparent;
  overflow-y: auto;
`;

export const ModalUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  width: 197px;
  height: 189px;
  background: ${p => p.theme.colors.modalBackground};
  box-shadow: 0px 4px 16px rgba(17, 17, 17, 0.1);
  border-radius: 8px;
  top: 60px;
  right: 35px;

  padding: 14px 0;

  @media (min-width: 375px) {
    top: 60px;
    right: 20px;
  }

  @media (min-width: 768px) {
    top: 75px;
    right: 30px;
  }

  @media (min-width: 1440px) {
    top: 90px;
  }
`;

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: baseline;
  padding: 10px 0;
  text-decoration: none;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  border: ${p => p.theme.borders.modalLink};
  color: ${p => p.theme.colors.grey3};
  /* border-radius: ${props => props.theme.radii.normal}; */
  transition: background-color 0.25s ease-in-out, color 0.25s ease-in-out,
    border-color 0.25s ease-in-out, transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  svg {
    margin-left: 20px;
    margin-right: ${props => props.theme.space[3]}px;
  }

  :hover,
  :focus-visible {
    background: gold;
    color: ${p => p.theme.colors.blue};
  }

  @media screen and (min-width: 768px) {
    padding: 10px 0;

    font-size: ${props => props.theme.fontSizes.m};
  }
`;
