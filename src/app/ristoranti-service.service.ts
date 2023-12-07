import { Injectable } from '@angular/core';
import {HttpClient} from  '@angular/common/http';
import { Observable } from 'rxjs';
import { Ristorante } from './model/ristorante';

@Injectable({
  providedIn: 'root'
})
export class RistorantiServiceService {
  private backendUrl = "http://localhost:8080"

  constructor(private http:HttpClient) {}
  dammiRistorantiMigliori():Observable<Ristorante[]>{
    return this.http.get<Ristorante[]>(this.backendUrl + "/ristorantiMigliori")
  }
}
