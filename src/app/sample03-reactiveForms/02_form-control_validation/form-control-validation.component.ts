import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-01_form-control',
  templateUrl: './form-control-validation.component.html',
  styleUrls: ['./form-control-validation.component.css']
})
export class FormControlValidationComponent{

  loginForm: FormGroup = new FormGroup({
    login: new FormControl('user1', Validators.required),
    password: new FormControl(
      '',
      [Validators.required, Validators.minLength(3)]
    ),
  });


  onSubmit(form: FormGroup) {
    console.log(form.valid);
    console.log(form.value);
  }
}
