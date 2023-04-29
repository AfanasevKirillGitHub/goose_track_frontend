import styled from 'styled-components';

export const ContainerReviews = styled.div`
    width: 100%;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    /* padding: 0px 20px 64px 20px; */

    @media screen and (min-width: 375px) {
        width: 335px;
        padding: 0px 20px 64px 20px;
    }

    @media screen and (min-width: 768px) {
        width: 580px;
        padding: 0px 94px 100px 94px;
    }

    @media screen and (min-width: 1440px) {
        /* padding: 30px 128px 118px 128px; */
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

    @media screen and (min-width: 768px) {
        padding: 32px;
    }
`;

export const ReviewerName = styled.h3`
    font-family: ${props => props.theme.fontFamily.main};
    font-style: normal;
    font-weight: ${props => props.theme.fontWeights.bold};
    font-size: ${props => props.theme.fontSizes.l};
    line-height: ${props => props.theme.lineHeights.xxs};
    color: ${p => p.theme.colors.black5};
`;

export const ReviewerAvatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`;

export const GradeReview = styled.p`
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