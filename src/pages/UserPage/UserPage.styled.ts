import styled from 'styled-components';

export const FullPageWrapper = styled.div`
  background-color: ${props => props.theme.colors.white};

  @media screen and (max-width: 1439px) {
    background-color: ${props => props.theme.colors.mainBackground};
  }
`;

export const Wrapper = styled.div`
  padding-left: 0;
  padding-right: 0;
  background-color: ${props => props.theme.colors.taskCardBackground};
  min-height: 100vh;

  @media screen and (min-width: 1440px) {
    display: grid;
    grid-template-columns: 289px 1fr;
  }
`;
