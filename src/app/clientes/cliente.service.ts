import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private urlEndPoint:string ='http://localhost:8080/clientes/';
  constructor(private http: HttpClient) { }

  getClientes(): Observable<Cliente[]>  {
    return this.http.get<Cliente[]>(this.urlEndPoint);
  }
}
