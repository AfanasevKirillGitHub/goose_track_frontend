import Popup from 'reactjs-popup';
import styled from 'styled-components';

export const TaskToolbarBtn = styled.button`
  display: flex;
  align-items: end;
  justify-content: center;
  padding: 0;
  margin: 0;

  border: none;
  outline: none;
  background-color: transparent;

  cursor: pointer;

  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  color: ${p => p.theme.colors.black};

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.blue};
  }

  &:disabled {
    cursor: default;
  }
`;

export const PopupContainer = styled(Popup)`
  &-content {
  }
`;

export const PopupContent = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 14px;

  padding-top: 12px;
  padding-bottom: 14px;
  padding-left: 14px;
  padding-right: 14px;

  @media screen and (min-width: 768px) {
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 24px;
    padding-right: 24px;
  }
`;

export const PopupItem = styled.li`
  list-style: none;
  width: 100%;
`;

export const PopupButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  margin: 0;
  gap: ${p => p.theme.space[3]}px;

  border: none;
  outline: none;
  background-color: transparent;

  font-style: ${p => p.theme.fontFamily.main};
  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: ${p => p.theme.lineHeights.m};

  color: ${p => p.theme.colors.popup};

  cursor: pointer;

  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover &:not(:disabled) {
    color: ${p => p.theme.colors.blue};
  }

  &:disabled {
    cursor: default;
    color: ${p => p.theme.colors.grey4};
  }

  @media screen and (min-width: 768px) {
    font-style: ${p => p.theme.fontFamily.main};
    font-size: ${p => p.theme.fontSizes.s};
    font-weight: ${p => p.theme.fontWeights.medium};
    line-height: ${p => p.theme.lineHeights.l};
  }
`;
