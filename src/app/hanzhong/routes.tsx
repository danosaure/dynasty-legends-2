import { Navigate, Route } from 'react-router';

import { Hanzhong404 } from './components/404';
import { HanzhongBandits } from './components/bandits';
import { HanzhongCities } from './components/cities';
import { HanzhongFormations } from './components/formations';
import { HanzhongWarTiersTechs } from './components/HanzhongWarTiersTechs';
import { HanzhongLayout } from '../hanzhong/components/layout';
import { HanzhongTerritories } from './components/Territories';
import { HanzhongWarTiers } from './components/war-tiers';
import { HANZHONG_ROUTES } from './constants';

export const HanzhongRoutes = (
  <Route Component={HanzhongLayout}>
    <Route index element={<Navigate to={HANZHONG_ROUTES.TECHS} />} />
    <Route path={HANZHONG_ROUTES.BANDITS} Component={HanzhongBandits} />
    <Route path={HANZHONG_ROUTES.CITIES} Component={HanzhongCities} />
    <Route path={HANZHONG_ROUTES.FORMATIONS} Component={HanzhongFormations} />
    <Route path={HANZHONG_ROUTES.TECHS} Component={HanzhongWarTiersTechs} />
    <Route path={HANZHONG_ROUTES.TERRITORIES} Component={HanzhongTerritories} />
    <Route path={HANZHONG_ROUTES.WAR_TIERS} Component={HanzhongWarTiers} />
    <Route path="*" Component={Hanzhong404} />
  </Route>
);
