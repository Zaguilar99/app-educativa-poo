import { inject } from '@angular/core';
import { ResolveFn, Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app.layout.component';
import { MenuService } from './layout/service/app.menu.service';
import { ErrorComponent } from './modules/auth/error/error.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { RegisterComponent } from './modules/auth/register/register.component';
import { AuthGuard } from './modules/auth/services/auth.guard';
import { ChatComponent } from './modules/chat/chat.component';
import { WelcomeComponent } from './modules/dashboard/dashboard.component';

const hideMenuResolver: ResolveFn<boolean> = () => {
  const menuService = inject(MenuService);
  menuService.hideMenu();
  return true;
};

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        component: WelcomeComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'chat',
        component: ChatComponent,
      },
    ],
  },
  {
    path: 'error',
    component: ErrorComponent,
  },
  {
    path: '**',
    redirectTo: 'error',
  },
];
