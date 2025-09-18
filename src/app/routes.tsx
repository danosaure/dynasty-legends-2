import { Route } from 'react-router';

import { HanzhongRoutes } from './hanzhong/routes';
import { App404 } from './404';
import { AppLayout } from './layout';
import { AppMain } from './main';
import { OfficersRoutes } from './officers';
import { UsersRoutes } from './users';
import { BanquetQuiz } from './banquet-quiz';
import { MountsLayout } from './profiles';

export const MainRoutes = (
  <Route Component={AppLayout}>
    <Route index Component={AppMain} />
    <Route path="hanzhong">{HanzhongRoutes}</Route>
    <Route path="officers">{OfficersRoutes}</Route>
    <Route path="users">{UsersRoutes}</Route>
    <Route path="banquet-quiz" Component={BanquetQuiz} />
    <Route path="mounts" Component={MountsLayout} />
    <Route path="*" Component={App404} />
  </Route>
);
