import { environment } from './../../../environments/environment';
export abstract class BaseApiService {
  constructor(private routePrefix: string) {}

  public constructEndpoint(endpoint: string): string {
    return `${environment.apiUrl}/${this.routePrefix}/${endpoint}`;
  }
}
