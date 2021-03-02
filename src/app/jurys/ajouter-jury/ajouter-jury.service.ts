import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class AjouterJuryService {
  apiUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  saveJury(jury) {
    return this.http.post(`${this.apiUrl}/jury`, jury);
  }
}
