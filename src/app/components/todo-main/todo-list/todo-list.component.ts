import { Component, input, model, output, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Todo } from '../../../interfaces/todo.interface';
import { TodoService } from '../../../service/todo.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-todo-list',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  todo = input<Todo>();
  isEditing = signal(false);
  editText = model('');

  constructor(private todoService: TodoService) { }

  startEdit(): void {
    this.isEditing.set(true);
    this.editText.set(this.todo()?.title!);
  }

  saveEdit(): void {
    if (this.isEditing() && this.editText().trim()) {
      const updatedTodo: Todo =
      {
        ...this.todo(),
        id: this.todo()?.id!,
        completed: this.todo()?.completed ?? false,
        title: this.editText(),
        date: new Date()
      }
      this.todoService.editTodo(updatedTodo);
      this.isEditing.set(false);
    }
  }


  toggleTodo(id: number): void {
    let todosList = this.todoService.todosList();
    const todoIndex = todosList.findIndex(todo => todo.id === id);
    if (todoIndex !== -1) {
      const updatedTodo: Todo = {
        ...todosList[todoIndex],
        completed: !todosList[todoIndex].completed
      }
      this.todoService.editTodo(updatedTodo);
    }
  }


  deleteTodo(id: number): void {
    this.todoService.deleteTodo(id);
  }

}
