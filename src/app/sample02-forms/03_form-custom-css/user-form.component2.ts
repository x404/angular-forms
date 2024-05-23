import { Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-03_form_-custom-css',
  templateUrl: './user-form.component2.html',
  styleUrls: ['./user-form.component2.css']
})
export class UserFormComponent3 {
  roles: string[] = ['Guest', 'Moderator', 'Administrator'];

  model: User = new User(0,'','');

  submitted: boolean = false;

  onSubmit(){
    this.submitted = true
  }

  get diagnostic(){
    return JSON.stringify(this.model )
  }
}
