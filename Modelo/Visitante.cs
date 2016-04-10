using Incra.Estrutura.Modelo;
using System;

namespace SisPortaria.Modelo
{
    [Serializable]
    public class Visitante:Entidade
    {
        public virtual string Nome { get; set; }
        public virtual string Cpf { get; set; }
        public virtual string Identidade { get; set; }
        public virtual int Sexo { get; set; }
        public virtual byte[] Foto { get; set; }
    }
}
