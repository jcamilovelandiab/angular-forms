import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styles: [
  ]
})
export class DynamicsComponent implements OnInit {

  myForm: FormGroup = this.formBuilder.group({
    name: ['', [ Validators.required, Validators.minLength(3) ] ],
    favorites: this.formBuilder.array( [
      [ 'Metal Gear', Validators.required ],
      [ 'Death Stranding', Validators.required ]
    ], Validators.required )
  });

  newFavorite: FormControl = this.formBuilder.control('', Validators.required);

  constructor( private formBuilder: FormBuilder) { }

  get favoritesArray() {
    return this.myForm.get('favorites') as FormArray;
  }

  ngOnInit(): void {
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
    console.log( this.myForm.value );
  }

  addFavorite() {
    if( this.newFavorite.invalid ) {
      return;
    }
    // this.favoritesArray.push( new FormControl( this.newFavorite.value, Validators.required ));
    this.favoritesArray.push(this.formBuilder.control(this.newFavorite.value, [ Validators.required ]));
    this.newFavorite.reset();
  }

  deleteFavorite( index: number ) {
    this.favoritesArray.removeAt(index);
    console.log(this.favoritesArray);
  }

}
