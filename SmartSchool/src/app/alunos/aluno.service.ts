import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get("");
  }

  getById(id: number) {
    return this.http.get("url/${id}");
  }
}
