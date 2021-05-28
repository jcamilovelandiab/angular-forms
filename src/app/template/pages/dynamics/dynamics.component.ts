import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Person, Favorite } from '../../interfaces/template.interfaces';

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styles: [
  ]
})
export class DynamicsComponent {

  person: Person = {
    name: 'Camilo',
    favorites: [
      { id: 1, name: 'Metal Gear' },
      { id: 2, name: 'Death Stranding' }
    ]
  }

  @ViewChild("dynamicForm")
  dynamicForm!: NgForm;

  constructor() { }

  save() {
    console.log('Form posted');
  }

  validName() {
    return this.dynamicForm?.controls.name?.errors && 
        this.dynamicForm?.controls.name?.touched
  }

}
