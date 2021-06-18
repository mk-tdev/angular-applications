import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-app-simple-form',
  templateUrl: './app-simple-form.component.html',
  styleUrls: ['./app-simple-form.component.scss']
})
export class AppSimpleFormComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
  ) { }

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
  }

}
