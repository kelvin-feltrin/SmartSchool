import { Component, OnInit, TemplateRef } from '@angular/core';
import { Aluno } from '../models/Aluno';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

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

  alunos = [
    { id: 1, nome: 'Marta', sobrenome: 'Kent', telefone: 332255 },
    { id: 2, nome: 'Paula', sobrenome: 'Isabela', telefone: 332255 },
    { id: 3, nome: 'Laura', sobrenome: 'Antonia', telefone: 332255 },
    { id: 4, nome: 'Luiza', sobrenome: 'Maria', telefone: 332255 },
    { id: 5, nome: 'Lucas', sobrenome: 'Machado', telefone: 332255 },
    { id: 6, nome: 'Pedro', sobrenome: 'Alvares', telefone: 332255 },
    { id: 7, nome: 'Paulo', sobrenome: 'José', telefone: 332255 }
  ];
 
  openModal(template: TemplateRef<void>) {
    this.modalRef = this.modalService.show(template);
  }

  constructor(private fb: FormBuilder, 
              private modalService: BsModalService) { 
    this.criarForm();
  }

  ngOnInit() { }

  alunoSubmit() {
    console.log(this.alunoForm.value);
  }

  alunoSelect(aluno: Aluno){
    this.alunoSelecionado = aluno;
    this.alunoForm.patchValue(aluno);
  }

  voltar() {
    this.alunoSelecionado = null as any;
  }

  criarForm() {
    this.alunoForm = this.fb.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      telefone: ['', Validators.required]
    });
  }
}
