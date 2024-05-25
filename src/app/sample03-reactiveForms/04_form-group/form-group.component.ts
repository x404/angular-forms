import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
      country: new FormControl('ua'),
      capital: new FormControl('')
    }),
    skills: new FormArray([])
  });


  setCapital(){
    const cityMap: { [countryCode: string]: string}  = {
      ua: 'Kyev',
      de: 'Berlin',
      ch: 'Prague'
    }

    const cityKey = this.loginForm.get('address')?.get('country')?.value;
    const city = cityMap[cityKey];

    this.loginForm.patchValue({
      address: {capital: city}
    })
  }

  onSubmit(form: FormGroup) {
    console.log(this.loginForm.value);
    this.loginForm.reset()
  }

  addSkill() {
    const control = new FormControl('', Validators.required);
    // (this.loginForm.get('skills') as FormArray).push('skills');
    (<FormArray>this.loginForm.get('skills')).push(control);
  }

  getSkillsControls() {
    return (this.loginForm.get('skills') as FormArray).controls
  }
}
