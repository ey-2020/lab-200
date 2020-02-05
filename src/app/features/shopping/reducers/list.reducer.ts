import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action, on } from '@ngrx/store';
import * as listActions from '../actions/list.actions';
export interface ShoppingItemEntity {
  id: string;
  description: string;
}

export interface ListState extends EntityState<ShoppingItemEntity> {

}

export const adapter = createEntityAdapter<ShoppingItemEntity>();

// const initialState = adapter.getInitialState();
const initialState: ListState = {
  ids: ['1', '2'],
  entities: {
    1: { id: '1', description: 'Shampoo' },
    2: { id: '2', description: 'Bread' }
  }
};

const reducerFunction = createReducer(
  initialState,
  on(listActions.shoppingItemAdded, (s, a) => adapter.addOne(a.payload, s))
);

export function reducer(state: ListState = initialState, action: Action) {
  return reducerFunction(state, action);
}



