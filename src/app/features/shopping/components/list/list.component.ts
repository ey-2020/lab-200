import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { ShoppingItemModel } from '../../models';
import { ShoppingItemEntity } from '../../reducers/list.reducer';
import { Store } from '@ngrx/store';
import { ShoppingState } from '../../reducers';
import { shoppingItemPurchased } from '../../actions/list.actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {

  @Input() model: ShoppingItemModel[];
  constructor(private store: Store<ShoppingState>) { }

  ngOnInit() {
  }

  markPurchased(item: ShoppingItemEntity) {
    this.store.dispatch(shoppingItemPurchased({ payload: item }));
  }

}
