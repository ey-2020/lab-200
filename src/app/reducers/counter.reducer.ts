import { Action, createReducer, on } from '@ngrx/store';
import * as actions from '../actions/counter.actions';
export interface CounterState {
  current: number;
  by: number;
}

export const initialState: CounterState = {
  current: 0,
  by: 1
};


const myReducer = createReducer(
  initialState,
  on(actions.countReset, () => initialState),
  on(actions.countIncremented, (s) => ({ ...s, current: s.current + s.by })),
  on(actions.countDecremented, (s) => ({ ...s, current: s.current - s.by })),
  on(actions.countBySet, (s, a) => ({ ...s, by: a.by })),
  on(actions.currentSet, (s, a) => ({ ...s, current: a.current }))

);
export function reducer(state: CounterState = initialState, action: Action): CounterState {
  return myReducer(state, action);
}



