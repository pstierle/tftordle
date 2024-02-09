import { ChampionGuessSelectors } from './../../features/champion-guess/state/champion-guess.selectors';
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AppRoutes } from '../enums/app-routes.enum';

@Injectable()
export class TraitGuessGuard implements CanActivate {
  constructor(private store: Store, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const championGuessFinished = this.store.selectSnapshot(
      ChampionGuessSelectors.isFinished
    );
    if (championGuessFinished) {
      return true;
    } else {
      this.router.navigate([AppRoutes.CHAMPION_GUESS]);
      return false;
    }
  }
}
