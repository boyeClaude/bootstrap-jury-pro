import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class UpdateCritereService {
  apiUrl = environment.baseUrl;
  constructor(private http: HttpClient) {}

  getCritereById(id) {
    return this.http.get(`${this.apiUrl}/criteres/${id}`);
  }

  updateCritere(data) {
    return this.http.post(`${this.apiUrl}/criteres`, data);
  }
}
