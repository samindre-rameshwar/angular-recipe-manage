import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
	// { path: '', redirectTo: '/signin', pathMatch: 'full' }
	{ path: '', component:HomeComponent },
	{ path: 'recipes', loadChildren:'./recipes/recipes.module#RecipesModule'},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
