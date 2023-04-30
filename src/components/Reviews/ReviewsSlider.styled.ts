import styled from 'styled-components';
import Slider from 'react-slick';
// import ReactStars from 'react-stars';

export const ContainerReviews = styled.div`
    width: 100%;
    height: 100%;
    margin-left: auto;
    margin-right: auto;

    @media screen and (min-width: 375px) {
        width: 335px;
        padding-bottom: 138px;
    }

    @media screen and (min-width: 768px) {
        width: 580px;
        padding-bottom: 170px;
    }

    @media screen and (min-width: 1440px) {
        width: 1184px;
        padding-bottom: 188px;
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
    height: 216px;

    @media screen and (min-width: 768px) {
        padding: 32px;
        height: 196px;
    }
`;

export const ReviewerAvatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    `;

export const WrapperUser = styled.div`
    display: flex;
    margin-bottom: 24px;

    @media screen and (min-width: 768px) {
        margin-bottom: 24px;
    }
`;

export const GradeReview = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin-left: 18px;
`;

export const ReviewerName = styled.h3`
    font-family: ${props => props.theme.fontFamily.main};
    font-style: normal;
    font-weight: ${props => props.theme.fontWeights.bold};
    font-size: ${props => props.theme.fontSizes.l};
    line-height: ${props => props.theme.lineHeights.xxs};
    color: ${p => p.theme.colors.black5};
`;

// export const StarsGrade = styled(ReactStars)`
//     display: flex;
//     justify-content: space-between;
//     width: 110px;
// `;

export const TextReview = styled.p`
    font-family: ${props => props.theme.fontFamily.main};
    font-style: normal;
    font-weight: ${props => props.theme.fontWeights.medium};
    font-size: ${props => props.theme.fontSizes.s};
    line-height: ${props => props.theme.lineHeights.xl};
    color: ${p => p.theme.colors.black6};

    @media screen and (min-width: 768px) {
        margin-left: 68px;
    };
`;

export const NewSlider = styled(Slider)`
    & .slick-arrow {
        top: 120%;
        width: 60px;
        height: 60px;
    };

    & .slick-arrow:hover {
        scale: 1.02;
        color: ${p => p.theme.colors.hoverBackground};
    };

    & .slick-arrow.slick-prev{
        left: 100px;

        @media screen and (min-width: 768px) {
            left: 222px;
        };

        @media screen and (min-width: 1440px) {
            left: 500px;
        };
    };

    & .slick-arrow.slick-next{
        right: 100px;

        @media screen and (min-width: 768px) {
            right: 222px;
        };

        @media screen and (min-width: 1440px) {
            right: 500px;
        };
    };

    & .slick-arrow.slick-prev,
    & .slick-arrow.slick-next{
        &:hover, &:focus {
            &:before {
                color: ${p => p.theme.colors.hoverBackground};
                scale: 2.04;
            };
        };
    };

    & .slick-arrow.slick-prev:before,
    & .slick-arrow.slick-next:before{
        display: inline-block;
        color: ${p => p.theme.colors.blue};
        scale: 2;
        /* content: '';
        border: 2px dashed #2a2a2a;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center; */
    };

    /* & .slick-arrow.slick-prev:before{
        content: url('../../images/icons/slick-arrow-prev.svg');
        background-image: url('../../images/icons/slick-arrow-prev.svg');
    }; */

    /* & .slick-arrow.slick-next:before{
        content: url('../../images/icons/slick-arrow-next.svg');
        background-image: url('../../images/icons/slick-arrow-next.svg');
    }; */

    @media screen and (min-width: 1440px) {
        & .slick-slide {
            padding: 0px 12px;
        };
    };
`;
