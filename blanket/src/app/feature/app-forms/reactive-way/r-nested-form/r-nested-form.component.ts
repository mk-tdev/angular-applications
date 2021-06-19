import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-r-nested-form',
  templateUrl: './r-nested-form.component.html',
  styleUrls: ['./r-nested-form.component.scss']
})
export class RNestedFormComponent implements OnInit {
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  });

  constructor(
    private fb: FormBuilder,
  ) { }

  phoneForm = this.fb.group({
    deviceMake: [''],
    specs: this.fb.group({
      ram: [''],
      memory: [''],
    })
  })

  ngOnInit(): void {
    this.profileForm.valueChanges.subscribe((values) => {
      console.log('values: ', values);
    })
    this.phoneForm.valueChanges.subscribe((values) => {
      console.log('values: ', values);
    })
  }

  setData() {
    this.profileForm.patchValue({
      firstName: 'Muthu',
      address: {
        street: 'Kechil road'
      }
    });
  }

  onSubmit(): void {
    console.log(this.profileForm.value);
    console.log(this.phoneForm.value);
  }

}
