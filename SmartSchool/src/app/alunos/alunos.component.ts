import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  titulo = 'Alunos';

  alunos = [
    { nome: 'Marta' },
    { nome: 'Paula' },
    { nome: 'Laura' },
    { nome: 'Luiza' },
    { nome: 'Lucas' },
    { nome: 'Pedro' },
    { nome: 'Paulo' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
