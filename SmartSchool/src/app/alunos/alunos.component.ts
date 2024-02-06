import { Component, OnInit } from '@angular/core';
import { Aluno } from '../models/Aluno';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public titulo = 'Alunos';
  public textSimple: string = "";
  public alunoSelecionado: Aluno = null as any;

  alunos = [
    { id: 1, nome: 'Marta', sobrenome: 'Kent', telefone: 332255 },
    { id: 2, nome: 'Paula', sobrenome: 'Isabela', telefone: 332255 },
    { id: 3, nome: 'Laura', sobrenome: 'Antonia', telefone: 332255 },
    { id: 4, nome: 'Luiza', sobrenome: 'Maria', telefone: 332255 },
    { id: 5, nome: 'Lucas', sobrenome: 'Machado', telefone: 332255 },
    { id: 6, nome: 'Pedro', sobrenome: 'Alvares', telefone: 332255 },
    { id: 7, nome: 'Paulo', sobrenome: 'José', telefone: 332255 }
  ];

  alunoSelect(aluno: Aluno){
    this.alunoSelecionado = aluno;
  }

  voltar() {
    this.alunoSelecionado = null as any;
  }

  constructor() { }

  ngOnInit() {
  }

}
