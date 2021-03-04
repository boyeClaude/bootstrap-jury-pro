import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class LoginJuryService {
  apiUrl = environment.baseUrl;
  constructor(private http: HttpClient) {}

  getJuryByTelephone(tel): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/jury/telephone/${tel}`);
  }
}
