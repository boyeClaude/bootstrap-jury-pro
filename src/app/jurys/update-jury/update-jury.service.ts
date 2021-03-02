import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class UpdateJuryService {
  apiUrl = environment.baseUrl;
  constructor(private http: HttpClient) {}

  getJuryById(id) {
    return this.http.get(`${this.apiUrl}/jury/${id}`);
  }

  updateJury(jury) {
    return this.http.post(`${this.apiUrl}/jury`, jury);
  }
}
