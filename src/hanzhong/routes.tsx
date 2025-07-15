import { Route } from 'react-router';

import { HanzhongLayout } from '../hanzhong/components/layout';
import { HanzhongWarTiersTechs } from './components/HanzhongWarTiersTechs';
import { Hanzhong404 } from './components/404';
import { HanzhongTerritories } from './components/Territories';
import { HANZHONG_ROUTES } from './constants';
import { HanzhongCities } from './components/cities';

export const HanzhongRoutes = (
  <Route Component={HanzhongLayout}>
    <Route index Component={HanzhongWarTiersTechs} />
    <Route path={HANZHONG_ROUTES.TECHS} Component={HanzhongWarTiersTechs} />
    <Route path={HANZHONG_ROUTES.TERRITORIES} Component={HanzhongTerritories} />
    <Route path={HANZHONG_ROUTES.CITIES} Component={HanzhongCities} />
    <Route path="*" Component={Hanzhong404} />
  </Route>
);
