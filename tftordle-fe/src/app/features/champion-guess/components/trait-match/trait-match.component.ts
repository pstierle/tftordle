import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SomeMatch } from 'src/app/shared/models/champion-guess-check';

@Component({
  selector: 'app-trait-match',
  templateUrl: './trait-match.component.html',
  styleUrls: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TraitMatchComponent {
  public traitMatch = SomeMatch;

  @Input()
  public value!: any;

  @Input()
  public match!: SomeMatch;
}
