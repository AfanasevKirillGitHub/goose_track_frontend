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
import { ReactComponent as NotFoundIcon } from './icons/sad_goose_404.svg';

interface IIcons {
  [key: string]: React.FC;
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
  NotFoundIcon
};
