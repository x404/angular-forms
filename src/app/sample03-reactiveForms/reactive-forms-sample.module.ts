import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";
import { FormControlComponent } from "./01_form-control/form-control.component";
import { FormControlValidationComponent } from "./02_form-control_validation/form-control-validation.component";
import { FormBuilderComponent } from './03_form-builder/form-builder.component';
import { FormGroupComponent } from "./04_form-group/form-group.component";

@NgModule({
  declarations: [
    FormControlComponent,
    FormControlValidationComponent,
    FormBuilderComponent,
    FormGroupComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ReactiveFormsSampleModule { }
