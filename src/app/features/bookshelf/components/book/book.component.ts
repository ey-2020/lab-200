import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BookshelfState } from '../../reducers';
import { titleAdded } from '../../actions/book.actions';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor(private store: Store<BookshelfState>) { }

  ngOnInit() {
  }

  addTitle(titleEl: HTMLInputElement) {
    const title = titleEl.value;
    const author = 'auth';
    const format = 'ebook';
    this.store.dispatch(titleAdded({ title, author, format }));
    titleEl.value = '';
    titleEl.focus();
  }

}
