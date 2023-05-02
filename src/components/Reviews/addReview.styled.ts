import styled from 'styled-components';

interface ILabel {
  design?: boolean;
}

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.label<ILabel>`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: ${props => (props.design ? '14px' : props.theme.fontSizes.l)};
  line-height: ${props => props.theme.lineHeights.xl};
  font-weight: ${props => props.theme.fontWeights.semiBold};
  color: ${p => p.theme.colors.grey};
`;

export const Textarea = styled.textarea`
  resize: none;
  outline: none;
  width: 100%;
  padding: 12px 16px;
  border-radius: ${p => p.theme.radii.medium};
  margin-bottom: 20px;
  margin-top: 10px;
  background-color: ${p => p.theme.colors.modalBackground};
  color: ${props => props.theme.colors.black};
  :focus {
    outline: none;
    border-color: ${p => p.theme.colors.blue};
  }
`;

// export const Rating = styled.input`
//    outline: none;
//    margin-bottom:20px;
//    margin-top:10px;
//    padding: 4px 6px;
//    text-align:center;
//    border-radius: ${p => p.theme.radii.medium};
//    font-size: ${props => (props.design ? '14px' : props.theme.fontSizes.s)};
//    font-weight: ${props => props.theme.fontWeights.semiBold};
//    :focus {
//         outline: none;
//         border-color:${p => p.theme.colors.blue};
//    }
// `

export const Button = styled.button<ILabel>`
  &:disabled {
    background-color: ${p => p.theme.colors.disabledButton};
  }
  &:disabled:hover {
    background-color: ${p => p.theme.colors.disabledButton};
    color: ${p => p.theme.colors.white};
    cursor: not-allowed;
  }
  &:disabled:focus {
    background-color: ${p => p.theme.colors.disabledButton};
    color: ${p => p.theme.colors.white};
  }
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 10px;
  border-radius: ${props => props.theme.radii.medium};
  border: ${props => props.theme.borders.none};
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.blue};
  cursor: pointer;
  font-size: ${props => (props.design ? '14px' : props.theme.fontSizes.l)};
  line-height: ${props => props.theme.lineHeights.xl};
  font-weight: ${props => props.theme.fontWeights.semiBold};
  transition: background-color 0.25s ease-in-out, color 0.25s ease-in-out,
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    color: ${p => p.theme.colors.blue};
    background-color: ${p => p.theme.colors.hoverBackground};
    /* transform: scale(1.02); */
  }

  @media screen and (min-width: 768px) {
    width: ${props => (props.design ? '150' : '170')}px;
    height: ${props => (props.design ? '37' : '46')}px;
  }
`;
