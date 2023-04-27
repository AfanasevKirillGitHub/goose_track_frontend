import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-left: 0;
  padding-right: 0;
  background-color: ${props => props.theme.colors.white2};

  @media screen and (min-width: 1440px) {
    height: 100vh;
    display: grid;
    grid-template-columns: 289px 1fr;
  }
`;
