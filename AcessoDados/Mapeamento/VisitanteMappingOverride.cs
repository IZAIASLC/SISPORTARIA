using FluentNHibernate.Automapping;
using FluentNHibernate.Automapping.Alterations;
using SisPortaria.Modelo;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AcessoDados.Mapeamento
{
    public class VisitanteMappingOverride : IAutoMappingOverride<Visitante>
    {

 
        public void Override(AutoMapping<Visitante> mapping)
        {
            mapping.Map(x => x.Foto)
              .Column("FOTO")
             .CustomSqlType("VARCHAR (MAX)")
             .Length(2147483647);
        }

       
       
    }
}
