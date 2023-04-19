import styled from 'styled-components';

export const Main = styled.main`
    display: flex;
    justify-content: center;

    @media (min-width: 768px) {
        padding-top: 200px;
        // background-image: url("../../helpers/photos/loginTab.png")
    }
    @media (min-width: 1280px) {
        padding-top: 80px;
    };
}

`