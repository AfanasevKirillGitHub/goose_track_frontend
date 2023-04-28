import styled from 'styled-components';

export const ReviewsContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 0px 20px 64px 20px;

    @media screen and (min-width: 768px) {
        padding: 0px 94px 100px 94px;
    }

    @media screen and (min-width: 1440px) {
        padding: 30px 128px 118px 128px;
    }
`;

export const ReviewsTitle = styled.h2`
    text-align: center;
    text-transform: uppercase;
    color: ${p => p.theme.colors.blue};
    font-family: ${props => props.theme.fontFamily.main};
    font-weight: ${props => props.theme.fontWeights.bold};
    font-size: ${props => props.theme.fontSizes.xxl};
    line-height: ${props => props.theme.lineHeights.s};
    margin-bottom: 40px;

    @media screen and (min-width: 768px) {
        font-size: ${props => props.theme.fontSizes.bxxl};
        line-height: ${props => props.theme.lineHeights.xs};
        margin-bottom: ${props => props.theme.space[6]}px;
    }
`;

export const ReviewWrapper = styled.div`
    width: 100%;
    height: 100%;
    border: ${props => props.theme.borders.review};
    border-radius: ${props => props.theme.radii.normal};

    @media screen and (min-width: 768px) {
        padding: 0px 94px 100px 94px;
    }

    @media screen and (min-width: 1440px) {
        width: 580px;
        height: 187px;
        padding: 30px 128px 118px 128px;
    }
`;

export const ReviewerName = styled.h3`
    margin-bottom: 24px;
    font-style: normal;
    font-weight: ${props => props.theme.fontWeights.semiBold};
    font-size: ${props => props.theme.fontSizes.xs};
    line-height: ${props => props.theme.lineHeights.m};
    color: #7e7d82;

    @media screen and (min-width: 768px) {
        margin-bottom: ${props => props.theme.space[5]}px;
        font-size: ${props => props.theme.fontSizes.s};
    }
`;

export const ReviewerAvatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;

    @media screen and (min-width: 768px) {
        /* width: 60px;
        height: 60px; */
    }

    @media screen and (min-width: 1440px) {
        /* width: 72px;
        height: 72px; */
    }
`;