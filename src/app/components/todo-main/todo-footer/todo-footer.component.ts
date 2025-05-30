import { Component, computed, effect, inject, signal } from '@angular/core';
import { FilterType } from '../../../interfaces/todo.interface';
import { TodoService } from '../../../service/todo.service';
import { CountPipe } from '../pipes/count.pipe';

@Component({
  selector: 'app-todo-footer',
  imports: [CountPipe],
  templateUrl: './todo-footer.component.html',
  styleUrl: './todo-footer.component.scss'
})
export class TodoFooterComponent {
  todoService = inject(TodoService)
  todos = this.todoService.todosList

  remaining = computed(() => this.todoService.todosList().filter(todo => !todo.completed).length);
  completed = computed(() => this.todoService.todosList().filter(todo => todo.completed).length);
  allItems = computed(() => this.todos().length);
  hasCompleted = computed(() => this.todoService.todosList().some(todo => todo.completed));

  filter = signal<FilterType>(FilterType.all);
  filterEnum = FilterType

  constructor() {
    effect(() => {
      this.filter.set(this.todoService.filter());
    });
  }

  clearCompleted() {
    this.todoService.clearCompleted();
    this.todoService.filter.set(FilterType.all);
  }

}
