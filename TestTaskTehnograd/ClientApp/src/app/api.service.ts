import { Injectable } from '@angular/core';

import { Todo } from './todo';
import { Observable } from 'rxjs';
import { map, filter, scan, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

    API_URL = 'http://localhost:5001/api';

    constructor(private http: HttpClient) { }


    public getAllTodos(): Observable<Todo[]> {      
        return this.http
            .get(this.API_URL + '/todos')
            .pipe(map(response => response as Todo[]))
            .pipe(catchError(this.handleError));
    }

    public getTodoById(todoId: number): Observable<Todo> {
        return this.http
            .get(this.API_URL + '/todos/' + todoId)
            .pipe(map(response => {
                return new Todo(response);
            }))
            .pipe(catchError(this.handleError));
    }

    public createTodo(todo: Todo): Observable<Todo> {
        return this.http
            .post(this.API_URL + '/todos', todo)
            .pipe(map(response => {
                return new Todo(response);
            }))
            .pipe(catchError(this.handleError));
    }

    public updateTodo(todo: Todo): Observable<Todo> {
        return this.http
            .put(this.API_URL + '/todos/' + todo.id, todo)
            .pipe(map(response => {
                return new Todo(response);
            }))
            .pipe(catchError(this.handleError));
    }

    public deleteTodoById(todoId: number): Observable<null> {
        return this.http
            .delete(this.API_URL + '/todos/' + todoId)
            .pipe(map(response => null))
            .pipe(catchError(this.handleError));
    }

    private handleError(error: Response | any) {
        console.error('ApiService::handleError', error);
        return Observable.throw(error);
    }
}
