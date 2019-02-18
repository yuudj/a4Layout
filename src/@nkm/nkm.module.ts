import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
    imports: [BrowserModule, FlexLayoutModule, MaterialModule],
    exports: [NavigationComponent],
    declarations: [NavigationComponent],
    providers: [],
})
export class NkmModule { }
