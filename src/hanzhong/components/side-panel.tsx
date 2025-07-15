import { Link } from 'react-router';
import { HANZHONG_ROUTES } from '../constants';

export const HanzhongSidePanel = () => {
  return (
    <ul>
      <li>
        <Link to={HANZHONG_ROUTES.TECHS}>Techs</Link>
      </li>
      <li>
        <Link to={HANZHONG_ROUTES.TERRITORIES}>Territories</Link>
      </li>
      <li>
        <Link to={HANZHONG_ROUTES.CITIES}>Siege Progress</Link>
      </li>
    </ul>
  );
};
