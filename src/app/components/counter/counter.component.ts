import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState, selectCurrentCount, selectCountAtStart, selectCountingBy } from 'src/app/reducers';

import * as actions from '../../actions/counter.actions';
import { tap } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit, OnDestroy {

  current$: Observable<number>;
  atStart$: Observable<boolean>;
  by$: Observable<number>;
  subscription: Subscription;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {

    this.current$ = this.store.select(selectCurrentCount);
    this.atStart$ = this.store.select(selectCountAtStart);
    this.by$ = this.store.select(selectCountingBy);
    this.subscription = this.store.select(selectCurrentCount)
      .pipe(
        tap(c => console.log('Count is currently ', c))
      ).subscribe();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  increment() {
    this.store.dispatch(actions.countIncremented());
  }

  decrement() {
    this.store.dispatch(actions.countDecremented());
  }

  reset() {
    this.store.dispatch(actions.countReset());
  }

  setCountBy(by: number) {
    this.store.dispatch(actions.countBySet({ by }));
  }

}
