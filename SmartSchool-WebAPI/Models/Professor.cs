namespace SmartSchool_WebAPI.Models
{
    public class Professor
    {
        public Professor(int id, string nome, string disciplina)
        {
            Id = id;
            Nome = nome;
            Disciplina = disciplina;
        }

        protected Professor() { }

        public int Id { get; set; }

        public string Nome { get; set; }

        public string Disciplina { get; set; }
    }
}