import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SDKBrowserModule } from '../../../sdk/index';
// Material modules
import {
  MatDialogModule,
  MatToolbarModule,
  MatListModule,
  MatChipsModule,
  MatInputModule,
  MatNativeDateModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatSelectModule
} from '@angular/material';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';


@NgModule({
  declarations: [
    BreadcrumbComponent
  ],
  imports: [
    CommonModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    MatDialogModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatChipsModule,
    SDKBrowserModule.forRoot(),
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatSelectModule,
    MatNativeDateModule,
    MatSnackBarModule
  ],
  providers: [
    MatDatepickerModule
  ],
  exports: [
    BreadcrumbComponent,
    CommonModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    // Material modules
    MatDialogModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatChipsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatSelectModule,
    MatNativeDateModule,
    MatSnackBarModule
  ]
})
export class SharedModule { }
