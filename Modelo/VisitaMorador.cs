using Incra.Estrutura.Modelo;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SisPortaria.Modelo
{
    [Serializable]
    public class VisitaMorador:Entidade
    {
        public virtual DateTime Entrada { get; set; }
        public virtual DateTime? Saida { get; set; }
        public virtual Morador Morador { get; set; }
        public virtual Visitante Visitante { get; set; }
    }
}
