import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-app-simple-form',
  templateUrl: './app-simple-form.component.html',
  styleUrls: ['./app-simple-form.component.scss']
})
export class AppSimpleFormComponent implements OnInit, OnChanges {
  favColor = new FormControl('');
  favFood: any;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes: ', changes);
  }

  myForm!: FormGroup;

  ngOnInit(): void {
    this.myForm = this.fb.group({
      email: '',
      message: 'Default message',
      phone: '',
    });

    this.myForm.valueChanges.subscribe((values) => {
      console.log('myForm values: ', values);
    })

    this.favColor.valueChanges.subscribe((value) => {
      console.log('fav color value: ', value);
    });

    this.setValuetoFavColor();
  }

  favFoodUpdate() {
    console.log('favFoodUpdate: ', this.favFood);
  }

  setValuetoFavColor() {
    setTimeout(() => {
      this.favColor.setValue('Blue');
      this.favFood = 'Biriyani'
    }, 2000);
  }

}
