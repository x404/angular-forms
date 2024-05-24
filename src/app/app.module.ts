import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserFormComponent } from "./sample02-forms/01_form/user-form.component";
import { FormsModule } from "@angular/forms";
import { RouterLink, RouterModule, Routes } from "@angular/router";
import { StylesSampleComponent } from "./sample02-forms/02_styles-sample/styles-sample.component";
import { UserFormComponent3 } from "./sample02-forms/03_form-custom-css/user-form.component2";
import { UserFormComponent4 } from "./sample02-forms/04_form_error_msg/user-form.component3";
import { FormFewErrorsComponent } from "./sample02-forms/04_form_few_errors/form-errors.component";
import { FormControlComponent } from './sample03-reactiveForms/01_form-control/form-control.component';
import { ReactiveFormsSampleModule } from "./sample03-reactiveForms";
import {
  FormControlValidationComponent
} from "./sample03-reactiveForms/02_form-control_validation/form-control-validation.component";

const appRoutes: Routes = [
  { path: '01_form', component: UserFormComponent},
  { path: '02_styles', component: StylesSampleComponent},
  { path: '03_form_styles', component: UserFormComponent3},
  { path: '04_form_error_msg', component: UserFormComponent4},
  { path: '05_form_few_errors', component: FormFewErrorsComponent},

  { path: '01_form-control', component: FormControlComponent},
  { path: '02_form-control-validation', component: FormControlValidationComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    UserFormComponent3,
    UserFormComponent4,
    StylesSampleComponent,
    FormFewErrorsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsSampleModule,
    RouterLink,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
