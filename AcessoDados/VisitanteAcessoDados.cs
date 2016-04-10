using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Incra.Estrutura.AcessoDados;
using SisPortaria.Modelo;
using NHibernate;
namespace SisPortaria.AcessoDados
{
    public class VisitanteAcessoDados:Repositorio<Visitante> ,IVisitanteAcessoDados
    {
        public VisitanteAcessoDados(IPersistencia persistencia) : base(persistencia) { }
    }
}
