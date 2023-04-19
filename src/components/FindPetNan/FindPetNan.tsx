import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { findPetNan, privateNav } from '../../helpers/pages';
import { useAuth } from '../../hooks/useAuth';

export const FindPetNan = () => {
  const { isLoggedIn } = useAuth();
  const { t } = useTranslation();
  return (
    <nav>
      <ul>
        {findPetNan.map(({ id, href, name }) => (
          <li key={id}>
            <Link to={href}> {t(`find-pet-nav.${name}`)} </Link>
          </li>
        ))}
        {isLoggedIn &&
          privateNav.map(({ id, href, name }) => (
            <li key={id}>
              <Link to={href}> {t(`find-pet-nav.${name}`)} </Link>
            </li>
          ))}
      </ul>
    </nav>
  );
};
