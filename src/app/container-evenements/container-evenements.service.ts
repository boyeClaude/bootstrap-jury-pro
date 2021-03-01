import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class ContainerEvenementsService {
  apiUrl = environment.baseUrl;

  constructor(private _http: HttpClient) {}

  getEvenementById(id): Observable<any> {
    return this._http.get(`${this.apiUrl}/evenements/${id}`);
  }

  getAllCriteres(): Observable<any[]> {
    return this._http.get<any[]>(`${this.apiUrl}/criteres`);
  }

  getAllJurys(): Observable<any[]> {
    return this._http.get<any[]>(`${this.apiUrl}/jury`);
  }

  getAllCandidats(): Observable<any> {
    return this._http.get<any>(`${this.apiUrl}/candidats`);
  }

  deleteJury(juryId: any): Observable<any> {
    return this._http.delete(`${this.apiUrl}/jury/${juryId}`);
  }

  deleteCritere(critereId: any) {
    return this._http.delete(`${this.apiUrl}/criteres/${critereId}`);
  }

  deleteCandidat(candidatId: any): Observable<any> {
    return this._http.delete<any>(`${this.apiUrl}/candidats/${candidatId}`);
  }
}
