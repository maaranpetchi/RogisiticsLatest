import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './Components/LandingPage/landing-page/landing-page.component';
import { TermsandconditionComponent } from './Components/TermsAndCondition/termsandcondition/termsandcondition.component';

const routes: Routes = [
  { path: '',   redirectTo: '/Rowgistic', pathMatch: 'full' }, // 

  { path: 'Rowgistic', component: LandingPageComponent },
  { path: 'Rowgistic/TermsAndCondition', component: TermsandconditionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
