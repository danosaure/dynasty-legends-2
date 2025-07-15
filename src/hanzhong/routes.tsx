import { Navigate, Route } from 'react-router';

import { HanzhongLayout } from '../hanzhong/components/layout';
import { HanzhongWarTiersTechs } from './components/HanzhongWarTiersTechs';
import { Hanzhong404 } from './components/404';
import { HanzhongTerritories } from './components/Territories';
import { HANZHONG_ROUTES } from './constants';
import { HanzhongCities } from './components/cities';
import { HanzhongWarTiers } from './components/war-tiers';
import { HanzhongBandits } from './components/bandits';

export const HanzhongRoutes = (
  <Route Component={HanzhongLayout}>
    <Route index element={<Navigate to={HANZHONG_ROUTES.TECHS} />} />
    <Route path={HANZHONG_ROUTES.BANDITS} Component={HanzhongBandits} />
    <Route path={HANZHONG_ROUTES.CITIES} Component={HanzhongCities} />
    <Route path={HANZHONG_ROUTES.TECHS} Component={HanzhongWarTiersTechs} />
    <Route path={HANZHONG_ROUTES.TERRITORIES} Component={HanzhongTerritories} />
    <Route path={HANZHONG_ROUTES.WAR_TIERS} Component={HanzhongWarTiers} />
    <Route path="*" Component={Hanzhong404} />
  </Route>
);
