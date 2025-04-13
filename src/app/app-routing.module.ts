import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompAComponent } from './components/comp-a/comp-a.component';
import { CompBComponent } from './components/comp-b/comp-b.component';
import { dataResolver } from './shared/resolvers/data.resolver';

const routes: Routes = [
  {
    path: 'comp-a',
    loadComponent: () =>
      import('./components/comp-a/comp-a.component').then(
        (c) => c.CompAComponent
      ),
    resolve: { data: dataResolver },
  },
  {
    path: 'comp-b',
    loadComponent: () =>
      import('./components/comp-b/comp-b.component').then(
        (c) => c.CompBComponent
      ),
  },
  {
    path: '',
    redirectTo: 'comp-b',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
