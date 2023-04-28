import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useFetchReviewsQuery } from '../../redux/review/reviewOperations';
import * as SC from './ReviewsSlider.styled';

export const GetReviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  const { data } = useFetchReviewsQuery();

  return (
    <SC.ReviewsContainer>
      <SC.ReviewsTitle> Reviews </SC.ReviewsTitle>
      <Slider {...settings}>
        {data?.rewiew.map(item => {
          return (
            <SC.ReviewWrapper key={item.name}>
              <SC.ReviewerName>{item.name}</SC.ReviewerName>
              <SC.ReviewerAvatar src={item.imgUrl} alt="avatar" />
              <p>grade: {item.stars}</p>
              <p>rewiew: {item.reviewText}</p>
            </SC.ReviewWrapper>
          );
        })}
      </Slider>
    </SC.ReviewsContainer>
  );
};
