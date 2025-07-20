import { Route } from 'react-router';

import { HanzhongRoutes } from './hanzhong/routes';
import { App404 } from './404';
import { AppLayout } from './layout';
import { AppMain } from './main';

export const MainRoutes = (
  <Route Component={AppLayout}>
    <Route index Component={AppMain} />
    <Route path="hanzhong">{HanzhongRoutes}</Route>
    <Route path="*" Component={App404} />
  </Route>
);
