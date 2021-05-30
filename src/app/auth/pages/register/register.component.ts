import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ValidatorService } from '../../../shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup = this.formBuilder.group({
    fullname: [ '', [ Validators.required, Validators.pattern(this.validatorService.fullnamePattern) ] ],
    email: [
      '', [
        Validators.required,
        Validators.pattern(this.validatorService.emailPattern)
      ],
      [ this.emailValidatorService ]
    ],
    username: ['', [ Validators.required, this.validatorService.usernameValidator  ] ],
    password: ['', [ Validators.required, Validators.minLength(6) ] ],
    confirmPassword: ['', [ Validators.required ] ]
  },{
    validators: [ this.validatorService.matchFields('password', 'confirmPassword') ]
  });

  constructor(
    private formBuilder: FormBuilder,
    private validatorService: ValidatorService,
    private emailValidatorService: EmailValidatorService
  ) { }

  ngOnInit(): void {
    this.registerForm.reset({
      fullname: 'Camilo Velandia',
      email: 'test1@test.com',
      username: 'jcamilovelandiab',
      password: '123456',
      confirmPassword: '123456'
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
