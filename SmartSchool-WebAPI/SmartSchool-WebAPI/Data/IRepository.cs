﻿using SmartSchool_WebAPI.Models;
using System.Threading.Tasks;

namespace SmartSchool_WebAPI.Data
{
    public interface IRepository
    {
        #region Geral
        void Add<T>(T entity) where T : class;

        void Update<T>(T entity) where T : class;

        void Delete<T>(T entity) where T : class;

        Task<bool> SaveChangesAsync();
        #endregion

        #region Aluno
        Task<Aluno[]> GetAllAlunosAsync(bool includeProfessor);

        Task<Aluno[]> GetAlunosAsyncByDisciplinaId(int disciplinaId, bool includeDisciplina);

        Task<Aluno> GetAlunoAsyncById(int alunoId, bool includeProfessor);
        #endregion

        #region Professor
        Task<Professor[]> GetAllProfessoresAsync(bool includeAluno);

        Task<Professor> GetProfessorAsyncById(int professorId, bool includeAluno);

        Task<Professor[]> GetProfessoresAsyncByAlunoId(int alunoId, bool includeDisciplina);
        #endregion
    }
}