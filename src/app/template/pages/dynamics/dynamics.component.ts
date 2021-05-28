import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styles: [
  ]
})
export class DynamicsComponent implements OnInit {

  @ViewChild("dynamicForm")
  dynamicForm!: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  save() {
    console.log('Form posted');
  }

  validName() {
    return this.dynamicForm?.controls.name?.errors && 
        this.dynamicForm?.controls.name?.touched
  }

}
