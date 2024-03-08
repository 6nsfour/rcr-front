import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {RegisterComponent} from "./register/register.component";
import { HomeComponent } from './home/home.component';
import {CreationComponent} from "./creation/creation.component";
import { ResourceViewPanelComponent } from './resource-view-panel/resource-view-panel.component';
import {ProfileComponent} from "./profile/profile.component";
import {DataManagementComponent} from "./data-management/data-management.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'resource/create', component: CreationComponent },
  { path: 'resource/view/:id', component: ResourceViewPanelComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'gestion_donnees', component: DataManagementComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
