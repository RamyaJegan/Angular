import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
// Created Directory
import { CcLogoDirective } from './cc-logo.directive';
// Google Maps
import {AgmCoreModule } from '@agm/core'

@NgModule({
  declarations: [
    AppComponent,
    CcLogoDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
