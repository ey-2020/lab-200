export const featureName = 'bookshelfFeature';
import * as fromCollection from './collection.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BookModel } from '../models';

export interface BookshelfState {
  coll: fromCollection.CollectionState;
}

export const reducers = {
  coll: fromCollection.reducer
};


// Selectors

// 1. Create A Feature
const selectFeature = createFeatureSelector<BookshelfState>(featureName);

// 2. One per branch
const selectCollectionBranch = createSelector(selectFeature, f => f.coll);

// 3. Helpers
const { selectAll: selectAllCollectionItems } = fromCollection.adapter.getSelectors(selectCollectionBranch);


// 4. What the components need

// TODO: ShoppingItemModel[]
export const selectBookModel = createSelector(selectAllCollectionItems,
  (items) => items.map(item => ({ ...item } as BookModel))
);
