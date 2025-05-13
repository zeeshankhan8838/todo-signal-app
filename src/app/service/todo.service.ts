import { Injectable, Signal, signal } from '@angular/core';
import { FilterType, Todo } from '../interfaces/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todosList= signal<Todo[]>([]);
  filter= signal<FilterType>(FilterType.all);

  constructor() { }

  addTodo(newTodo: string): void {
      this.todosList.update(todos => [{
        id: Date.now(),
        title: newTodo,
        completed: false,
        date: new Date()
      }, ...todos]);    
  }

  getTodoFilterList(filter: FilterType): Todo[] {
    return this.todosList().filter(todo => {
      switch (filter) {
        case FilterType.all:
          return true;
        case FilterType.active:
          return !todo.completed;
        case FilterType.completed:
          return todo.completed;
        default:
          return true;
      }
    });
  }

  editTodo(updatedTodo: Todo): void {
    const index = this.todosList().findIndex(t => t.id === updatedTodo.id);
    if (index !== -1) {
      this.todosList.update(todos => [...todos.slice(0, index), updatedTodo, ...todos.slice(index + 1)]);
    }
  }

  deleteTodo(id: number): void {
    this.todosList.update(todos => todos.filter(todo => todo.id !== id));
  }
  
  clearCompleted(){
    this.todosList.update(todos => todos.filter(todo => !todo.completed));
  }
  
  

}
