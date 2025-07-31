import { Route } from 'react-router';

import { HanzhongRoutes } from './hanzhong/routes';
import { App404 } from './404';
import { AppLayout } from './layout';
import { AppMain } from './main';
import { OfficersRoutes } from './officers';
import { DOMAIN_KEYS } from './constants';

export const MainRoutes = (
  <Route Component={AppLayout}>
    <Route index Component={AppMain} />
    <Route path={DOMAIN_KEYS.HANZHONG}>{HanzhongRoutes}</Route>
    <Route path={DOMAIN_KEYS.OFFICERS}>{OfficersRoutes}</Route>
    <Route path="*" Component={App404} />
  </Route>
);
