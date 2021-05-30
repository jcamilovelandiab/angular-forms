import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ValidatorService } from '../../../shared/validator/validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup = this.formBuilder.group({
    fullname: ['', [ Validators.required, Validators.pattern(this.validatorService.fullnamePattern) ] ],
    email: ['', [ Validators.required, Validators.pattern(this.validatorService.emailPattern) ] ],
    username: ['', [ Validators.required, this.validatorService.usernameValidator  ] ]
  });

  constructor(
    private formBuilder: FormBuilder,
    private validatorService: ValidatorService
  ) { }

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
