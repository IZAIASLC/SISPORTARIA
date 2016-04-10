using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SisPortaria.Modelo;
using Incra.Estrutura.AcessoDados;

using SisPortaria.AcessoDados;
namespace SisPortaria.Servico
{
    public class VisitanteServico : IVisitanteServico
    {
       private IVisitanteAcessoDados repositorio;

        public VisitanteServico(IVisitanteAcessoDados repositorio)
        {
            this.repositorio = repositorio;
        }

       



        //public IEnumerable<Visitante> Pesquisar(System.Linq.Expressions.Expression<Func<Visitante, bool>> where)
        //{
        //    return repositorio.Pesquisar(x => x.CpfVisitante == 1).Select
        //    (x => new
        //    {
        //        x.Identificador,
        //        x.NomeVisitante
        //    }).ToList<Visitante>();
        //}

        public IList<Visitante> Consultar()
        {
           return repositorio.Consultar();
        }
    }
}
