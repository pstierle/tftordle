import { Observable, combineLatest, map } from 'rxjs';
import { ButtonType } from './../../../../shared/enums/button-type.enum';
import { Component, OnInit } from '@angular/core';
import { TraitSearchFacade } from './facade/trait-search.facade';
import { Trait } from 'src/app/shared/models/trait';

@Component({
  selector: 'app-trait-search',
  templateUrl: './trait-search.component.html',
  styleUrls: ['./trait-search.component.scss'],
  providers: [TraitSearchFacade],
})
export class TraitSearchComponent implements OnInit {
  public buttonType = ButtonType;

  public get selectedTrait$(): Observable<Trait | null> {
    return this.traitSearchFacade.selectedTrait$;
  }

  public get isFinished$(): Observable<boolean> {
    return this.traitSearchFacade.isFinished$;
  }

  public get queryResults$(): Observable<Trait[]> {
    return combineLatest([
      this.traitSearchFacade.queryResults$,
      this.traitSearchFacade.guessChecks$,
    ]).pipe(
      map((data) => {
        const queryResults = data[0];
        const guessChecks = data[1];
        return queryResults.filter(
          (trait) => !guessChecks.find((c) => c.guess.id === trait.id)
        );
      })
    );
  }

  public get isLoading$(): Observable<boolean> {
    return this.traitSearchFacade.isLoading$;
  }

  public query: string = '';

  constructor(private traitSearchFacade: TraitSearchFacade) {}

  ngOnInit(): void {
    this.traitSearchFacade.init();
  }

  public handleChange(): void {
    this.traitSearchFacade.queryTraits(this.query);
  }

  public selectTrait(trait: Trait): void {
    this.traitSearchFacade.selectTrait(trait);
    this.query = '';
  }

  public checkGuess(): void {
    this.traitSearchFacade.checkGuess();
  }

  public handleClickOutside(): void {
    this.query = '';
    this.traitSearchFacade.handleClickOutside();
  }
}
