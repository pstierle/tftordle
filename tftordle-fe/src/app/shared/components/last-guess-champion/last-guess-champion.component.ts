import { Component, Input } from '@angular/core';
import { LastGuessChampion } from '../../models/last-guess-champion';

@Component({
  selector: 'app-last-guess-champion',
  templateUrl: './last-guess-champion.component.html',
  styleUrls: ['./last-guess-champion.component.scss'],
})
export class LastGuessChampionComponent {
  @Input()
  public lastGuessChampion?: LastGuessChampion | null;
}
