import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, OnDestroy, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-emitting',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './emitting.component.html',
  styleUrl: './emitting.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmittingComponent implements OnInit, OnDestroy {
  readonly name = input.required<string>();
  readonly test = interval(1000).pipe(takeUntilDestroyed()).subscribe(
    x => console.log(this.name() + ' ' + x)
  );

  ngOnInit(): void {
    console.log('EmittingComponent init: ' + this.name());
  }

  ngOnDestroy(): void {
    console.log('EmittingComponent destroyed: ' + this.name());
  } 
}
