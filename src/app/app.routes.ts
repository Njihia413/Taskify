import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {NgModule} from "@angular/core";
import {RegisterComponent} from "./pages/register/register.component";
import {AppLayoutComponent} from "./pages/dashboard/layout/app.layout/app.layout.component";

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: AppLayoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutes {}
