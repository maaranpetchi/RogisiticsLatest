import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './Components/LandingPage/landing-page/landing-page.component';
import { NgxDocViewerModule } from 'ngx-doc-viewer';
import { TermsandconditionComponent } from './Components/TermsAndCondition/termsandcondition/termsandcondition.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    TermsandconditionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    NgxDocViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
