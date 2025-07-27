import { Route } from 'react-router';

import { HanzhongRoutes } from './hanzhong/routes';
import { App404 } from './404';
import { AppLayout } from './layout';
import { AppMain } from './main';
import { OfficersRoutes } from './officers';

export const MainRoutes = (
  <Route Component={AppLayout}>
    <Route index Component={AppMain} />
    <Route path="hanzhong">{HanzhongRoutes}</Route>
    <Route path="officers">{OfficersRoutes}</Route>
    <Route path="*" Component={App404} />
  </Route>
);
