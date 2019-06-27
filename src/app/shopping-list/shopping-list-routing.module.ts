import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingListComponent } from './shopping-list.component';
import { AuthGaurd } from '../auth/auth-gaurd.service';

const shoppingListRoutes:Routes = [
    { path: 'shopping-list', component: ShoppingListComponent ,canActivate:[AuthGaurd]},
]

@NgModule({
    imports:[
        RouterModule.forChild(shoppingListRoutes)
    ],
    exports:[RouterModule]
})

export class ShoppingListRoutingModule{

}