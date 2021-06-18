import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-forms',
  templateUrl: './app-forms.component.html',
  styleUrls: ['./app-forms.component.scss']
})
export class AppFormsComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  navigateTo(where: string) {
    this.router.navigate([`${where}`]);
  }
}
