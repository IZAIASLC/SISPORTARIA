using Incra.Estrutura.Modelo;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SisPortaria.Modelo
{
     [Serializable]
   public class Estado:Entidade
    {
         public virtual string SiglaEstado { get; set; }
         public virtual string NomeEstado { get; set; }
    }
}
