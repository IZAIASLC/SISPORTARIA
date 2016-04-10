using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Modelo.Dto
{
    public class VisitanteDto
    {
        public int Identificador { get; set; }
        public string Nome { get; set; }
        public string Cpf { get; set; }
        public string Identidade { get; set; }
        public int Sexo { get; set; }
        public byte[] Foto { get; set; }
        public string Endereco { get; set; }

    }
}
