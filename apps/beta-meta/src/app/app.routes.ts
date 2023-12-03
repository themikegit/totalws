import { Route } from '@angular/router';
import { CockpitPageComponent } from './pages/cockpit/cockpit-page.component';
import { UserPageComponent } from './pages/user/user-page.component';
import { SettingsPageComponent } from './pages/settings/settings-page.component';
import { ReportsPageComponent } from './pages/reports/reports-page.component';

export const appRoutes: Route[] = [
  { path: 'cockpit', component: CockpitPageComponent },
  { path: 'user', component: UserPageComponent },
  { path: 'report', component: ReportsPageComponent },
  { path: 'settings', component: SettingsPageComponent },
];
