import { Component } from '@angular/core';
import { User} from "../user";

@Component({
  selector: 'app-01_form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  roles: string[] = ["Guest", "Moderator", "Administrator"];

  model: User = new User(0,'','', 0);

  submitted: boolean = false;

  onSubmit(){
    this.submitted = true
  }

  get diagnostic(){
    return JSON.stringify(this.model )
  }
}
