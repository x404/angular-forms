import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-03_form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit{

  loginForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group({
      login: ['user1', Validators.required],
      password: ['', [Validators.required, Validators.minLength(7)]]
    })
  }

  ngOnInit() {

  }


  onSubmit(form: FormGroup) {
    console.log(this.loginForm.value);
  }

}
