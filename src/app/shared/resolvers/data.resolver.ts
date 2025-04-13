import { inject, PLATFORM_ID } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { DataService } from '../../core/services/data.service';
import {
  catchError,
  EMPTY,
  finalize,
  Observable,
  of,
  switchMap,
  timer,
} from 'rxjs';
import { Todo } from '../interfaces/todo';
import { HttpErrorResponse } from '@angular/common/http';
import { LoadingService } from '../../core/services/loading.service';
import { isPlatformBrowser } from '@angular/common';

export const dataResolver: ResolveFn<
  Observable<Todo | { error: HttpErrorResponse }>
> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const dataService = inject(DataService);
  const loadingService = inject(LoadingService);
  loadingService.isLoading.set(true);
  const platformId = inject(PLATFORM_ID);
  const fetchData$ = dataService.getData().pipe(
    catchError((error: HttpErrorResponse) => {
      console.error('Data fetch error:', error);
      return of({ error });
    }),
    finalize(() => {
      loadingService.isLoading.set(false);
    })
  );

  // If running on the browser, get data with delay by 3 seconds
  // If running on the server, return an EMPTY object from 'rxjs' as observable
  if (isPlatformBrowser(platformId)) {
    return timer(3000).pipe(switchMap(() => fetchData$));
  } else {
    return of(EMPTY);
  }
};
