import { Component, OnInit, TemplateRef } from '@angular/core';
import { Professor } from '../models/Professor';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  public modalRef?: BsModalRef;
  public titulo = 'Professores';
  public professorSelecionado: Professor = null as any;

  public professores = [
    { id: 1, nome: 'Lauro', disciplina: 'Matemática' },
    { id: 2, nome: 'Roberto', disciplina: 'Física' },
    { id: 3, nome: 'Ronaldo', disciplina: 'Português' },
    { id: 4, nome: 'Rodrigo', disciplina: 'Inglês' },
    { id: 5, nome: 'Alexandre', disciplina: 'Programação' }
  ]

  openModal(template: TemplateRef<void>) {
    this.modalRef = this.modalService.show(template);
  }

  professorSelect(professor: Professor){
    this.professorSelecionado = professor;
  }

  voltar() {
    this.professorSelecionado = null as any;
  }

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

}
