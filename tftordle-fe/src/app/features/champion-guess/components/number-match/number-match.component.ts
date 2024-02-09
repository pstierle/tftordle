import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NumberMatch } from 'src/app/shared/models/champion-guess-check';

@Component({
  selector: 'app-number-match',
  templateUrl: './number-match.component.html',
  styleUrls: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NumberMatchComponent {
  public numberMatch = NumberMatch;

  @Input()
  public value!: any;

  @Input()
  public match!: NumberMatch;
}
