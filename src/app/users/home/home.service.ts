import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class HomeService {
  apiUrl = environment.baseUrl;
  constructor(private http: HttpClient) {}

  getCriteresForEachEvent(id) {
    return this.http.get(`${this.apiUrl}/criteres/evenement/${id}`);
  }

  getCandidatsForEcahEvent(id) {
    return this.http.get(`${this.apiUrl}/candidats/evenement/${id}`);
  }
}
