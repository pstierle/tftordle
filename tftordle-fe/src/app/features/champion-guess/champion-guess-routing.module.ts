import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChampionGuessComponent } from './components/champion-guess/champion-guess.component';

const routes: Routes = [{ path: '', component: ChampionGuessComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChampionGuessRoutingModule {}
