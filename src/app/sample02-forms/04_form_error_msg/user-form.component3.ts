import { Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-04_form',
  templateUrl: './user-form.component3.html',
  styleUrls: ['./user-form.component3.css']
})
export class UserFormComponent4 {
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
