import { Component, effect, model } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoFilterButtonsComponent } from './todo-filter-buttons/todo-filter-buttons.component';
import { FilterType, Todo } from '../../interfaces/todo.interface';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoService } from '../../service/todo.service';

@Component({
  selector: 'app-todo-main',
  imports: [FormsModule, ReactiveFormsModule, TodoFilterButtonsComponent, TodoFooterComponent, TodoListComponent],
  templateUrl: './todo-main.component.html',
  styleUrl: './todo-main.component.scss'
})
export class TodoMainComponent {
  todosList: Todo[] = [];
  newTodo = model('');
  filter: FilterType = FilterType.all;
  filterEnum = FilterType

  constructor(private todoService: TodoService) {
    effect(() => {
      this.todosList=this.todoService.getTodoFilterList(this.todoService.filter());
      this.filter = this.todoService.filter();
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
    this.todosList=this.todoService.getTodoFilterList(filter);
  } 

}
