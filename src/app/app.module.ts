import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from './material/material.module';
import { HomeComponent } from './home/home.component';
import { ServiceWorkerModule } from '@angular/service-worker';

import {NkmModule} from 'src/@nkm/nkm.module';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,

    MaterialModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),

    NkmModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
