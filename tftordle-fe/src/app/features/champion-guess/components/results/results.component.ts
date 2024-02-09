import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ResultsFacade } from './facade/results.facade';
import { Trait } from 'src/app/shared/models/trait';
import { Observable, map } from 'rxjs';
import { ChampionGuessCheck } from 'src/app/shared/models/champion-guess-check';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
  providers: [ResultsFacade],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultsComponent implements OnInit {
  public get sorted$(): Observable<ChampionGuessCheck[]> {
    return this.facade.guessChecks$.pipe(
      map((a: any) => [].concat(a).reverse())
    );
  }

  constructor(private facade: ResultsFacade) {}

  public ngOnInit(): void {
    this.facade.init();
  }

  public getTraitNames(traits: Trait[]): string {
    return traits.map((t) => t.name).join(', ');
  }
}
