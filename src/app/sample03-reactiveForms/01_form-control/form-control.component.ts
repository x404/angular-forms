import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-01_form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css']
})
export class FormControlComponent implements OnInit{

  loginForm: FormGroup = new FormGroup({
    login: new FormControl(''),
    password: new FormControl(),
  });

  constructor() {
    // this.loginForm = new FormGroup({
    //   login: new FormControl('user12'),
    //   password: new FormControl(),
    // })
  }


  ngOnInit() {

  }

  onSubmit(form: FormGroup) {
    console.log(form.valid);
    console.log(form.value);
  }
}
