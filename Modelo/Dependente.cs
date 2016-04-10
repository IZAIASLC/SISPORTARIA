using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Incra.Estrutura.Modelo;

namespace SisPortaria.Modelo
{
   [Serializable]
   public class Dependente:Entidade
    {
        
        public virtual string Nome { get; set; }
        public virtual Morador Morador { get; set; }
    }
}
