import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PredService {

  private apiUrl = 'http://localhost:5000/predict'; // L'URL de votre API Flask

  constructor(private http: HttpClient) { }

  predict(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}