import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module } from 'ng-recaptcha';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RecaptchaV3Module,
    AppRoutingModule,
  ],
  providers: [
    provideClientHydration(),
    {
      provide: RECAPTCHA_V3_SITE_KEY,
      useValue: "6LfTes0pAAAAAOIaICAfnUGHFquFFrswE0qKB_X8"
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
