import { Component } from '@angular/core';
import { Todo } from './todo';
import { TodoDataService } from './todo-data.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [TodoDataService]
})

export class AppComponent {

    todos: Todo[] = [];
    newTodo: Todo = new Todo();

    constructor(private todoDataService: TodoDataService) {
    }
    ngOnInit() {
        this.todoDataService.getAllTodos()
            .subscribe( todos => this.todos = todos);
    }

    addTodo() {
        this.todoDataService.addTodo(this.newTodo)
            .subscribe(newTodo => this.todos = this.todos.concat(newTodo))
        this.newTodo.name = '';
    }

    toggleTodoComplete(todo: Todo) {
        this.todoDataService.toggleTodoComplete(todo)
            .subscribe(updatedTodo => todo = updatedTodo);
        console.debug('debug: Update: ', todo);
    }

    removeTodo(todo: Todo) {
        this.todoDataService.deleteTodoById(todo.id)
            .subscribe((_) => this.todos = this.todos.filter((t) => t.id !== todo.id));
    }

    // getTodos() {
    //   this.todoDataService.getAllTodos()
    //   //.subscribe((data: Todo[]) => this.todos = data);
    //   //return this.todoDatangService.getAllTodos();
    // }
}
