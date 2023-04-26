import { ReactComponent as ArrowCircle } from './icons/arrow-circle.svg';
import { ReactComponent as Calendar } from './icons/calendar-check.svg';
import { ReactComponent as Chevron } from './icons/chevron.svg';
import { ReactComponent as CloseIcon } from './icons/close.svg';
import { ReactComponent as Delete } from './icons/delete.svg';
import { ReactComponent as Ellipse } from './icons/ellipse.svg';
import { ReactComponent as LogInIcon } from './icons/log-in.svg';
import { ReactComponent as LogOutIcon } from './icons/log-out.svg';
import { ReactComponent as BurgerMenu } from './icons/menu.svg';
import { ReactComponent as MoonIcon } from './icons/moon.svg';
import { ReactComponent as EditIcon } from './icons/pencil.svg';
import { ReactComponent as AddIcon } from './icons/plus.svg';
import { ReactComponent as AddCircleIcon } from './icons/plus-circle.svg';
import { ReactComponent as SunIcon } from './icons/sun.svg';
import { ReactComponent as UserCheck } from './icons/user-check.svg';
import { ReactComponent as UserAvatar } from './icons/user.svg';
import { ReactComponent as GoogleIcon } from './icons/google.svg';
import { ReactComponent as EyeIcon } from './icons/eye.svg';
import { ReactComponent as EyeClosedIcon } from './icons/eye-slash.svg';
import { ReactComponent as RadioButton } from './icons/rb.svg';
import { ReactComponent as RadioButtonActive } from './icons/rb-active.svg';
import { ReactComponent as NotFoundIcon } from './icons/sad_goose_404.svg';

import homePage1 from './homePage/homePage1.png';
import homePage2 from './homePage/homePage2.png';
import homePage3 from './homePage/homePage3.png';
import homePageM1 from './homePage/homePageM1.png';
import homePageM2 from './homePage/homePageM2.png';
import homePageM3 from './homePage/homePageM3.png';
import homePageD1 from './homePage/homePageD1.png';
import homePageD2 from './homePage/homePageD2.png';
import homePageD3 from './homePage/homePageD3.png';
import team from './homePage/team-desc.png';
import teamD from './homePage/team-tab.png';
import teamM from './homePage/team-mob.png';

interface IIcons {
  [key: string]: React.FC;
}

interface IImg {
  [key: string]: string;
}

export const SVG: IIcons = {
  ArrowCircle,
  Calendar,
  Chevron,
  CloseIcon,
  Delete,
  Ellipse,
  LogInIcon,
  LogOutIcon,
  BurgerMenu,
  MoonIcon,
  EditIcon,
  AddIcon,
  AddCircleIcon,
  SunIcon,
  UserCheck,
  UserAvatar,
  GoogleIcon,
  EyeIcon,
  EyeClosedIcon,
  RadioButton,
  RadioButtonActive,
  NotFoundIcon,
};

export const IMG: IImg = {
  homePage1,
  homePage2,
  homePage3,
  homePageM1,
  homePageM2,
  homePageM3,
  homePageD1,
  homePageD2,
  homePageD3,
  team,
  teamD,
  teamM,
};
