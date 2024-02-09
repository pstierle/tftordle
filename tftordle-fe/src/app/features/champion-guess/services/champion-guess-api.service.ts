import { ChampionGuessQueryChampionsBody } from '../../../shared/models/champion-guess-query-champions-request-body';
import { Observable, map } from 'rxjs';
import { Injectable } from '@angular/core';
import { endpoints } from 'src/app/shared/constants/endpoints.contants';
import { BaseApiService } from 'src/app/shared/services/base-api.service';
import { HttpClient } from '@angular/common/http';
import { Champion } from 'src/app/shared/models/champion';
import { LastGuessChampion } from 'src/app/shared/models/last-guess-champion';
import { ChampionGuessCheckRequest } from 'src/app/shared/models/champion-guess-check-request';
import { ChampionGuessCheck } from 'src/app/shared/models/champion-guess-check';
import { CorrectGuessCount } from 'src/app/shared/models/correct-guess-count';
import { ChampionGuessStatClue } from 'src/app/shared/models/champion-guess-stat-clue';
import { VictoryData } from 'src/app/shared/models/victory-data';

@Injectable({
  providedIn: 'root',
})
export class ChampionGuessApiService extends BaseApiService {
  constructor(private http: HttpClient) {
    super(endpoints.championGuess.basePath);
  }

  public getIconClue(tryCount: number): Observable<string> {
    return this.http
      .post<any>(this.constructEndpoint(endpoints.championGuess.iconClue), {
        tryCount,
      })
      .pipe(map((res) => res.icon));
  }

  public getLastGuessChampion(): Observable<LastGuessChampion> {
    return this.http.get<LastGuessChampion>(
      this.constructEndpoint(endpoints.championGuess.lastGuessChampion)
    );
  }

  public getVictoryData(): Observable<VictoryData<Champion>> {
    return this.http.get<VictoryData<Champion>>(
      this.constructEndpoint(endpoints.championGuess.victoryData)
    );
  }

  public getCorrectGuessCount(): Observable<CorrectGuessCount> {
    return this.http.get<CorrectGuessCount>(
      this.constructEndpoint(endpoints.traitGuess.correctGuessCount)
    );
  }

  public queryChampions(
    data: ChampionGuessQueryChampionsBody
  ): Observable<Champion[]> {
    return this.http.post<Champion[]>(
      `${this.constructEndpoint(endpoints.championGuess.queryChampions)}`,
      {
        ...data,
      }
    );
  }

  public checkGuess(
    data: ChampionGuessCheckRequest
  ): Observable<ChampionGuessCheck> {
    return this.http.post<ChampionGuessCheck>(
      this.constructEndpoint(endpoints.championGuess.checkGuess),
      {
        ...data,
      }
    );
  }

  public getStatClue(): Observable<ChampionGuessStatClue> {
    return this.http.get<ChampionGuessStatClue>(
      this.constructEndpoint(endpoints.championGuess.statClue)
    );
  }
}
