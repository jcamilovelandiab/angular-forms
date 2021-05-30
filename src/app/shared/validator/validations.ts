import { FormControl } from '@angular/forms';

export const fullnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
export const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

export const usernameValidator = (formControl: FormControl) => {
  const value: string = formControl.value?.trim().toLowerCase();
  if (value === 'camilo') {
    return {
      noCamilo: true
    };
  }
  return null;
}