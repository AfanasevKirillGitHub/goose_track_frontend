import * as SC from './HomePage.styled';
import goose from '../../images/goose.png';
import { MdLogin } from 'react-icons/md';

export const HomePageHeader = () => {
  return (
    <SC.Header>
      <SC.LogoImg src={goose} alt="logo goose"/>
      <SC.Title> Goose Track </SC.Title>
      <SC.ButtonList>
        <SC.ButtonReg to="/registration">Sign up</SC.ButtonReg>
        <SC.ButtonLogin to="/login">Login <MdLogin/></SC.ButtonLogin>
      </SC.ButtonList>
    </SC.Header>
  );
};
