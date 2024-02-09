import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import {
  Actions,
  ActionType,
  ofActionCompleted,
  ofActionDispatched,
} from '@ngxs/store';
import { takeUntil } from 'rxjs/operators';

@Injectable()
export abstract class BaseFacade implements OnDestroy {
  private onDestroySubject$ = new Subject<void>();
  private isLoadingSubject$ = new BehaviorSubject<boolean>(false);

  public get onDestroy$(): Observable<void> {
    return this.onDestroySubject$.asObservable();
  }

  public get isLoading$(): Observable<boolean> {
    return this.isLoadingSubject$.asObservable();
  }

  public get isLoading(): boolean {
    return this.isLoadingSubject$.getValue();
  }

  protected constructor(private actions$: Actions) {}

  protected initBase(): void {
    this.isLoadingSubject$.next(false);
  }

  protected observeLoadingActions(actions: ActionType[]): void {
    this.actions$
      .pipe(ofActionDispatched(...actions), takeUntil(this.onDestroy$))
      .subscribe(() => {
        this.isLoadingSubject$.next(true);
      });

    this.actions$
      .pipe(ofActionCompleted(...actions), takeUntil(this.onDestroy$))
      .subscribe(() => {
        this.isLoadingSubject$.next(false);
      });
  }

  public ngOnDestroy(): void {
    this.onDestroySubject$.next();
    this.onDestroySubject$.complete();
  }
}
