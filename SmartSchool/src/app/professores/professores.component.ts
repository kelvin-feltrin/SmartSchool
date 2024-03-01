import { Component, OnInit, TemplateRef } from '@angular/core';
import { Professor } from '../models/Professor';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ProfessorService } from './professor.service';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  public modalRef?: BsModalRef;
  public titulo = 'Professores';
  public professorSelecionado: Professor = null as any;

  public professores: Professor[] = null as any;

  openModal(template: TemplateRef<void>) {
    this.modalRef = this.modalService.show(template);
  }

  professorSelect(professor: Professor){
    this.professorSelecionado = professor;
  }

  voltar() {
    this.professorSelecionado = null as any;
  }

  constructor(private modalService: BsModalService,
              private professorService: ProfessorService) { }

  ngOnInit() {
    this.carregarProfessor();
  }

  carregarProfessor() {
    this.professorService.getAll().subscribe(
      (professores: Professor[]) => {
        this.professores = professores;
      },
      (erro: any) => {
        console.error(erro);
      }
    );
  }
}
