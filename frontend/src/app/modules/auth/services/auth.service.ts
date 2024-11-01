import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { PATHS } from '../../../../shared/common/paths.model';
import { SessionService } from '../../../../shared/services/session.service';
import { IRegisterData, ISessionData } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private sessionService: SessionService,
  ) {}

  login(email: string, password: string): Observable<ISessionData> {
    return this.http
      .post<ISessionData>(`${this.apiUrl}/api${PATHS.INTRANET.Auth}/login`, {
        // 'http://localhost:5001/api/auth/login
        email,
        password,
      })
      .pipe(
        tap((sessionData: ISessionData) => {
          this.sessionService.saveSession({
            token: sessionData.token,
            user: sessionData.user,
          });
          //this.permissionService.setToken(sessionData.token);
        }),
      );
  }

  register(registerData: IRegisterData): Observable<any> {
    return this.http.post<any>(
      `${this.apiUrl}/api${PATHS.INTRANET.Auth}/register`,
      registerData,
    );
  }
}
