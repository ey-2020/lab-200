import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookshelfComponent } from './bookshelf.component';
import { BookComponent } from './components/book/book.component';
import { CollectionComponent } from './components/collection/collection.component';
import { StoreModule } from '@ngrx/store';
import { featureName, reducers } from './reducers';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [BookshelfComponent, BookComponent, CollectionComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(featureName, reducers),
  ],
  exports: [BookshelfComponent]
})
export class BookshelfModule { }
