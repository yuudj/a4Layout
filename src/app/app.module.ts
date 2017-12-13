import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from "@angular/flex-layout";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppCommonModule } from './app-common/app-common.module';

import { AppRoutingModule } from './app-routing.module';
import { AppToolbarService } from './app-toolbar/app-toolbar.service';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppAboutComponent } from './app-about/app-about.component';
import { AppHomeComponent } from './app-home/app-home.component';


@NgModule({
  declarations: [
    AppComponent,
    AppAboutComponent,
    AppHomeComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    FlexLayoutModule,
    BrowserAnimationsModule,
    AppCommonModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [AppToolbarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
