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

  newGame: string = '';

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

  delete( index: number ){
    this.person.favorites.splice(index, 1);
  }

  addGame() {
    const newFavorite: Favorite = {
      id: this.person.favorites.length + 1,
      name: this.newGame
    }
    this.person.favorites.push({ ...newFavorite });
    this.newGame = '';
  }

}
