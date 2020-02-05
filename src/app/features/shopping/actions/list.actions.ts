import { createAction } from '@ngrx/store';

let currentId = 99;

export const shoppingItemAdded = createAction(
  '[shopping list] add item',
  ({ description }: { description: string }) => ({
    payload: {
      description,
      id: 'T' + currentId++
    }
  })
);
