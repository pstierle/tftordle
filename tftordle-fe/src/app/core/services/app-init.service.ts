import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppInitService {
  constructor() {}

  public static appInitializer(
    appInitService: AppInitService
  ): () => Promise<any> {
    return (): Promise<any> => appInitService.init();
  }

  public async init(): Promise<void> {}
}
