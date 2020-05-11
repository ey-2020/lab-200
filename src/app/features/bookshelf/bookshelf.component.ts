import { Component, OnInit } from '@angular/core';
import { BookshelfState, selectBookModel } from './reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BookModel } from './models';

@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.css']
})
export class BookshelfComponent implements OnInit {

  collection$: Observable<BookModel[]>;
  constructor(private store: Store<BookshelfState>) { }

  ngOnInit() {
    this.collection$ = this.store.select(selectBookModel);
  }

}
