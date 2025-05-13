import { Component, effect, signal } from '@angular/core';
import { FilterType } from '../../../interfaces/todo.interface';
import { TodoService } from '../../../service/todo.service';

@Component({
  selector: 'app-todo-footer',
  imports: [],
  templateUrl: './todo-footer.component.html',
  styleUrl: './todo-footer.component.scss'
})
export class TodoFooterComponent {
remaining = signal(0);
completed = signal(0);
allItems = signal(0);
hasCompleted = signal(false);
filter=signal<FilterType>(FilterType.all);
filterEnum = FilterType
constructor(private todoService: TodoService) {
  effect(() => {
    this.remaining.set(this.todoService.todosList().filter(todo => !todo.completed).length);
    this.completed.set(this.todoService.todosList().filter(todo => todo.completed).length);
    this.allItems.set(this.todoService.todosList().length);
    this.hasCompleted.set(this.todoService.todosList().some(todo => todo.completed));
    this.filter.set(this.todoService.filter());
  });
}


clearCompleted(){
  this.todoService.clearCompleted();
  this.todoService.filter.set(FilterType.all);
}
}
