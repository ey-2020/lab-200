import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './reducers';
import { applicationStarted } from './actions/app.actions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Front End Web 200 Lab - Eureka Young';
  by = 'based on https://github.com/JeffryGonzalez/few200-feb-2020.git';


  constructor(store: Store<AppState>) {
    store.dispatch(applicationStarted());
  }
}
