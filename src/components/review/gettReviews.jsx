import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useFetchReviewsQuery } from "../../redux/review/reviewOperations";

const rewiews = [
    {name: "Sergey",
    id: 1,
    grade: 5,
    rewiew: "goooooood"
    },
    {name: "Yehor",
    id: 2,
    grade: 5,
    rewiew: "not so goooooood"
    },
    {name: "Igor",
    id: 3,
    grade: 2,
    rewiew: "beeeeed"
    },
    {name: "Mikle",
    id: 4,
    grade: 5,
    rewiew: "not so beeeeeed"
    },

]

export const GetReviews = () =>  {
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
            dots: true
          }
        }
    ]
    }
    
    //  async function getAllReviews () {
    //     const {data} = await useFetchReviewsQuery();
    //     return data
    // }
    // const allReviews = getAllReviews()

    // console.log(allReviews)

    const {data} = useFetchReviewsQuery()
    console.log(data?.rewiew)


    return (
      <div>
        <h2> Reviews </h2>
        <Slider {...settings}>
            {data?.rewiew.map((item) => {
                return (
                    <div key={item.name}>
                        <p>name: {item.name}</p>
                        <img src={item.imgUrl} alt="avatar" />
                        <p>grade: {item.stars}</p>
                        <p>rewiew: {item.reviewText}</p>
                    </div>
                )
            })}
        </Slider>
      </div>
    );
  }