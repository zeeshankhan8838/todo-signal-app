import { Component, input, output } from '@angular/core';
import { FilterType } from '../../../interfaces/todo.interface';
import { CountPipe } from '../pipes/count.pipe';

@Component({
  selector: 'app-todo-filter-buttons',
  imports: [],
  templateUrl: './todo-filter-buttons.component.html',
  styleUrl: './todo-filter-buttons.component.scss'
})
export class TodoFilterButtonsComponent {
  currentFilter = input(FilterType.all);
  filterChange = output<FilterType>();
  filterEnum=FilterType

   isActive(filterType:FilterType){
    return this.currentFilter()===filterType
  }
  
}
