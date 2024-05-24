import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";
import { FormControlComponent } from "./01_form-control/form-control.component";
import { FormControlValidationComponent } from "./02_form-control_validation/form-control-validation.component";

@NgModule({
  declarations: [
    FormControlComponent,
    FormControlValidationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ReactiveFormsSampleModule { }
