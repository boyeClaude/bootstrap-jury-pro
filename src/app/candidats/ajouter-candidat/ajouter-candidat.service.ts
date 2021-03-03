import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class AjouterCandidatService {
  apiUrl = environment.baseUrl;
  constructor(private http: HttpClient) {}

  addCandidat(candidat: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/candidats`, candidat);
  }
}
