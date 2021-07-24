import { Component, OnInit } from '@angular/core';

export class Phone {

  constructor(
    public id: number,
    public name: string,
    public os: string,
    public ram?: string
  ) { }

}

@Component({
  selector: 'app-template-way',
  templateUrl: './template-way.component.html',
  styleUrls: ['./template-way.component.scss']
})
export class TemplateWayComponent implements OnInit {
  features = ["Bionic 14", "3 Cameras", "Slim and Compact", "iOS 14.6"];
  model = new Phone(12, 'iPhone', 'iOS', '6 GM');
  submitted = false
  testname = "iPhone"

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

  }
}
