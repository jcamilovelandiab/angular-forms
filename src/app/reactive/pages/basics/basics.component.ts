import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent implements OnInit {

  // myForm: FormGroup = new FormGroup({
  //   name : new FormControl('RTX 4080ti'),
  //   price: new FormControl(1500),
  //   stock: new FormControl(5),
  // });

  myForm: FormGroup = this.formBuilder.group({
    name: [ '', [ Validators.required, Validators.minLength(3) ] ],
    price: [ null, [ Validators.min(0), Validators.required ] ],
    stock: [ null, [ Validators.min(0), Validators.required ] ]
  });

  constructor( private formBuilder: FormBuilder ) { }

  ngOnInit() {
    this.myForm.reset({
      name: 'RTX 4080ti',
      price: 1600,
      stock: 10
    });
  }

  validField( field: string ) {
    return this.myForm.controls[field].errors && 
        this.myForm.controls[field].touched;
  }

  save() {
    if( this.myForm.invalid ) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value);
    this.myForm.reset();
  }

}
