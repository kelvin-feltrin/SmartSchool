import { Component, OnInit, TemplateRef } from '@angular/core';
import { Aluno } from '../models/Aluno';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlunoService } from './aluno.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public modalRef?: BsModalRef;
  public alunoForm: FormGroup = {} as FormGroup;
  public titulo = 'Alunos';
  public alunoSelecionado: Aluno = null as any;
  public modo = 'post';

  public alunos: Aluno[] = null as any;
 
  openModal(template: TemplateRef<void>) {
    this.modalRef = this.modalService.show(template);
  }

  constructor(private fb: FormBuilder, 
              private modalService: BsModalService,
              private alunoService: AlunoService) { 
    this.criarForm();
  }

  ngOnInit() {
    this.carregarAlunos();
   }

   carregarAlunos() {
    this.alunoService.getAll().subscribe(
      (alunos: Aluno[]) => {
        this.alunos = alunos;
      },
      (erro: any) => {
        console.log(erro);
      }
    );
   }

  salvarAluno(aluno: Aluno) {
    (aluno.id === 0) ? this.modo = 'post' : this.modo = 'put';

    this.alunoService[this.modo](aluno).subscribe(
      (retorno: Aluno) => {
        console.log(retorno);
        this.carregarAlunos();
      },
      (erro: any) => {
        console.log(erro);
      }
    );
  }

  deletarAluno(id: number) {
    this.alunoService.delete(id).subscribe(
      (model: any) => {
        console.log(model);
        this.carregarAlunos();
      },
      (erro: any) => {
        console.error(erro);
      }
    );
  }

  alunoSubmit() {
    this.salvarAluno(this.alunoForm.value);
  }

  alunoSelect(aluno: Aluno){
    this.alunoSelecionado = aluno;
    this.alunoForm.patchValue(aluno);
  }

  alunoNovo(){
    this.alunoSelecionado = new Aluno();
    this.alunoForm.patchValue(this.alunoSelecionado);
  }

  voltar() {
    this.alunoSelecionado = null as any;
  }

  criarForm() {
    this.alunoForm = this.fb.group({
      id: [''],
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      telefone: ['', Validators.required]
    });
  }
}
