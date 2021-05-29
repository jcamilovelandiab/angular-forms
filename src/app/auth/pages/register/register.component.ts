import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  fullnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';

  registerForm: FormGroup = this.formBuilder.group({
    fullname: ['', [ Validators.required, Validators.pattern(this.fullnamePattern) ] ]
  });

  constructor( private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
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
