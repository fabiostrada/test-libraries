import { HttpClient } from '@angular/common/http';
import { Injectable, Optional, SkipSelf } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './models/user.model';

@Injectable({
  deps: [[new Optional(), new SkipSelf(), ApiService], HttpClient],
  providedIn: 'root',
  useFactory: (instance: ApiService | null, httpClient: HttpClient) => instance || new ApiService(httpClient),
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  public users(): Observable<Array<User>> {
      return this.httpClient.get<Array<User>>('https://gorest.co.in/public/v2/users');
  }

}
