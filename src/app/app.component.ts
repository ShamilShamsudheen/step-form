import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StepFormComponent } from './step-form/step-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,StepFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'step-form';
}
