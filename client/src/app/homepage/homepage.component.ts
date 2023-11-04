import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  todoItems: string[] = ['Buy groceries', 'Finish project', 'Exercise'];
  newTodo: string = '';

  addTodo() {
    if (this.newTodo.trim() !== '') {
      this.todoItems.push(this.newTodo);
      this.newTodo = ''; // Clear the input field
    }
  }

  removeTodo(item: string) {
    const index = this.todoItems.indexOf(item);
    if (index !== -1) {
      this.todoItems.splice(index, 1);
    }
  }
}
