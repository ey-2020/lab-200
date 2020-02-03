import { TodoItem } from './todo-list/models';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';


export class TodoService {

  private items: TodoItem[] = [
    { description: 'Shovel Snow', completed: false },
    { description: 'Stake Driveway', completed: false }
  ];

  private itemsSubject = new BehaviorSubject<TodoItem[]>(this.items);
  // 1. Allows you to get the list of todos.

  getTodoItems() {
    return this.itemsSubject.asObservable();
  }
  // 2. Allows you to add a todo.

  addTodoItem(description: string) {
    this.items = [{ description, completed: false }, ...this.items];
    this.itemsSubject.next(this.items);
  }
  // 3. Lets you get a summary for the dashboard.

  // 4. Lets you mark one as complete.
}
