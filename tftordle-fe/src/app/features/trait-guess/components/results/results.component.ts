import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ResultsFacade } from './facade/results.facade';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
  providers: [ResultsFacade],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultsComponent implements OnInit {
  public guessChecks$ = this.resultsFacade.guessChecks$;

  constructor(private resultsFacade: ResultsFacade) {}

  ngOnInit(): void {
    this.resultsFacade.init();
  }
}
