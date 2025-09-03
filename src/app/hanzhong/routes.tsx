import { Navigate, Route } from 'react-router';

import { Hanzhong404 } from './404';
import { HanzhongBandits } from './bandits';
import { HanzhongCities } from './cities';
import { HanzhongFormations } from './formations';
import { HanzhongTechs } from './techs';
import { HanzhongLayout } from './layout';
import { HanzhongTerritories } from './territories';
import { HANZHONG_ROUTES } from './constants';
import { HanzhongWarTiersLayout } from './war-tiers';

export const HanzhongRoutes = (
  <Route Component={HanzhongLayout}>
    <Route index element={<Navigate to={HANZHONG_ROUTES.TECHS} />} />
    <Route path={HANZHONG_ROUTES.BANDITS} Component={HanzhongBandits} />
    <Route path={HANZHONG_ROUTES.CITIES} Component={HanzhongCities} />
    <Route path={HANZHONG_ROUTES.FORMATIONS} Component={HanzhongFormations} />
    <Route path={HANZHONG_ROUTES.TECHS} Component={HanzhongTechs} />
    <Route path={HANZHONG_ROUTES.TERRITORIES} Component={HanzhongTerritories} />
    <Route path={HANZHONG_ROUTES.WAR_TIERS} Component={HanzhongWarTiersLayout} />
    <Route path="*" Component={Hanzhong404} />
  </Route>
);
