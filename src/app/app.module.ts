import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthPageComponent } from './components/auth-forms/auth-page/auth-page.component';
import { LoginFormComponent } from './components/auth-forms/login-form/login-form.component';
import { RegisterFormComponent } from './components/auth-forms/register-form/register-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { UsersTabComponent } from './components/users/users-tab/users-tab.component';
import { AllUsersComponent } from './components/users/all-users/all-users.component';
import { NewUsersComponent } from './components/users/new-users/new-users.component';
import { UpdateUserComponent } from './components/users/forms/update-user/update-user.component';
import { AllRolesComponent } from './components/roles/all-roles/all-roles.component';
import { RolesTabComponent } from './components/roles/roles-tab/roles-tab.component';
import { RolesFormComponent } from './components/roles/roles-form/roles-form.component';
import { BooksTabComponent } from './components/books/books-tab/books-tab.component';
import { AllBooksComponent } from './components/books/all-books/all-books.component';
import { BooksFormComponent } from './components/books/books-form/books-form.component';
import { OrderBooksComponent } from './components/orders/order-books/order-books.component';
import { MyOrdersComponent } from './components/orders/my-orders/my-orders.component';
import { AllOrdersComponent } from './components/orders/all-orders/all-orders.component';
import { PendingOrdersComponent } from './components/orders/all-orders/pending-orders/pending-orders.component';
import { AssignedOrdersComponent } from './components/orders/all-orders/assigned-orders/assigned-orders.component';
import { ReturnedOrdersComponent } from './components/orders/all-orders/returned-orders/returned-orders.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthPageComponent,
    LoginFormComponent,
    RegisterFormComponent,
    NavbarComponent,
    UserDashboardComponent,
    UsersTabComponent,
    AllUsersComponent,
    NewUsersComponent,
    UpdateUserComponent,
    AllRolesComponent,
    RolesTabComponent,
    RolesFormComponent,
    BooksTabComponent,
    AllBooksComponent,
    BooksFormComponent,
    OrderBooksComponent,
    MyOrdersComponent,
    AllOrdersComponent,
    PendingOrdersComponent,
    AssignedOrdersComponent,
    ReturnedOrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
