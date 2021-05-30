import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmailValidatorService implements AsyncValidator {

  constructor( private httpClient: HttpClient ) { }
  
  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    const email = control.value;
    console.log(email);
    return this.httpClient.get<any[]>(`http://localhost:3000/users?q=${email}`)
        .pipe(
          map( response => {
            return ( response.length === 0)
              ? null
              : { emailTaken: true };
          })
        );
  }

}
