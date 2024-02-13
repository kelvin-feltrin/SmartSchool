﻿namespace SmartSchool_WebAPI.Models
{
    public class AlunoDisciplina
    {
        public AlunoDisciplina(int alunoId, int disciplinaId)
        {
            AlunoId = alunoId;
            DisciplinaId = disciplinaId;
        }

        public AlunoDisciplina() { }

        public int AlunoId { get; set; }

        public Aluno Aluno { get; set; }

        public int DisciplinaId { get; set; }

        public Disciplina Disciplina { get; set; }
    }
}