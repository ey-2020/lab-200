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
  title = 'Front End Web 200';
  by = 'Jeff Gonzalez';


  constructor(store: Store<AppState>) {
    store.dispatch(applicationStarted());
  }
}
