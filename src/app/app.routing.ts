import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent }   from './about/about.component';
import { HollerComponent }   from './holler/holler.component';
import { BusinessDetailComponent }from "./business-detail/business-detail.component";
import { AdminComponent } from "./admin/admin.component";

const appRoutes: Routes = [
  {
  path: '',
  component: WelcomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'holler',
    component: HollerComponent
  },
  {
    path: 'businesses/:id',
    component: BusinessDetailComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
