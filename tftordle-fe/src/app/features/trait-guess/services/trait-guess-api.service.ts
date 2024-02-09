import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { endpoints } from 'src/app/shared/constants/endpoints.contants';
import { BaseApiService } from 'src/app/shared/services/base-api.service';
import { HttpClient } from '@angular/common/http';
import { Champion } from 'src/app/shared/models/champion';
import { TraitGuessCheck } from 'src/app/shared/models/trait-guess-check';
import { TraitGuessCheckRequestBody } from 'src/app/shared/models/trait-guess-check-request-body';
import { TraitGuessSameTraitClue } from 'src/app/shared/models/trait-guess-same-trait-clue';
import { TraitGuessStatClue } from 'src/app/shared/models/trait-guess-stat-clue';
import { Trait } from 'src/app/shared/models/trait';
import { TraitGuessQueryTraitsBody } from 'src/app/shared/models/trait-guess-query-traits-request-body';
import { LastGuessChampion } from 'src/app/shared/models/last-guess-champion';
import { CorrectGuessCount } from 'src/app/shared/models/correct-guess-count';
import { VictoryData } from 'src/app/shared/models/victory-data';

@Injectable({
  providedIn: 'root',
})
export class TraitGuessApiService extends BaseApiService {
  constructor(private http: HttpClient) {
    super(endpoints.traitGuess.basePath);
  }

  public getGuessChampion(): Observable<Champion> {
    return this.http.get<Champion>(
      this.constructEndpoint(endpoints.traitGuess.guessChampion)
    );
  }

  public getLastGuessChampion(): Observable<LastGuessChampion> {
    return this.http.get<LastGuessChampion>(
      this.constructEndpoint(endpoints.traitGuess.lastGuessChampion)
    );
  }

  public getCorrectGuessCount(): Observable<CorrectGuessCount> {
    return this.http.get<CorrectGuessCount>(
      this.constructEndpoint(endpoints.traitGuess.correctGuessCount)
    );
  }

  public getSameTraitClue(): Observable<TraitGuessSameTraitClue> {
    return this.http.get<TraitGuessSameTraitClue>(
      this.constructEndpoint(endpoints.traitGuess.sameTraitClue)
    );
  }

  public getStatClue(): Observable<TraitGuessStatClue> {
    return this.http.get<TraitGuessStatClue>(
      this.constructEndpoint(endpoints.traitGuess.statClue)
    );
  }

  public getVictoryData(): Observable<VictoryData<Trait[]>> {
    return this.http.get<VictoryData<Trait[]>>(
      this.constructEndpoint(endpoints.championGuess.victoryData)
    );
  }

  public queryTraits(data: TraitGuessQueryTraitsBody): Observable<Trait[]> {
    return this.http.post<Trait[]>(
      `${this.constructEndpoint(endpoints.traitGuess.queryTraits)}`,
      {
        ...data,
      }
    );
  }

  public checkGuess(
    data: TraitGuessCheckRequestBody
  ): Observable<TraitGuessCheck> {
    return this.http.post<TraitGuessCheck>(
      this.constructEndpoint(endpoints.traitGuess.checkGuess),
      {
        ...data,
      }
    );
  }
}
