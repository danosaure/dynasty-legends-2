import { Route } from 'react-router';

import { MainLayout } from './components/layout';
import { AppMain } from './components/main';
import { HanzhongRoutes } from '../hanzhong/routes';
import { App404 } from './components/404';

export const MainRoutes = (
  <Route Component={MainLayout}>
    <Route index Component={AppMain} />
    <Route path="hanzhong">{HanzhongRoutes}</Route>
    <Route path="*" Component={App404} />
  </Route>
);
