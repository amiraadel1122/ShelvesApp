import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { ShowComponent } from './book/show/show.component';
import { CreateComponent } from './book/create/create.component';
import {HomeContentComponent} from './home-content/home-content.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { UserProfileComponent } from './profile/user-profile/user-profile.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { OrderComponent } from './order/order.component';
import { BookListComponent } from './book/book-list/book-list.component';


const routes: Routes = [
  {
    path: '' ,
    component : HomeComponent
  },
  {
    path: 'login',
    component: AuthComponent,
  },
  {
    path: 'register',
    component: AuthComponent,
  },
  {
    path: 'books/create',
    component: CreateComponent
  },
  {
    path: 'books/:id',
    component: ShowComponent
  },
  {
    path: 'HomeContent',
    component : HomeContentComponent
  },

  {
    path: 'SignIn',
    component : SignInComponent
  },
  {
    path: 'Signup',
    component : SignUpComponent
  },
  {
    path: 'userprofile',
    component : UserProfileComponent
  },
  {
    path: 'editprofile',
    component : EditProfileComponent
  },
  {
    path: 'editprofile',
    component : EditProfileComponent
  },

  {
    path: 'order',
    component: OrderComponent
  },
  {
    path: 'BookList',
    component: BookListComponent
  }

];


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
