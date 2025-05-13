import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoFilterButtonsComponent } from './todo-filter-buttons.component';

describe('TodoFilterButtonsComponent', () => {
  let component: TodoFilterButtonsComponent;
  let fixture: ComponentFixture<TodoFilterButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoFilterButtonsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoFilterButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
