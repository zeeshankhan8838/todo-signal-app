import { Component, input, output } from '@angular/core';
import { FilterType } from '../../../interfaces/todo.interface';

@Component({
  selector: 'app-todo-filter-buttons',
  imports: [],
  templateUrl: './todo-filter-buttons.component.html',
  styleUrl: './todo-filter-buttons.component.scss'
})
export class TodoFilterButtonsComponent {
  currentFilter = input(FilterType.ALL);
  filterChange = output<FilterType>();
  filterEnum=FilterType

   isActive(filterType:FilterType){
    return this.currentFilter()===filterType
  }
  
}
