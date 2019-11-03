import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InternetComponent } from './internet/internet.component';
import { LunchComponent } from './lunch/lunch.component';


const routes: Routes = [
  {path:'internet', component: InternetComponent},
  {path:'', redirectTo:'internet', pathMatch: 'full'},// default route
  {path:'lunch', component: LunchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
