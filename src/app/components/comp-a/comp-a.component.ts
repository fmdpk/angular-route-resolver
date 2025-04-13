import { Component, computed, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingService } from '../../core/services/loading.service';

@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrl: './comp-a.component.scss',
})
export class CompAComponent implements OnInit {
  private route: ActivatedRoute = inject(ActivatedRoute);
  public loadingService: LoadingService = inject(LoadingService);

  data = this.route.snapshot.data['data'];
  isLoading = computed(() => this.loadingService.isLoading());

  ngOnInit(): void {
    // console.log(this.data);
  }
}
