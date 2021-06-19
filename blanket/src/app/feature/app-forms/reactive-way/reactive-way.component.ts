import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reactive-way',
  templateUrl: './reactive-way.component.html',
  styleUrls: ['./reactive-way.component.scss']
})
export class ReactiveWayComponent implements OnInit {
  name = new FormControl('Mk');

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {

  }

  setName() {
    this.name.setValue('Mkumar');
    this.name.markAsDirty();

    setTimeout(() => this.name.reset(), 2000);
  }

  navigateTo(where: string) {
    this.router.navigate([`${where}`]);
  }
}
