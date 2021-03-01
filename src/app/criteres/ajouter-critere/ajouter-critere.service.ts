import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class AjouterCritereService {
  apiUrl = environment.baseUrl;
  constructor(private http: HttpClient) {}

  ajouterCritere(critere): Observable<any> {
    return this.http.post(`${this.apiUrl}/criteres`, critere);
  }
}
