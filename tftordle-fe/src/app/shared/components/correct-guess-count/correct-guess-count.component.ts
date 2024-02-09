import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-correct-guess-count',
  templateUrl: './correct-guess-count.component.html',
  styleUrls: [],
})
export class CorrectGuessCountComponent {
  @Input()
  public count!: number;
}
