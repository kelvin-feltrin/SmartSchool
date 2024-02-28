import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  baseUrl = `${environment.UrlPrincipal}/api/aluno`;

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(`${this.baseUrl}`);
  }

  getById(id: number) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}
