import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './contactList';
import { ContactDetailComponent } from './contactDetail';
import { AddContactComponent } from './addContact';
const routes: Routes = [
  { path: '', redirectTo: '/contacts', pathMatch: 'full' },
  { path: 'contacts', component: ContactListComponent },
  { path: 'contacts/:id', component: ContactDetailComponent },
  { path: 'addContact', component: AddContactComponent }
//   { path: 'detail/:id', component: HeroDetailComponent },
//   { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
