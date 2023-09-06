import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WildFiresComponent } from './wild-fires/wild-fires.component';

const routes: Routes = [
  { path : 'fires', component : WildFiresComponent },
  { path : '', redirectTo: '/fires', pathMatch : 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
