import { Component, OnInit, TemplateRef } from '@angular/core';
import { Professor } from '../models/Professor';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ProfessorService } from './professor.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  public modalRef?: BsModalRef;
  public professorForm: FormGroup = {} as FormGroup;
  public titulo = 'Professores';
  public professorSelecionado: Professor = null as any;
  public modo = 'post';

  public professores: Professor[] = null as any;

  openModal(template: TemplateRef<void>) {
    this.modalRef = this.modalService.show(template);
  }

  voltar() {
    this.professorSelecionado = null as any;
  }

  constructor(private fb: FormBuilder,
              private modalService: BsModalService,
              private professorService: ProfessorService) { 
    this.criarForm();
  }

  ngOnInit() {
    this.carregarProfessores();
  }

  salvarProfessor(professor: Professor) {
    (professor.id === 0) ? this.modo = 'post' : this.modo = 'put';

    this.professorService[this.modo](professor).subscribe(
      (retorno: Professor) => {
        console.log(retorno);
        this.carregarProfessores();
      },
      (erro: any) => {
        console.log(erro);
      }
    );
  }

  professorSubmit() {
    this.salvarProfessor(this.professorForm.value);
  }

  carregarProfessores() {
    this.professorService.getAll().subscribe(
      (professores: Professor[]) => {
        this.professores = professores;
      },
      (erro: any) => {
        console.error(erro);
      }
    );
  }

  professorSelect(professor: Professor){
    this.professorSelecionado = professor;
    this.professorForm.patchValue(professor);
  }

  professorNovo() {
    this.professorSelecionado = new Professor();
    this.professorForm.patchValue(this.professorSelecionado);
  }

  criarForm() {
    this.professorForm = this.fb.group({
      id: [''],
      nome: ['', Validators.required]
    });
  }
}
