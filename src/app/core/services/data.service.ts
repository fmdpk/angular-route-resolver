import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Todo } from '../../shared/interfaces/todo';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private _http = inject(HttpClient);

  getData() {
    return this._http.get<Todo>('https://jsonplaceholder.typicode.com/todos/1');
  }
}
