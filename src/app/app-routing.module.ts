import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompAComponent } from './components/comp-a/comp-a.component';
import { CompBComponent } from './components/comp-b/comp-b.component';
import { dataResolver } from './shared/resolvers/data.resolver';

const routes: Routes = [
  {
    path: 'comp-a',
    component: CompAComponent,
    resolve: { data: dataResolver },
  },
  {
    path: 'comp-b',
    component: CompBComponent,
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
