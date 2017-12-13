import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpModule} from '@angular/http';
import {CdkTableModule} from '@angular/cdk/table';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NguUtilityModule} from "ngu-utility/dist"; 
import {
    //MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    //MatCardModule,
    MatCheckboxModule,
    //MatChipsModule,
    //MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    //MatExpansionModule,
    //MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    //MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    //MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    //MatSliderModule,
    //MatSlideToggleModule,
    //MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
  } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
        //MatNativeDateModule,
        ReactiveFormsModule,
      ],
  declarations: [],
  exports: [
    CdkTableModule,
    //MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    //MatCardModule,
    MatCheckboxModule,
    //MatChipsModule,
    //MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    //MatExpansionModule,
    //MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    //MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    //MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    //MatSliderModule,
    //MatSlideToggleModule,
    //MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    NguUtilityModule
  ]
})
export class AppCommonModule { }