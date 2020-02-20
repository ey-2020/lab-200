import { createAction, props } from '@ngrx/store';
import { BookEntity } from '../reducers/collection.reducer';

let currentId = 10000;

export const titleAdded = createAction(
  '[book collection] add title',
  ({ title, author, format }: { title: string, author: string, format: string }) => ({
    payload: {
      title,
      author,
      format,
      id: currentId++
    }
  })
);

export const titleAddedSuccessfully = createAction(
  '[book collection] title added successfully',
  props<{ oldId: string, payload: BookEntity }>()
);


export const bookCollectionLoaded = createAction(
  '[shopping list] shopping list loaded',
  props<{ payload: BookEntity[] }>()
);


