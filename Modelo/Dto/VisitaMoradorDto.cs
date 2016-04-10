using SisPortaria.Modelo;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Modelo.Dto
{
    public class VisitaMoradorDto
    {
        public int Identificador { get; set; }
        public DateTime  Entrada { get; set; }
        public DateTime? Saida { get; set; }
        public MoradorDto Morador { get; set; }
        public VisitanteDto Visitante { get; set; }
    }
}
