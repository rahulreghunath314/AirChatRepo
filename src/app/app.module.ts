

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import{RouterModule,Routes} from '@angular/router';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
 
// import {MatInputModule,MatButtonModule,MatFormFieldModule,MatSelectModule,MatIconModule} from '@angular/material';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
  MatFormFieldModule
} from '@angular/material';











import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { RegisterComponent } from './register/register.component'; 
 

 
const appRoute:Routes=[
  {path:'dashboard',component:DashboardComponent},
  {path:'login',component:LoginComponent},
  {path:'Forgotpassword',component:ForgotpasswordComponent},
  {path:'register',component:RegisterComponent},
  {path:'',component:LoginComponent}
]
 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ForgotpasswordComponent,
    RegisterComponent
  ],
  imports: [
    RouterModule.forRoot(appRoute),
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatIconModule

  ],
  providers: [LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
