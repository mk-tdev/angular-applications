import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-r-dynamic-form',
  templateUrl: './r-dynamic-form.component.html',
  styleUrls: ['./r-dynamic-form.component.scss']
})
export class RDynamicFormComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
  ) { }

  profileForm = this.fb.group({
    name: ['', Validators.required],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    aliases: this.fb.array([]),
    phones: this.fb.array([]),
  });

  ngOnInit(): void {
    this.profileForm.valueChanges.subscribe((values) => {
      console.log('values: ', values);
    })
  }

  get phones() {
    return this.profileForm.get('phones') as FormArray;
  }

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  addPhone() {
    const phone = this.fb.group({
      area: ['', Validators.required],
      prefix: [],
      line: [],
    });

    this.phones.push(phone);
  }

  addAliases() {
    this.aliases.push(this.fb.control(''))
  }

  onSubmit(): void {
    console.log(this.profileForm.value);
  }

}
