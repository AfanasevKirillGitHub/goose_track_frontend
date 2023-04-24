import styled from 'styled-components';

export const ButtonOpen = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    padding: 0;
    margin-left: auto;

    color: #343434;
    background-color: rgba(0, 0, 0, 0);
    border: ${props => props.theme.borders.none};
    cursor: pointer;
    transition: color 0.25s ease-in-out, transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

    svg {
        width: 24px;
        height: 24px;
    }

    :hover,
    :focus {
        color: #3e85f3;
        transform: scale(1.3);
    }

    @media screen and (min-width: 768px) and (max-width: 1439px) {
        width: 32px;
        height: 32px;

        svg {
            width: 32px;
            height: 32px;
        }
    }

    @media screen and (min-width: 1440px) {
        display: none;
    }
`;