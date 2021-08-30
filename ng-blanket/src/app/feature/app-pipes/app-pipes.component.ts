import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-pipes',
  templateUrl: './app-pipes.component.html',
  styleUrls: ['./app-pipes.component.scss']
})
export class AppPipesComponent implements OnInit {
  name!: string;
  date!: string;
  amount!: number;
  height!: number;
  miles!: number;
  currentDate = new Date();

  userData = {

    "id": 1,
    "name": "Leanne Graham",
    "address": {
      "street": "Kulas Light",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
  }

  constructor() { }

  ngOnInit(): void {
  }

  onNameChange(event: any): void {
    this.name = event.target.value;
  }

  onDateChange(event: any): void {
    this.date = event.target.value;
  }

  onAmountChange(event: any): void {
    this.amount = parseFloat(event.target.value);
  }

  onHeightChange(event: any): void {
    this.height = parseFloat(event.target.value);
  }

  onMilesChange(event: any): void {
    this.miles = parseFloat(event.target.value);
  }
}
