import styled from 'styled-components';

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  background-color: ${p => p.theme.colors.backdropBackground};
  overflow-y: auto;
`;

export const Inner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  min-width: 360px;
  max-width: 1200px;
  max-height: 90%;
  padding: 40px 28px;
  border-radius: ${props => props.theme.radii.normal};
  background-color: ${p => p.theme.colors.modalBackground};
  box-shadow: ${props => props.theme.shadows.modal};
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 12px;
  right: 8px;
  background-color: transparent;
  color: ${p => p.theme.colors.black};
  border: none;
  outline: none;
  cursor: pointer;
  transition: color 0.25s ease-in-out,
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    color: ${p => p.theme.colors.blue};
    transform: scale(1.1);
  }
`;
