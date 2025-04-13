import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrl: './comp-b.component.scss',
  standalone: true,
  imports: [RouterModule],
})
export class CompBComponent {}
