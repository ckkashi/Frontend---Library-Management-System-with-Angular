import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageComponent } from './components/auth-forms/auth-page/auth-page.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { UsersTabComponent } from './components/users/users-tab/users-tab.component';
import { UpdateUserComponent } from './components/users/forms/update-user/update-user.component';
import { AllRolesComponent } from './components/roles/all-roles/all-roles.component';
import { RolesTabComponent } from './components/roles/roles-tab/roles-tab.component';
import { RolesFormComponent } from './components/roles/roles-form/roles-form.component';
import { BooksTabComponent } from './components/books/books-tab/books-tab.component';
import { BooksFormComponent } from './components/books/books-form/books-form.component';
import { OrderBooksComponent } from './components/orders/order-books/order-books.component';
import { MyOrdersComponent } from './components/orders/my-orders/my-orders.component';
import { AllOrdersComponent } from './components/orders/all-orders/all-orders.component';

const routes: Routes = [
  {
    path:'',
    component:AuthPageComponent
  },
  {
    path:'user-dashboard',
    component:UserDashboardComponent
  },
  {
    path:'users',
    component:UsersTabComponent
  },
  {
    path:'update-user/:id',
    component:UpdateUserComponent
  },
  {
    path:'roles',
    component:RolesTabComponent
  },
  {
    path:'role-form/:id',
    component:RolesFormComponent
  },
  {
    path:'books',
    component:BooksTabComponent
  },
  {
    path:'book-form/:id',
    component:BooksFormComponent
  },
  {
    path:'order-books',
    component:OrderBooksComponent
  },
  {
    path:'my-orders',
    component:MyOrdersComponent
  },
  {
    path:'all-orders',
    component:AllOrdersComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
