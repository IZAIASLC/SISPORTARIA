using Incra.Estrutura.Modelo;
using System;
using System.Collections.Generic;

namespace SisPortaria.Modelo
{
    [Serializable]
    public class Morador:Entidade
    {
        public virtual string Nome { get; set; }
        public virtual string Identidade { get; set; }
        public virtual int Sexo { get; set; }
        public virtual byte[] Foto { get; set; }
        public virtual string Endereco { get; set; }
        public virtual DateTime DataNascimento { get; set; }
        public virtual Estado Estado { get; set; }

        public virtual IList<Dependente> Dependentes { get; set; }

 
    }
}
