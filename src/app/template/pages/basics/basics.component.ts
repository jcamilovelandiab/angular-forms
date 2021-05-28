import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent implements OnInit {

  @ViewChild("myForm")
  myForm!: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  isValid(): boolean {
    return this.myForm?.controls.product?.invalid &&
        this.myForm.controls.product.touched;
  }

  save( myForm: NgForm ) {
    console.log( myForm.value );
  }

}
