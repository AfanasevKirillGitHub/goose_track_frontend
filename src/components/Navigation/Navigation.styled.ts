import styled from 'styled-components';

export const MainNav = styled.nav``;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
`;

export const NavListItem = styled.li`
  :not(:last-child) {
    margin-right: 80px;
  }
  :last-child {
    margin-left: auto;
  }
`;
