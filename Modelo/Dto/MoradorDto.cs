using Incra.Estrutura.Modelo;
using System;
using System.Collections.Generic;

namespace SisPortaria.Modelo
{
    
    public class MoradorDto 
    {
        public  int Identificador { get; set; }
        public  string Nome { get; set; }
        public  string Cpf { get; set; }
        public  string Identidade { get; set; }
        public  int Sexo { get; set; }
        public  byte[] Foto { get; set; }
        public  string Endereco { get; set; }
        public Estado Estado { get; set; }
        public DateTime DataNascimento { get; set; }
        public  IList<DependenteDto> Dependentes { get; set; }

 
    }
}
