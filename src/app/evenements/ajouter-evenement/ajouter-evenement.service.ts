import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class AjouterEvenementService {
  private apiUrl = environment.baseUrl;

  constructor(private _http: HttpClient) {}

  addEvenement(evenement: any): Observable<any> {
    return this._http.post<any>(`${this.apiUrl}/evenements`, evenement);
  }

  getEventById(id) {
    return this._http.get(`${this.apiUrl}/evenements/${id}`);
  }

  updateEvenement() {}
}
