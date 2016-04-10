using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using Incra.Estrutura.Modelo;
using SisPortaria.Modelo;
using Incra.Estrutura.AcessoDados;
namespace SisPortaria.Servico
{
    public interface IVisitanteServico
    {

        /// <summary>
        /// Obtém todas as ações.
        /// </summary>
        /// <returns>Uma coleção com todas as ações.</returns>
        IList<Visitante> Consultar();
       // IEnumerable<Visitante> Pesquisar(Expression<Func<Visitante, bool>> where);
        void Adicionar( 
    }
}
