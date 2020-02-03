import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-enry',
  templateUrl: './todo-enry.component.html',
  styleUrls: ['./todo-enry.component.css']
})
export class TodoEnryComponent implements OnInit {

  @Output() itemAdded = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  addItem(item: HTMLInputElement) {
    const description = item.value;
    this.itemAdded.emit(description);
    item.value = '';
    item.focus();
  }

}
