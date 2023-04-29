import { SVG } from '../../../images';

export const Stars = ({ countOfStars }) => {
    let countOfGreyStars = 5 - countOfStars;

    return(
        <>
            {Array(countOfStars).fill(0)
                .map((item, index) =>
                    (<SVG.GradeStarGold key={index} />)
                )
            }
            {Array(countOfGreyStars).fill(0)
                .map((item, index) =>
                    (<SVG.GradeStarGrey key={index} />)
                )
            }
        </>
    )
};