import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class UpdateEvenementService {
  apiUrl = environment.baseUrl;
  constructor(private http: HttpClient) {}

  getEventById(id) {
    return this.http.get(`${this.apiUrl}/evenements/${id}`);
  }

  updateEvenement(evenement) {
    return this.http.post(`${this.apiUrl}/evenements`, evenement);
  }
}
