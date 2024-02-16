namespace SmartSchool_WebAPI.Models
{
    public class Professor
    {
        public Professor(int id, string nome)
        {
            Id = id;
            Nome = nome;
        }

        protected Professor() { }

        public int Id { get; set; }

        public string Nome { get; set; }

        public IEnumerable<Disciplina> Disciplinas { get; set; }
    }
}