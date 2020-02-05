import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action, on } from '@ngrx/store';
import * as listActions from '../actions/list.actions';
export interface ShoppingItemEntity {
  id: string;
  description: string;
  purchased: boolean;
}

export interface ListState extends EntityState<ShoppingItemEntity> {

}

export const adapter = createEntityAdapter<ShoppingItemEntity>();

const initialState = adapter.getInitialState();


const reducerFunction = createReducer(
  initialState,
  on(listActions.shoppingItemAdded, (s, a) => adapter.addOne(a.payload, s)),
  on(listActions.shoppingItemPurchased, (s, a) => adapter.updateOne({ id: a.payload.id, changes: { purchased: true } }, s)),
  on(listActions.shoppingListLoaded, (s, a) => adapter.addAll(a.payload, s)),
  on(listActions.shoppingItemAddedSuccessfully, (s, a) => {
    const tempState = adapter.removeOne(a.oldId, s);
    return adapter.addOne(a.payload, tempState);
  })
);

export function reducer(state: ListState = initialState, action: Action) {
  return reducerFunction(state, action);
}



