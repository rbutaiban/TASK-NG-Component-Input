import { Component } from '@angular/core';
import { pets } from '../data/pets';
import { CatComponent } from './cat/cat.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CatComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TASK-NG-Passing-Data';
  pets = pets;
}
