import { SVG } from '../../../images';
import * as SC from './Stars.styled';

interface IProps {
  countOfStars: number;
}

export const Stars = ({ countOfStars }: IProps) => {
  let countOfGreyStars = 5 - countOfStars;

  return (
    <SC.StarsDiv>
      {Array(countOfStars)
        .fill(0)
        .map((item, index) => (
          <SVG.GradeStarGold key={index} />
        ))}
      {Array(countOfGreyStars)
        .fill(0)
        .map((item, index) => (
          <SVG.GradeStarGrey key={index} />
        ))}
    </SC.StarsDiv>
  );
};
