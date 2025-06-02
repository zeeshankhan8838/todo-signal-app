import { Injectable, Signal, signal } from '@angular/core';
import { FilterType, Todo } from '../interfaces/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todosList= signal<Todo[]>([]);
  filter= signal<FilterType>(FilterType.ALL);

  constructor() { }

  addTodo(newTodo: string): void {
    let todoOject={
      id: Date.now(),
      title: newTodo,
      completed: false,
      date: new Date()
    }
   const updatedArray= [todoOject, ...this.todosList()]
    this.todosList.set(updatedArray);    
  }

  getTodoFilterList(filter: FilterType): Todo[] {
    if(filter === FilterType.ALL){
      return this.todosList();
    }
    else if(filter === FilterType.COMPLETED){
      return  this.todosList().filter(todo=>todo.completed)
    }
    else {
      return this.todosList().filter(todo=>!todo.completed)
    }

  }

  editTodo(updatedTodo: Todo): void {
    const index = this.todosList().findIndex(t => t.id === updatedTodo.id);
    if (index !== -1) {
      let todoListCopy=[...this.todosList()]
      todoListCopy.splice(index,1,updatedTodo)
      this.todosList.set(todoListCopy)    
    }
  }

  deleteTodo(id: number): void {
    this.todosList.update(todos => todos.filter(todo => todo.id !== id));
  }
  
  clearCompleted(){
    this.todosList.update(todos => todos.filter(todo => !todo.completed));
  }
  
}
