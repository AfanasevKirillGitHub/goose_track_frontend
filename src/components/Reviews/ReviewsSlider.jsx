import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useFetchReviewsQuery } from '../../redux/review/reviewOperations';
import { IMG } from '../../images';
// import { Stars } from './Stars/Stars';
import * as SC from './ReviewsSlider.styled';

export const GetReviews = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    // autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    // arrows: true,
    adaptiveHeight: true,
    centerPadding: '60px',

    responsive: [
      {
        breakpoint: 1440,
        settings: {
          // dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          adaptiveHeight: true,
          centerPadding: '60px',
        },
      },
    ],
  };

  const { data } = useFetchReviewsQuery();

  console.log(data)
  return (
    <SC.ContainerReviews>
      <SC.TitleReviews> Reviews </SC.TitleReviews>
      <Slider {...settings}>
        {data?.rewiew.map(item => {
          return (
            <SC.WrapperReview>
              <SC.WrapperUser>
                {item.imgUrl !== "null" ?
                  <SC.ReviewerAvatar src={item.imgUrl} alt="Avatar" /> : <SC.ReviewerAvatar src={IMG.DefaultAvatar} alt="Avatar" />
                }
                <>
                  <SC.ReviewerName>{item.name}</SC.ReviewerName>
                  <SC.ReviewerGrade>grade: {item.stars}</SC.ReviewerGrade>
                  {/* <Stars countOfStars={item.stars} /> */}
                </>
              </SC.WrapperUser>
              <SC.TextReview>{item.reviewText}</SC.TextReview>
            </SC.WrapperReview>
          );
        })}
      </Slider>
    </SC.ContainerReviews>
  );
};
