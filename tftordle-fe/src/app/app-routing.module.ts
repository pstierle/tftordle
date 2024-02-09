import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutes } from './shared/enums/app-routes.enum';
import { TraitGuessGuard } from './shared/guards/trait-guess.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: AppRoutes.CHAMPION_GUESS,
    pathMatch: 'full',
  },
  {
    path: AppRoutes.TRAIT_GUESS,
    loadChildren: () =>
      import('./features/trait-guess/trait-guess.module').then(
        (m) => m.TraitGuessModule
      ),
    canActivate: [TraitGuessGuard],
  },
  {
    path: AppRoutes.CHAMPION_GUESS,
    loadChildren: () =>
      import('./features/champion-guess/champion-guess.module').then(
        (m) => m.ChampionGuessModule
      ),
  },
  {
    path: '**',
    redirectTo: AppRoutes.CHAMPION_GUESS,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
