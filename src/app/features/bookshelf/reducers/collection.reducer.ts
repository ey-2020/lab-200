import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action, on } from '@ngrx/store';
import * as collectionActions from '../actions/book.actions';
export interface BookEntity {
  title: string;
  author: string;
  format: string;
  id: number;
}

export interface CollectionState extends EntityState<BookEntity> {

}

export const adapter = createEntityAdapter<BookEntity>();

const initialState = adapter.getInitialState();


const reducerFunction = createReducer(
  initialState,
  on(collectionActions.titleAdded, (s, a) => adapter.addOne(a.payload, s)),
  on(collectionActions.bookCollectionLoaded, (s, a) => adapter.addAll(a.payload, s)),
  on(collectionActions.titleAddedSuccessfully, (s, a) => {
    const tempState = adapter.removeOne(a.oldId, s);
    return adapter.addOne(a.payload, tempState);
  })
);

export function reducer(state: CollectionState = initialState, action: Action) {
  return reducerFunction(state, action);
}



