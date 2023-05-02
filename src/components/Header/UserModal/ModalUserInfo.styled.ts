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
  min-width: 197px;
  width: max-content;
  height: 189px;
  background: ${p => p.theme.colors.modalBackground};
  box-shadow: ${props => props.theme.shadows.modal};

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
  gap: 8px;
  padding: 10px 18px;
  text-decoration: none;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  border-top: ${p => p.theme.borders.modalLink};
  border-bottom: ${p => p.theme.borders.modalLink};
  color: ${p => p.theme.colors.grey3};
  transition: background-color 0.25s ease-in-out, color 0.25s ease-in-out,
    border-color 0.25s ease-in-out, transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus-visible {
    background: gold;
    color: ${p => p.theme.colors.blue};
  }

  @media screen and (min-width: 768px) {
    padding: 10px 18px;

    font-size: ${props => props.theme.fontSizes.m};
  }
`;
