import styled from 'styled-components';

export const ContainerReviews = styled.div`
    width: 100%;
    height: 100%;
    margin-left: auto;
    margin-right: auto;

    @media screen and (min-width: 375px) {
        width: 335px;
        padding-bottom: 64px;
    }

    @media screen and (min-width: 768px) {
        width: 580px;
        padding-bottom: 100px;
    }

    @media screen and (min-width: 1440px) {
        width: 1184px;
        padding-bottom: 118px;
    }
`;

export const TitleReviews = styled.h2`
    text-align: center;
    text-transform: uppercase;
    font-family: ${props => props.theme.fontFamily.main};
    font-style: normal;
    font-weight: ${props => props.theme.fontWeights.bold};
    font-size: ${props => props.theme.fontSizes.xxl};
    line-height: ${props => props.theme.lineHeights.s};
    color: ${p => p.theme.colors.blue};
    margin-bottom: 40px;

    @media screen and (min-width: 768px) {
        font-size: ${props => props.theme.fontSizes.bxxl};
        line-height: ${props => props.theme.lineHeights.xs};
        margin-bottom: ${props => props.theme.space[6]}px;
    }
`;

export const WrapperReview = styled.div`
    border: ${props => props.theme.borders.review};
    border-radius: ${props => props.theme.radii.normal};
    padding: 24px;
    height: 194px;

    @media screen and (min-width: 768px) {
        padding: 32px;
        height: 187px;
    }
`;

export const ReviewerAvatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    `;

export const WrapperUser = styled.div`
    display: flex;
`;

export const ReviewerName = styled.h3`
    font-family: ${props => props.theme.fontFamily.main};
    font-style: normal;
    font-weight: ${props => props.theme.fontWeights.bold};
    font-size: ${props => props.theme.fontSizes.l};
    line-height: ${props => props.theme.lineHeights.xxs};
    color: ${p => p.theme.colors.black5};
`;

export const ReviewerGrade = styled.p`
    font-family: ${props => props.theme.fontFamily.main};
    font-style: normal;
    font-weight: ${props => props.theme.fontWeights.bold};
    font-size: ${props => props.theme.fontSizes.l};
    line-height: ${props => props.theme.lineHeights.xxs};
    color: ${p => p.theme.colors.black5};
`;

export const TextReview = styled.p`
    font-family: ${props => props.theme.fontFamily.main};
    font-style: normal;
    font-weight: ${props => props.theme.fontWeights.medium};
    font-size: ${props => props.theme.fontSizes.s};
    line-height: ${props => props.theme.lineHeights.xl};
    color: ${p => p.theme.colors.black6};
`;