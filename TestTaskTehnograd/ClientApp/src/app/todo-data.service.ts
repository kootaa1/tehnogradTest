import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

    todos: Todo[] = [];

    constructor(private api: ApiService) { }

    addTodo(todo: Todo): Observable<Todo> {
        return this.api.createTodo(todo);
    }

    deleteTodoById(id: number, ): Observable<Todo> {
        return this.api.deleteTodoById(id);
    }

    updateTodoById(todo: Todo): Observable<Todo> {
        return this.api.updateTodo(todo);
    }

    getAllTodos(): Observable<Todo[]> {
        let result = this.api.getAllTodos();
        console.debug();
        return result;
    }

    getTodoById(id: number): Observable<Todo> {
        return this.api.getTodoById(id);
    }

    toggleTodoComplete(todo: Todo) {
        todo.isComplete = !todo.isComplete;
        return this.api.updateTodo(todo);
    }
}

