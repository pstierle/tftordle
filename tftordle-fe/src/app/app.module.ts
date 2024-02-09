import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';
import { NgxMaskModule } from 'ngx-mask';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { appState } from './state/app.store';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './shared/interceptors/auth.interceptor';
import { AppInitService } from './core/services/app-init.service';
import { TraitGuessGuard } from './shared/guards/trait-guess.guard';

@NgModule({
  declarations: [AppComponent],
  imports: [
    NgxsModule.forRoot(appState, {
      developmentMode: !environment.production,
    }),
    NgxMaskModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    TraitGuessGuard,
    {
      provide: APP_INITIALIZER,
      useFactory: AppInitService.appInitializer,
      deps: [AppInitService],
      multi: true,
    },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
