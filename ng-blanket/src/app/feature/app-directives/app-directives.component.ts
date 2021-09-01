import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-directives',
  templateUrl: './app-directives.component.html',
  styleUrls: ['./app-directives.component.scss']
})
export class AppDirectivesComponent implements OnInit {
  imagesSet = [
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1520942702018-0862200e6873?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
    },
    {
      title: 'Lovely Bridge',
      url: 'https://images.unsplash.com/photo-1512187849-463fdb898f21?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YnJpZGdlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    },
    {
      title: 'Hot Desert',
      url: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZGVzZXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60'
    },
    {
      title: 'Amazing River',
      url: 'https://images.unsplash.com/photo-1506355683710-bd071c0a5828?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHJpdmVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    },
  ];
  images = [...this.imagesSet, ...this.imagesSet, ...this.imagesSet, ...this.imagesSet]
  activePage = 0;

  constructor() { }

  ngOnInit(): void {
  }

  checkWindowIndex(index: number) {
    return Math.abs(this.activePage - index) < 5;
  }
}
