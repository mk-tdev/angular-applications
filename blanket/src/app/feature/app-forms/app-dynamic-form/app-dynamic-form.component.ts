import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-app-dynamic-form',
  templateUrl: './app-dynamic-form.component.html',
  styleUrls: ['./app-dynamic-form.component.scss']
})
export class AppDynamicFormComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
  ) { }

  myDynamicForm!: FormGroup;

  ngOnInit(): void {
    this.myDynamicForm = this.fb.group({
      email: '',
      phones: this.fb.array([]),
    });

    this.addPhone();
  }

  get phoneForms() {
    return this.myDynamicForm.get('phones') as FormArray;
  }

  addPhone() {
    const phone = this.fb.group({
      area: [],
      prefix: [],
      line: [],
    });

    this.phoneForms.push(phone);
    console.log('this.myDynamicForm: ', this.myDynamicForm);

  }

  deletePhone(i: number) {
    this.phoneForms.removeAt(i);
  }

  show(content: any) {
    console.log('content: ', content);
  }
}
