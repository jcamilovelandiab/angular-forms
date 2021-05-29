import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  fullnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  
  usernameValidator( formControl: FormControl) {
    const value: string = formControl.value?.trim().toLowerCase();
    if( value === 'camilo' ) {
      return {
        noCamilo: true
      };
    }
    return null;
  }


  registerForm: FormGroup = this.formBuilder.group({
    fullname: ['', [ Validators.required, Validators.pattern(this.fullnamePattern) ] ],
    email: ['', [ Validators.required, Validators.pattern(this.emailPattern) ] ],
    username: ['', [ Validators.required, this.usernameValidator ] ]
  });

  constructor( private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
    this.registerForm.reset({
      fullname: 'Camilo Velandia',
      email: 'jcamilovelandiab@gmail.com',
      username: 'jcamilovelandiab'
    });
  }

  validField( field: string ) {
    return this.registerForm.get(field)?.invalid && 
      this.registerForm.get(field)?.touched;
  }

  register() {
    console.log(this.registerForm.value);
    this.registerForm.markAllAsTouched();
  }

}
