import { Component, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './components/loading/loading.component';
import { EmittingComponent } from './components/emitting/emitting.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, LoadingComponent, EmittingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly loading: WritableSignal<boolean> = signal(true);
}
