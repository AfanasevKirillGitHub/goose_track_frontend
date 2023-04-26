import * as SC from './NotFoundPage.styled'
import { SVG } from "../../images";

export const NotFoundPage = () => {
  return (
    //   <SVG.NotFoundIcon width="240" height="240" />
      <SC.NotFoundPage>
          <SC.Wrapper>
      <SVG.NotFoundIcon/>
          </SC.Wrapper>
          <SC.Text>Try starting from the home page</SC.Text>
          <SC.Button type='button' to={'/'}>To home page</SC.Button>
      </SC.NotFoundPage>
  );
}