import styled from 'styled-components';

export const AddButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 52px;
  gap: 8px;
  margin-top: auto;

  font-family: ${p => p.theme.fontFamily.main};
  font-weight: ${p => p.theme.fontWeights.semiBold};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.xl};

  text-align: center;

  color: ${p => p.theme.colors.black2};

  background-color: ${p => p.theme.colors.blue3};
  border: ${p => p.theme.borders.addButton};
  border-radius: ${p => p.theme.radii.normal};

  cursor: pointer;
`;
