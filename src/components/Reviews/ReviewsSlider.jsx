import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useFetchReviewsQuery } from '../../redux/review/reviewOperations';
import { IMG } from '../../images';
import { Stars } from './Stars/Stars';

import * as SC from './ReviewsSlider.styled';

export const GetReviews = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
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

  const { data } = useFetchReviewsQuery();

  // const useSlideButtons = () => {
  //   const SlideBtnPrev = document.querySelector('.slick-prev');
  //   const SlideBtnNext = document.querySelector('.slick-next');

  //   SlideBtnPrev.style.backgroundColor = "teal";
  //   SlideBtnNext.style.backgroundColor = "teal";
  // }

  // useSlideButtons();
  console.log(data);
  return (
    <SC.ContainerReviews>
      <SC.TitleReviews> Reviews </SC.TitleReviews>

      <Slider {...settings}>
        {data?.rewiew.map(item => {
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
      </Slider>
    </SC.ContainerReviews>
  );
};
