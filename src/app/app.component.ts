import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { TodoMainComponent } from './components/todo-main/todo-main.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent,TodoMainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'todo-app-signal';
}
