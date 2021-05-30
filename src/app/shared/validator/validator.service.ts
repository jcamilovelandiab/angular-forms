import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  public fullnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor() { }

  usernameValidator (formControl: FormControl): ValidationErrors | null {
    const value: string = formControl.value?.trim().toLowerCase();
    if (value === 'camilo') {
      return {
        noCamilo: true
      };
    }
    return null;
  }

}
