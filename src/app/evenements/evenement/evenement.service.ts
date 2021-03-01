import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class EvenementService {
  apiUrl = environment.baseUrl;
  constructor(private http: HttpClient) {}

  getAllEvenements(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/evenements/participant`);
  }
}
