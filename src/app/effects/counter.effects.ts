import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { tap, filter, map } from 'rxjs/operators';
import * as counterActions from '../actions/counter.actions';
import { applicationStarted } from '../actions/app.actions';

@Injectable()
export class CounterEffects {

  // when application is started.
  // check the localstorage for 'by'
  // if it is there,  dispatch at setCountBy
  // if it isn't, don't do anything.
  readCountFromLocalStorage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(applicationStarted),
      map(() => localStorage.getItem('by')), // -> '5' | null
      filter(by => by !== null), // we got nothing.
      map(by => +by), // '5' -> 5
      map(by => counterActions.countBySet({ by })) // action! Actions get dispatched back into the store.
    ), { dispatch: true }
  );

  writeCountToLocalStorage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(counterActions.countBySet),
      tap(a => localStorage.setItem('by', a.by.toString()))
    ), { dispatch: false }
  );


  logActions$ = createEffect(() =>
    this.actions$.pipe(
      tap(a => console.log(`Got an action of type ${a.type}`))
    ), { dispatch: false }
  );

  constructor(private actions$: Actions) { }
}
