export const featureName = 'shoppingFeature';
import * as fromList from './list.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ShoppingItemModel } from '../models';

export interface ShoppingState {
  list: fromList.ListState;
}

export const reducers = {
  list: fromList.reducer
};


// Selectors

// 1. Create A Feature
const selectFeature = createFeatureSelector<ShoppingState>(featureName);

// 2. One per branch
const selectListBranch = createSelector(selectFeature, f => f.list);

// 3. Helpers
const { selectAll: selectAllListItems } = fromList.adapter.getSelectors(selectListBranch);


// 4. What the components need

// TODO: ShoppingItemModel[]
export const selectShoppingItemModel = createSelector(selectAllListItems,
  (items) => items as ShoppingItemModel[]
);
