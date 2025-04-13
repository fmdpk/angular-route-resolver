import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { DataService } from '../../core/services/data.service';
import { catchError, delay, finalize, Observable, of } from 'rxjs';
import { Todo } from '../interfaces/todo';
import { HttpErrorResponse } from '@angular/common/http';
import { LoadingService } from '../../core/services/loading.service';

export const dataResolver: ResolveFn<
  Observable<Todo | { error: HttpErrorResponse }>
> = (route, state) => {
  const dataService = inject(DataService);
  const loadingService = inject(LoadingService);
  loadingService.isLoading.set(true);
  return dataService.getData().pipe(
    delay(3000),
    catchError((error: HttpErrorResponse) => {
      console.error('Data fetch error:', error);
      return of({ error: error }); // Returning fallback data
    }),
    finalize(() => {
      loadingService.isLoading.set(false);
    })
  );
};
