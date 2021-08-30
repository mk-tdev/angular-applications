import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';

import { RestApiService } from './core/rest-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-blanket';

  constructor(
    private restApi: RestApiService,
  ) { }

  ngOnInit(): void {
    // this.getPosts();
  }

  private getPosts() {
    this.restApi.getPosts().pipe(filter(d => {
      console.log('d: ', d);
      return true;
    })).subscribe((data) => {
      console.log('data: ', data);
    });
  }

}
