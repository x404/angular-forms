import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";
import { FormControlComponent } from "./01_form-control/form-control.component";

@NgModule({
  declarations: [
    FormControlComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ReactiveFormsSampleModule { }
