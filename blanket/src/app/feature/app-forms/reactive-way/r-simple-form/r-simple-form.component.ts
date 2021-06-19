import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-r-simple-form',
  templateUrl: './r-simple-form.component.html',
  styleUrls: ['./r-simple-form.component.scss']
})
export class RSimpleFormComponent implements OnInit {
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.profileForm.value);

  }

}
