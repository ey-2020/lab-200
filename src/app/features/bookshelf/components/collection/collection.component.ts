import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { BookModel } from '../../models';
import { Store } from '@ngrx/store';
import { BookshelfState } from '../../reducers';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CollectionComponent implements OnInit {

  @Input() model: BookModel[];
  constructor(private store: Store<BookshelfState>) { }

  ngOnInit() {
  }

}
