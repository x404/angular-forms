import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-03_form-builder',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css']
})
export class FormGroupComponent {

  loginForm: FormGroup = new FormGroup({
    login: new FormControl('user1', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(3)]),
    address: new FormGroup({
      city: new FormControl('ua'),
      state: new FormControl('')
    })
  });
  constructor(
  ) {
  }


  onSubmit(form: FormGroup) {
    console.log(this.loginForm.value);
  }

}
