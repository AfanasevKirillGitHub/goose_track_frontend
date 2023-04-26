import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100vh;

  @media screen and (min-width: 1440px) {
    display: grid;
    grid-template-columns: 289px 1fr;
  }
`;
