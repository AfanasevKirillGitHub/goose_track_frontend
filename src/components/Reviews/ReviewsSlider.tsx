import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTranslation } from 'react-i18next';
import { useFetchReviewsQuery } from '../../redux/review/reviewOperations';
import { IMG } from '../../images';
import { Stars } from './Stars/Stars';
import * as SC from './ReviewsSlider.styled';
import { Key, ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react';

export const GetReviews = () => {
  const { t } = useTranslation();

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
    // appendArrows: <div id="btnSliderDiv">Prev</div>,
    // prevArrow: <button type='button' id="btnSliderPrev">Prev</button>,
    // nextArrow: <button type='button' id="btnSliderNext">Next</button>,
    adaptiveHeight: true,

    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          adaptiveHeight: true,
        },
      },
    ],
  };

  const { data } = useFetchReviewsQuery(null);

  return (
    <SC.ContainerReviews>
      <SC.TitleReviews> {t(`Reviews`)} </SC.TitleReviews>

      <SC.NewSlider {...settings}>
        {data?.map((item: { _id: Key | null | undefined; imgUrl: string | null | undefined; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; stars: number; reviewText: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) => {
          return (
            <SC.WrapperReview key={item._id}>
              <SC.WrapperUser>
                {item.imgUrl === 'null' || item.imgUrl === null ? (
                  <SC.ReviewerAvatar src={IMG.DefaultAvatar} alt="Avatar" />
                ) : (
                  <SC.ReviewerAvatar src={item.imgUrl} alt="Avatar" />
                )}
                <SC.GradeReview>
                  <SC.ReviewerName>{item.name}</SC.ReviewerName>
                  <Stars countOfStars={item.stars} />
                </SC.GradeReview>
              </SC.WrapperUser>
              <SC.TextReview>{item.reviewText}</SC.TextReview>
            </SC.WrapperReview>

            // <SC.WrapperReview key={item._id}>
            //   <SC.WrapperUser>
            //     {item.imgUrl !== "null" ?
            //       <SC.ReviewerAvatar src={item.imgUrl} alt="Avatar" /> :
            //       <SC.ReviewerAvatar src={IMG.DefaultAvatar} alt="Avatar" />
            //     }
            //     <SC.GradeReview>
            //       <SC.ReviewerName>{item.name}</SC.ReviewerName>
            //       <SC.StarsGrade edit={false} value={item.stars} />
            //     </SC.GradeReview>
            //   </SC.WrapperUser>

            //   <SC.TextReview>{item.reviewText}</SC.TextReview>
            // </SC.WrapperReview>
          );
        })}
      </SC.NewSlider>
    </SC.ContainerReviews>
  );
};
