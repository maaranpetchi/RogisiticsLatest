import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './Components/LandingPage/landing-page/landing-page.component';

const routes: Routes = [
  { path: 'Rowgistic', component: LandingPageComponent },
  { path: 'TermsAndCondition', component: LandingPageComponent },
  { path: '',   redirectTo: '/Rowgistic', pathMatch: 'full' }, // 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
