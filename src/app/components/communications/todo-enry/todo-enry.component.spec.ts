import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoEnryComponent } from './todo-enry.component';

describe('TodoEnryComponent', () => {
  let component: TodoEnryComponent;
  let fixture: ComponentFixture<TodoEnryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoEnryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoEnryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
