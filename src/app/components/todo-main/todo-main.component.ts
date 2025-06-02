import { Component, effect, inject, model } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoFilterButtonsComponent } from './todo-filter-buttons/todo-filter-buttons.component';
import { FilterType, Todo } from '../../interfaces/todo.interface';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoService } from '../../service/todo.service';

@Component({
  selector: 'app-todo-main',
  imports: [FormsModule, ReactiveFormsModule, TodoFilterButtonsComponent, TodoFooterComponent, TodoItemComponent],
  templateUrl: './todo-main.component.html',
  styleUrl: './todo-main.component.scss'
})
export class TodoMainComponent {

  todoService=inject(TodoService)
  todosList: Todo[] = [];
  newTodo = model('');
  filterSignal = this.todoService.filter;
  filterEnum = FilterType

  constructor() {
    effect(() => {
      this.todosList=this.todoService.getTodoFilterList(this.todoService.filter());
    });
  }

  addTodo(): void {
    if (this.newTodo().trim()) {
      this.todoService.addTodo(this.newTodo());
      this.newTodo.set('');
    }
  }

   setFilter(filter: any): void {
    this.todoService.filter.set(filter);
  } 

  get isTodoListEmpty(): boolean {
    return this.filterSignal() === this.filterEnum.ALL && this.todosList.length === 0;
  }

  

}
