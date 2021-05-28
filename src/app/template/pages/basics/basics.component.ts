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

  initialForm:any = {
    product: 'RTX',
    price: 10,
    stock: 10
  }

  constructor() { }

  ngOnInit(): void {
  }

  save( myForm: NgForm ) {
    console.log( myForm.value );
    this.myForm.resetForm({
      product: 'Something',
      price: 0,
      stock: 0
    });
  }

  validName(): boolean {
    return this.myForm?.controls.product?.invalid &&
        this.myForm?.controls.product?.touched;
  }

  validPrice(): boolean {
    return this.myForm?.controls.price?.touched &&
      this.myForm?.controls.price?.value < 0;
  }

  validStock(): boolean {
    return this.myForm?.controls.stock?.invalid &&
        this.myForm.controls.stock.touched; 
  }

}
