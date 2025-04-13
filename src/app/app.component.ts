import { Component, computed, inject } from '@angular/core';
import { LoadingService } from './core/services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private _loadingService: LoadingService = inject(LoadingService);

  isLoading = computed(() => this._loadingService.isLoading());
  title = 'test-route';
}
