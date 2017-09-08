import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from '../components/about/about.component';
import { HomeComponent } from '../components/home/home.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { UsersComponent } from '../components/users/users.component';
import { UserDetailComponent } from '../components/user-detail/user-detail.component';

const appRoutes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'about', component: AboutComponent },
	{ path: 'users', component: UsersComponent, children: [
		{ path: '', component: NotFoundComponent },
		{ path: ':id', component: UserDetailComponent }
	] },
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: '**', component: NotFoundComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class RoutingModule { }