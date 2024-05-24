import { Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-form_few_errors',
  templateUrl: './form-errors.component.html',
  styleUrls: ['./form-errors.component.css']
})
export class FormFewErrorsComponent {
  roles: string[] = ['Guest', 'Moderator', 'Administrator'];

  model: User = new User(0,'','');

  submitted: boolean = false;

  onSubmit(){
    this.submitted = true;
  }

  get diagnostic(){
    return JSON.stringify(this.model)
  }
}
