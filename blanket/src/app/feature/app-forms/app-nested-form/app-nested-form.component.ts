import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-app-nested-form',
  templateUrl: './app-nested-form.component.html',
  styleUrls: ['./app-nested-form.component.scss']
})
export class AppNestedFormComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
  ) { }

  myNestedForm!: FormGroup;

  ngOnInit(): void {
    const phone = this.fb.group({
      area: [],
      prefix: [],
      line: [],
    });

    this.myNestedForm = this.fb.group({
      email: '',
      homePhone: phone,
      cellPhone: phone,
    });

    this.myNestedForm.valueChanges.subscribe((values) => {
      console.log('myNestedForm values: ', values);
    })
  }

}
