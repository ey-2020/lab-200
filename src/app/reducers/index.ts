import * as fromCounter from './counter.reducer';
export interface AppState {
  counter: fromCounter.CounterState;
}

export const reducers = {
  counter: fromCounter.reducer
};


// Ducks

export const selectCurrentCount = (state: AppState) => state.counter.current;


export const selectCountAtStart = (state: AppState) => state.counter.current === 0;

export const selectCountingBy = (state: AppState) => state.counter.by;
